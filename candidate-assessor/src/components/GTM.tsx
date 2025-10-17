import type React from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router"

type GoogleTagManagerProps = {
  id: string
}

declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

export const getIFrameURL = ({ id }: { id: string }) => {
  if (!id) {
    console.warn(
      "next-google-tag-manager: It looks like you forgot to configure your Google Tag Manager.",
    )
  }

  const queryParams = new URLSearchParams({ id })
  return `https://www.googletagmanager.com/ns.html?${queryParams.toString()}`
}

const isBrowser = typeof window !== "undefined"
const isCryptoAvailable =
  typeof globalThis.crypto !== "undefined" &&
  typeof globalThis.crypto.getRandomValues === "function"

const generateUid = () => {
  if (
    typeof globalThis.crypto !== "undefined" &&
    typeof globalThis.crypto.randomUUID === "function"
  ) {
    return globalThis.crypto.randomUUID()
  }

  if (isCryptoAvailable) {
    const array = new Uint32Array(4)
    globalThis.crypto.getRandomValues(array)
    return Array.from(array)
      .map((segment) => segment.toString(16).padStart(8, "0"))
      .join("-")
  }

  return Math.random().toString(36).slice(2)
}

export const getOrCreateUserId = () => {
  if (!isBrowser) {
    return generateUid()
  }

  const currentUserId = window.localStorage.getItem("userId")

  if (!currentUserId) {
    const newUserId = generateUid()

    window.localStorage.setItem("userId", newUserId)

    return newUserId
  } else {
    return currentUserId
  }
}

export const buildUniversal = () => ({
  pageReferer: typeof document !== "undefined" ? document.referrer : "",
  pathName: isBrowser ? window.location.pathname : "",
  userId: getOrCreateUserId(),
})

export const logEvent = (
  eventName: string,
  properties: Record<string, string | number>,
) => {
  if (!isBrowser) return

  if (!Array.isArray(window.dataLayer)) {
    window.dataLayer = []
  }

  window.dataLayer.push({
    event: eventName,
    ...buildUniversal(),
    ...properties,
  })
}

export const pageview = (url: string) => {
  if (!isBrowser) return
  logEvent("pageview", { url })
}

export const GTM: React.FC<GoogleTagManagerProps> = ({ id }) => {
  const environment = process.env.NODE_ENV

  const location = useLocation()

  useEffect(() => {
    if (location.pathname) pageview(location.pathname)
  }, [location.pathname])

  if (environment !== "production") {
    return null
  }

  return (
    <>
      <noscript>
        <iframe
          title="gtm"
          src={getIFrameURL({ id })}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <Helmet>
        <script id="gtm-script" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${id}');
          `}
        </script>
      </Helmet>
    </>
  )
}
