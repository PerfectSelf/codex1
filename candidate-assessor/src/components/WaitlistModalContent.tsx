import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, CheckCircle } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useId } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { useStartFormEvent } from "../hooks/useStartFormEvent"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { useSubmitFormToGoogleSheet } from "./useSubmitFormToGoogleSheet"

const WHERE_DID_YOU_HEAR_ABOUT_US_OPTIONS = [
  "Email",
  "LinkedIn",
  "Facebook/Social",
  "Google Ad",
  "Other",
] as const

const requiredStringSchema = z.string().min(1, "This field is required").trim()
const schema = z.object({
  firstName: requiredStringSchema,
  lastName: requiredStringSchema,
  email: z.email().min(1).trim(),
  company: requiredStringSchema,
  companySize: z.string().trim(),
  role: z.string().trim(),
  whereDidYouHearAboutUs: z
    .enum(WHERE_DID_YOU_HEAR_ABOUT_US_OPTIONS)
    .nullable(),
})

type WaitlistModalContentProps = {
  email?: string
  onClose: () => void
}

export const WaitlistModalContent = ({
  email,
  onClose,
}: WaitlistModalContentProps) => {
  const firstNameId = useId()
  const lastNameId = useId()
  const emailId = useId()
  const companyId = useId()
  const companySizeId = useId()
  const roleId = useId()

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    values: {
      firstName: "",
      lastName: "",
      email: email || "",
      company: "",
      companySize: "",
      role: "",
      whereDidYouHearAboutUs: null,
    },
  })

  const {
    handleSubmit: handleSubmitToGoogleSheet,
    isComplete,
    formRef: formRefToGoogleSheet,
    isLoading,
    setIsComplete,
    handleStartForm,
  } = useSubmitFormToGoogleSheet({
    projectName: "CandidateAssessor",
  })

  useStartFormEvent(watch, handleStartForm)

  const onSubmit = handleSubmit(async (inputValues) => {
    await handleSubmitToGoogleSheet(undefined, inputValues)

    // Show success toast
    toast.success("Thanks for requesting a CandidateAssessor simulation!", {
      description: "We'll follow up shortly to schedule your predictive hiring preview.",
    })

    // Reset form and close modal after delay
    setTimeout(() => {
      setIsComplete(false)
      reset()
      onClose()
    }, 2000)
  })

  return (
    <AnimatePresence mode="wait">
      {isComplete ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="text-center py-8 space-y-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
          >
            <CheckCircle className="h-8 w-8 text-green-600" />
          </motion.div>
          <div>
            <h3 className="text-lg font-medium text-foreground">
              You're on the list!
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Our team will send over your tailored simulation briefing shortly.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          onSubmit={onSubmit}
          className="space-y-5"
          ref={formRefToGoogleSheet}
        >
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={firstNameId} className="text-sm font-medium">
                First Name *
              </Label>
              <Input
                id={firstNameId}
                type="text"
                placeholder="Avery"
                className="bg-input-background border-input-border focus:border-primary focus:ring-primary/25"
                {...register("firstName")}
                error={errors.firstName?.message}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={lastNameId} className="text-sm font-medium">
                Last Name *
              </Label>
              <Input
                id={lastNameId}
                type="text"
                placeholder="Jordan"
                className="bg-input-background border-input-border focus:border-primary focus:ring-primary/25"
                {...register("lastName")}
                error={errors.lastName?.message}
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor={emailId} className="text-sm font-medium">
              Email Address *
            </Label>
              <Input
                id={emailId}
                type="email"
                placeholder="avery@company.com"
                className="bg-input-background border-input-border focus:border-primary focus:ring-primary/25"
                {...register("email")}
                error={errors.email?.message}
              />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor={companyId} className="text-sm font-medium">
              Company Name *
            </Label>
              <Input
                id={companyId}
                type="text"
                placeholder="Company name"
                className="bg-input-background border-input-border focus:border-primary focus:ring-primary/25"
                {...register("company")}
                error={errors.company?.message}
              />
          </div>

          {/* Company Size & Role */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={companySizeId} className="text-sm font-medium">
                Company Size
              </Label>
              <Controller
                name="companySize"
                control={control}
                render={({ field: { onChange, ...field } }) => (
                  <Select onValueChange={onChange} {...field}>
                    <SelectTrigger className="bg-input-background border-input-border focus:border-primary focus:ring-primary/25">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1-50 teammates</SelectItem>
                      <SelectItem value="51-200">51-200 teammates</SelectItem>
                      <SelectItem value="201-500">201-500 teammates</SelectItem>
                      <SelectItem value="500+">501+ teammates</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={roleId} className="text-sm font-medium">
                Your Role
              </Label>
              <Controller
                name="role"
                control={control}
                render={({ field: { onChange, ...field } }) => (
                  <Select onValueChange={onChange} {...field}>
                    <SelectTrigger className="bg-input-background border-input-border focus:border-primary focus:ring-primary/25">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="head-talent">
                        Head of Talent / Recruiting
                      </SelectItem>
                      <SelectItem value="talent-lead">Recruiting Lead</SelectItem>
                      <SelectItem value="hiring-manager">
                        Hiring Manager / Department Lead
                      </SelectItem>
                      <SelectItem value="people-ops">People Ops</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Where did you hear about us?
            </Label>
            <Controller
              name="whereDidYouHearAboutUs"
              control={control}
              render={({ field: { onChange, ...field } }) => (
                <Select onValueChange={onChange} {...field}>
                  <SelectTrigger className="bg-input-background border-input-border focus:border-primary focus:ring-primary/25">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {WHERE_DID_YOU_HEAR_ABOUT_US_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-primary py-3 text-base font-semibold text-white shadow-[0_24px_44px_-24px_rgba(15,138,126,0.6)] transition hover:bg-primary-dark"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <motion.div
                  className="mr-2 h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Preparing request...
              </>
            ) : (
              <>
                Request a simulation preview
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By requesting access you'll receive predictive hiring updates from CandidateAssessor. Unsubscribe anytime.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
