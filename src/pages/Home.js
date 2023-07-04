import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import { CarouselProperty } from "../components/CarouselProperty"
import { CardPropertyList } from "../components/CardPropertyList"
import { PropertyDetails } from "./PropertyDetails"
import { ContactUs } from "./ContactUs"
import { Affiliates } from "./Affiliates"
// import Fetch from "../hooks/Fetch"

export const Home = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <CarouselProperty />
      <CardPropertyList />
      <PropertyDetails />
      <Affiliates />
      <ContactUs />
      <Footer />
      {/* <Fetch /> */}
    </>
  )
}
