import { useEffect } from "react"
import type { FieldValues, UseFormWatch } from "react-hook-form"

export const useStartFormEvent = <TFieldValues extends FieldValues>(
  watch: UseFormWatch<TFieldValues>,
  handleStartForm: () => void,
) => {
  useEffect(() => {
    const { unsubscribe } = watch((_, { type }) => {
      if (type === "change") {
        handleStartForm()
      }
    })

    return () => {
      unsubscribe()
    }
  }, [watch, handleStartForm])
}
