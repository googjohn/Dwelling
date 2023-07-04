import { Link } from "react-router-dom"
import YourComponent from "../hooks/YourComponent"
export const PageNotFound = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-green to-gold w-screen h-screen text-white text-4xl flex justify-center items-center">
        <h1>Page Not Found go back to <Link to='/' className="hover:text-green">Home</Link></h1>
      </div>
      <YourComponent />
    </>
  )
}
