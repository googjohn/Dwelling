// import Logo from '../assets/images/logo-no-bg.png'
// import { Link, NavLink } from 'react-router-dom'
// import { ContactUs } from '../pages/ContactUs'
// export const Navbar = () => {
//   return (
//     <>
//       <header className='sticky top-0 h-[20] w-full z-[100]'>
//         <nav id="nav-bar" className=" border-gray-200 dark:bg-gray-900 w-full z-[1000]">
//           {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green to-gold rounded-md filter blur-3xl opacity-50 -z-50"></div> */}
//           <div className=" flex flex-wrap items-center justify-between ">
//             <Link id="nav-logo" to="/" className="flex items-center">
//               <img src={Logo} className="h-20 ml-36" alt="topagent logo" />
//             </Link>
//             {/* <div className="flex items-center md:order-2">
//               <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
//                 <span className="sr-only">Open main menu</span>
//                 <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
//               </button>
//             </div> */}
//             <div class="flex md:order-2">
//               <Link to="/contact">
//                 {/* <button type="button" class="text-white bg-green hover:bg-green focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-green dark:hover:bg-green dark:focus:ring-green">Get started</button> */}
//                 {<ContactUs />}
//               </Link>
//               <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//                 <span class="sr-only">Open main menu</span>
//                 <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//               </button>
//             </div>
// <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
//   <ul className="flex overflow-hidden flex-nowrap flex-col font-medium  md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//     <li>
//       <NavLink to="/" className="nav-link block text-white text-lg  md:bg-transparent md:hover:text-green transition duration-300 ease-in-out  md:text-white md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
//     </li>
//     <li>
//       <NavLink to="/about" className="nav-link block text-gray-100  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green transition duration-300 ease-in-out text-lg md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
//     </li>
//     <li>
//       <NavLink to="/featured-properties" className="nav-link block text-gray-100  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green transition duration-300 ease-in-out text-lg md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Featured Properties</NavLink>
//     </li>
//     <li>
//       <NavLink to="/condo" className="nav-link block text-gray-100  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green transition duration-300 ease-in-out text-lg md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Condominiums</NavLink>
//     </li>
//     <li>
//       <NavLink to="/contact" className="nav-link block text-gray-100  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green transition duration-300 ease-in-out text-lg md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</NavLink>
//     </li>
//   </ul>
// </div>
//           </div>
//         </nav>
//       </header>
//     </>
//   )
// }
import { NavLink, Link } from 'react-router-dom'
import React from 'react'
import Logo from '../assets/images/logo-no-bg.png'
import { ContactUs } from '../pages/ContactUs'
// import { SignUp } from './SignUp'

export const Navbar = () => {
  return (
    <>
      <header className='sticky top-0 z-[1000]'>
        <nav className="bg-black/70 border-gray-200 dark:bg-gray-900">

          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link id="logo-link" to="/" className="flex items-center">
              <img

                src={Logo}
                className="h-20 mr-3"
                alt="OurLogo"
              />

            </Link>
            <div className="flex md:order-2">
              <ContactUs />
              {/* <SignUp /> */}



              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
              <ul className="flex overflow-hidden flex-nowrap flex-col font-medium  md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink to="/" className="nav-link block text-white text-lg  md:bg-transparent md:hover:text-green transition duration-300 ease-in-out  md:text-white md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="nav-link block text-gray-100  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green transition duration-300 ease-in-out text-lg md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                </li>
                <li>
                  <NavLink to="/featured-properties" className="nav-link block text-gray-100  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green transition duration-300 ease-in-out text-lg md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Featured Properties</NavLink>
                </li>
                {/* <li>
                  <NavLink to="/condo" className="nav-link block text-gray-100  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green transition duration-300 ease-in-out text-lg md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Condominiums</NavLink>
                </li> */}
                <li>
                  <NavLink to="/contact" className="nav-link block text-gray-100  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green transition duration-300 ease-in-out text-lg md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </header></>
  )
}


