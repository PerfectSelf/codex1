const INTEGRATIONS = [
  "Greenhouse",
  "Lever",
  "Ashby",
  "Workday",
  "iCIMS",
  "BambooHR",
  "SAP SuccessFactors",
  "Rippling",
]

export function IntegrationsLogos() {
  return (
    <section id="security" className="border-b border-border/60 bg-white py-12">
      <div className="container space-y-6 text-center">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
            Works with your hiring stack
          </p>
          <p className="text-sm text-muted-foreground">
            Push structured evidence, notes, and briefs directly into the tools your recruiters already rely on.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {INTEGRATIONS.map((integration) => (
            <span
              key={integration}
              className="inline-flex min-w-[160px] items-center justify-center rounded-full border border-border/70 bg-muted/30 px-5 py-2 text-sm font-medium text-muted-foreground shadow-sm"
            >
              {integration}
            </span>
          ))}
        </div>

        <div className="mx-auto flex max-w-xl items-center justify-center gap-3 rounded-full border border-border/60 bg-white px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm">
          <span>SOC 2 Type II • GDPR-ready processing • SSO across major identity providers</span>
        </div>
      </div>
    </section>
  )
}
