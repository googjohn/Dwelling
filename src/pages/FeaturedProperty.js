import { Outlet } from "react-router-dom"
import { CardPropertyList } from "../components/CardPropertyList"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { ContactUs } from "./ContactUs"

export const FeaturedProperty = () => {
  return (
    <>
      <Navbar />
      <CardPropertyList />
      <main>
        <Outlet />
      </main>
      <ContactUs />
      <Footer />
    </>
  )
}
