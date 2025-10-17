import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { useStartFormEvent } from "../hooks/useStartFormEvent"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { cn } from "./ui/utils"
import { useSubmitFormToGoogleSheet } from "./useSubmitFormToGoogleSheet"
import { WaitlistModal } from "./WaitlistModal"

const schema = z.object({
  email: z.email().min(1).trim(),
})

type SubmitFormProps = {
  shouldOpenWaitlistModal?: boolean
  inputClassName?: string
}

export const SubmitForm = ({
  shouldOpenWaitlistModal,
  inputClassName,
}: SubmitFormProps) => {
  const [email, setEmail] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  })

  const {
    handleSubmit: handleSubmitToGoogleSheet,
    isComplete,
    formRef,
    isLoading,
    getButtonContent,
    handleStartForm,
  } = useSubmitFormToGoogleSheet({
    projectName: "CandidateAssessor",
  })

  useStartFormEvent(watch, handleStartForm)

  const onSubmit = handleSubmit(async (inputValues) => {
    if (shouldOpenWaitlistModal) {
      setEmail(inputValues.email)
      setIsModalOpen(true)
    }

    await handleSubmitToGoogleSheet()

    if (!shouldOpenWaitlistModal) {
      toast.success("Predictive simulation requested!", {
        description: "We'll follow up soon with timing and next steps.",
      })
    }
  })

  return (
    <>
      <form
        onSubmit={onSubmit}
        ref={formRef}
        className="relative w-full max-w-sm"
      >
        <div className="relative flex h-12 items-stretch overflow-hidden rounded-xl border border-primary/50 bg-white shadow-[0_18px_34px_-24px_rgba(40,52,95,0.4)] focus-within:ring-2 focus-within:ring-primary/40 dark:bg-card">
          <Input
            type="email"
            placeholder="Work email for a predictive simulation"
            className={cn(
              "flex-1 h-full border-0 bg-transparent pr-2 text-sm focus:border-0 focus:ring-0",
              inputClassName,
            )}
            {...register("email")}
            error={errors.email?.message}
          />
          <Button
            type="submit"
            className="flex h-full items-center justify-center bg-primary px-6 text-white hover:bg-primary-dark"
            disabled={
              shouldOpenWaitlistModal ? undefined : isLoading || isComplete
            }
          >
            {!shouldOpenWaitlistModal && (isLoading || isComplete) ? (
              getButtonContent()
            ) : (
              <ArrowRight className="size-6" />
            )}
          </Button>
        </div>
      </form>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        email={email}
      />
    </>
  )
}
