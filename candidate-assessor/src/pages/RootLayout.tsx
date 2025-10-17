import { Outlet } from "react-router"
import { Footer } from "../components/Footer"
import { GTM } from "../components/GTM"

const GTM_ID = "GTM-TLW7X9TW"

export const RootLayout = () => (
  <>
    <GTM id={GTM_ID} />
    <Outlet />
    <Footer />
  </>
)
