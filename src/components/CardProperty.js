import { Link } from "react-router-dom"
import { UseSkeletonLoader } from "../hooks/UseSkeletonLoader"
export const CardProperty = () => {
  return (
    <>
      <section id="card-property">
        <UseSkeletonLoader />
        <div className="relative md:max-w-sm sm:w-full bg-gray-100 border border-gray-200 rounded-md hover:drop-shadow-lg transition duration-500 ease-out dark:bg-gray-800 dark:border-gray-700">
          <div className="absolute top-2 left-2 z-20">
            <button className="px-3 py-1 rounded-full bg-gray-300/50 font-medium text-gray-700 hover:bg-gray-300/80"><i className="fa-solid fa-location-dot"></i> Location</button>
          </div>
          <Link to="/property-details" className="relative inline-block overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img className="z-10 object-cover w-full h-full rounded-t-md transform transition duration-500 ease-in-out hover:scale-110 hover:shadow-lg" src="https://www.presello.com/wp-content/uploads/2022/09/29134-2.jpg" alt="" />
            </div>
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Php 100,000,000</h5>
            <Link to="#" className="hover:text-green transition duration-500 ease-in-out mb-3 text-lg font-medium text-gray-800 dark:text-gray-400 block">
              Inside of a Modern Voluptuous BGC, Taguig City
            </Link>
            <div className="flex gap-8 mb-2">
              <div>
                <i className="fas fa-bed"></i><span className="uppercase"> 4 Bedrooms</span>
              </div>
              <div>
                <i className="fas fa-shower"></i><span className="uppercase"> 5 Bathrooms</span>
              </div>
            </div>
            <p className="uppercase text-base mb-4 font-medium">Available</p>
            <div className="flex justify-between items-center">
              <Link to="/property-details" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-green transition duration-500 bg-transparent hover:bg-green hover:text-white rounded-full border-2 border-green focus:ring-0 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                More Details
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Link>
              <Link to="../pages/Property" title="Add to List">
                <i className="fa-solid fa-bookmark text-3xl text-green hover:text-gold"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
