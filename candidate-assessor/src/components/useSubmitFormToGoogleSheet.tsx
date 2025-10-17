import { type FormEvent, useCallback, useRef, useState } from "react"
import { useSearchParams } from "react-router"
import { logEvent } from "./GTM"
import { Spinner } from "./Spinner"

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz6xqCaI0BkWc0K57j70_S4XuUItO-B4MoCoGyvw3hPOO7ijsAdD3Xy5cLIXMUXYwst/exec"

type UseSubmitFormToGoogleSheetProps = {
  projectName: string // Tab name in Google Sheet
  submitButtonText?: string
  additionalParams?: Record<string, string>
}

export const useSubmitFormToGoogleSheet = ({
  projectName,
  submitButtonText = "Submit",
  additionalParams,
}: UseSubmitFormToGoogleSheetProps) => {
  const [searchParams] = useSearchParams()

  const plan = searchParams.get("plan")

  const formRef = useRef<HTMLFormElement>(null)
  const touchRef = useRef<boolean>(false)

  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = useCallback(
    async (
      e?: FormEvent<HTMLFormElement>,
      inputValues?: Record<string, string | null>,
    ) => {
      setIsLoading(true)
      e?.preventDefault()
      if (formRef.current) {
        const formData = new FormData(formRef.current)
        const formParams = new URLSearchParams(searchParams.toString())

        if (inputValues) {
          Object.entries(inputValues).forEach(([key, value]) => {
            if (value) {
              formParams.set(key, value)
            }
          })
        }

        if (additionalParams) {
          Object.entries(additionalParams).forEach(([key, value]) => {
            formParams.set(key, value)
          })
        }

        formData.append("params", formParams.toString())

        const url = new URL(SCRIPT_URL)
        url.searchParams.append("name", projectName)

        await fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => {
            console.log("SUCCESSFULLY SUBMITTED", res)
            logEvent("form_submit", {
              ...(plan ? { plan } : {}),
            })
            setIsComplete(true)
          })
          .catch((err) => {
            console.log(err)
            setIsLoading(false)
          })
          .finally(() => {
            setIsLoading(false)
          })
      } else {
        setIsLoading(false)
      }
    },
    [additionalParams, plan, projectName, searchParams],
  )

  const getButtonContent = () => {
    let content: React.ReactNode
    if (isLoading) {
      content = <Spinner />
    } else if (isComplete) {
      content = "✓"
    } else {
      content = submitButtonText
    }

    return content
  }

  const handleStartForm = useCallback(() => {
    if (!touchRef.current) {
      logEvent("form_start", {
        ...(plan ? { plan } : {}),
      })
      touchRef.current = true
    }
  }, [plan])

  return {
    handleSubmit,
    getButtonContent,
    handleStartForm,
    isComplete,
    formRef,
    isLoading,
    setIsComplete,
  }
}
