import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
export const RootLayout = () => {
  return (
    <>
      <div className='root-layout'>

        <Navbar />
        <main>
          <Outlet />
        </main>



        <Footer />
      </div>

    </>
  )
}
