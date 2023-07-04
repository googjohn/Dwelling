import { CardProperty } from "../components/CardProperty"

export const PropertyDetails = () => {
  return (
    <>
      <div id="property-details" className="container  mx-auto max-w-screen bg-gray-100 border border-gray-200 duration-500 ease-out dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between uppercase font-medium text-lg text-gray-500">
          <div><i className="fa-solid fa-location-dot"></i> BGC, Taguig City</div>
          <div><p className="">Available</p></div>
        </div>
        <div className="flex justify-between">
          <a href="#" className="hover:text-green transition duration-500 ease-in-out mb-3 text-3xl font-medium text-gray-800 dark:text-gray-400 block">
            Inside of a Modern Voluptuous BGC, Taguig City
          </a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Php 100,000,000</h5>
        </div>
        {/* <div className="max-h-full mx-auto w-full object-scale-down">
      <a href="/" className="">
      <img className="h-[30rem] w-full object-cover" src="https://www.presello.com/wp-content/uploads/2022/09/29134-2.jpg" alt="" />
      </a>
    </div> */}
        <div id="gallery" className="relative w-full" data-carousel="slide">
          <div className="relative h-[32rem] h overflow-hidden">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://www.presello.com/wp-content/uploads/2022/09/29134-2.jpg" className="absolute block max-w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full w-full object-cover" alt="" />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
              <img src="https://www.presello.com/wp-content/uploads/2022/09/29134-1.jpg" className="absolute block max-w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full w-full object-cover" alt="" />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://www.presello.com/wp-content/uploads/2020/09/IMG_9557-scaled.jpg" className="absolute block max-w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full w-full object-cover" alt="" />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://www.presello.com/wp-content/uploads/2022/10/F8342A6B-B949-4C0E-9FEF-036EFD853F62-scaled.jpg" className="absolute block max-w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full w-full object-cover" alt="" />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="https://www.presello.com/wp-content/uploads/2022/02/21487-1.jpg" className="absolute block max-w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full w-full object-cover" alt="" />
            </div>
          </div>
          <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="p-5 w-5/6">
            <div className="flex gap-6 mb-2 uppercase">
              <div>
                <i className="fas fa-bed"></i><span> 4</span><span className="block"> Bedrooms</span>
              </div>
              <div>
                <i className="fas fa-shower"></i><span> 5</span><span className="block"> Bathrooms</span>
              </div>
              <div>
                <i className="fa-solid fa-car"></i><span></span><span className="block"> Car Parks</span>
              </div>
              <div>
                <i className="fa-solid fa-table-cells-large"></i><span> 1059.33 m2</span><span className="block"> Floor Area</span>
              </div>
              <div>
                <i className="fa-solid fa-ruler-combined"></i><span> 1873 m2</span><span className="block"> Lot Area</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-3">
              <a href="../pages/Property" title="Add to List">
                <i className="fa-solid fa-bookmark text-3xl text-green hover:text-gold"></i>
              </a>
            </div>
            <div className="">
              <h2 className="uppercase font-bold text-xl mb-3">Description</h2>
              <p className="text-lg">Inside of a Modern Voluptuous South Forbes, Makati City</p>
            </div>
          </div>
          <div className="">
            <div id="card-booking" className="relative bg-black text-center text-white p-10 m-5 max-w-md rounded-xl transform hover:translate-y-1 hover:drop-shadow-lg transition duration-500 ease-out">
              <div className="absolute top-0 left-0 filter blur bg-black"></div>
              <h2 className="uppercase text-xl font-bold mb-3">Interested in this Property?</h2>
              <p className="mb-3">Our listings are in high demand, so don’t wait until your chance is over. Talk to one of our agents now to schedule a viewing.</p>
              <button className="uppercase p-2 bg-transparent inline-block mx-auto w-full rounded-full text-xl border-2  hover:bg-green border-white">Book A Viewing</button>
            </div>
            <div className="text-center w-full">
              <h3 className="uppercase text-xl mb-3 font-bold">share this property</h3>
              <div className="w-full">
                <ul className="grid grid-cols-4 p-5 gap-1">
                  <li><a href="" className="py-2 px-9 hover:border-white w-full rounded-full bg-blue-500"><i class="fa-brands fa-facebook text-white"></i></a></li>
                  <li><a href="" className="py-2 px-9 hover:border-white w-full rounded-full bg-blue-700"><i class="fa-brands fa-twitter text-white"></i></a></li>
                  <li><a href="" className="py-2 px-9 hover:border-white w-full rounded-full bg-red-600"><i class="fa-brands fa-pinterest text-white"></i></a></li>
                  <li><a href="" className="py-2 px-9 hover:border-white w-full rounded-full bg-blue-600"><i class="fa-brands fa-linkedin text-white"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 grid grid-cols-2 row-auto gap-10 mb-20">
          <div className="order-1">
            <h2 className="uppercase font-bold text-xl mb-3">Home Features</h2>
            <ul className="capitalize text-lg">
              <li><i className="fa-solid fa-check"></i> maid's room</li>
              <li><i className="fa-solid fa-check"></i> smart home</li>
              <li><i className="fa-solid fa-check"></i> walk-in closet</li>
              <li><i className="fa-solid fa-check"></i> dirty kitchen</li>
              <li><i className="fa-solid fa-check"></i> premium finish</li>
              <li><i className="fa-solid fa-check"></i> family room</li>
              <li><i className="fa-solid fa-check"></i> guest room</li>
              <li><i className="fa-solid fa-check"></i> spacious master Bedrooms</li>
              <li><i className="fa-solid fa-check"></i> porch</li>
              <li><i className="fa-solid fa-check"></i> barbecue area</li>
              <li><i className="fa-solid fa-check"></i> stunning architecture</li>
              <li><i className="fa-solid fa-check"></i> a/c units included</li>
              <li><i className="fa-solid fa-check"></i> swimming pool</li>
              <li><i className="fa-solid fa-check"></i> lush garden</li>
              <li><i className="fa-solid fa-check"></i> led lights</li>
              <li><i className="fa-solid fa-check"></i> high ceiling</li>
              <li><i className="fa-solid fa-check"></i> foyer</li>
              <li><i className="fa-solid fa-check"></i> lanai</li>
              <li><i className="fa-solid fa-check"></i> water storage tracking</li>
              <li><i className="fa-solid fa-check"></i> high fence</li>
              <li><i className="fa-solid fa-check"></i> laundry area</li>
              <li><i className="fa-solid fa-check"></i> driver's room</li>
              <li><i className="fa-solid fa-check"></i> gym</li>
              <li><i className="fa-solid fa-check"></i> breathtaking views</li>
              <li><i className="fa-solid fa-check"></i> utility area</li>
              <li><i className="fa-solid fa-check"></i> guest parking</li>
            </ul>
          </div>
          <div className="order-3">
            <h2 className="uppercase font-bold text-xl mb-3">Neighborhood features</h2>
            <ul className="capitalize text-lg">
              <li><i className="fa-solid fa-check"></i> private gated community</li>
              <li><i className="fa-solid fa-check"></i> CCTV in common areas</li>
              <li><i className="fa-solid fa-check"></i> clubhouse</li>
              <li><i className="fa-solid fa-check"></i> basketball court</li>
              <li><i className="fa-solid fa-check"></i> playground</li>
              <li><i className="fa-solid fa-check"></i> spacious driveways</li>
              <li><i className="fa-solid fa-check"></i> lush greenery</li>
            </ul>
          </div>
          <div className="order-4">
            <h2 className="uppercase font-bold text-xl mb-3">Neighborhood/vicinity</h2>
            <ul className="capitalize text-lg">
              <li>BGC</li>
            </ul>
          </div>
          <div className="order-2">
            <h2 className="uppercase font-bold text-xl mb-3">Nearby establishments</h2>
            <ul className="capitalize text-lg">
              <li><span className="font-bold">Food Hubs:</span> BGC food Hubs</li>
              <li><span className="font-bold">
                Grocery:
              </span> SM Hypermarket
              </li>
              <li><span className="font-bold">
                Gym:
              </span> Anytime Fitness Bonifacio
              </li>
              <li><span className="font-bold">
                School:
              </span>  University of Makati, De La Salle University Rufino Campus,The British School Manila, International School Manila (ISM), Everest Academy, Fort Bonifacio High School
              </li>
              <li><span className="font-bold">
                Mall/Store:
              </span> Market Market, SM Aura, BGC Uptown Mall, Venice Grand Canal, SM Megamall, Rustan's - Shangri-La Plaza
              </li>
              <li><span className="font-bold">
                Hospital:
              </span> Unciano General Hospital, St. Lukes Medical Center BGC, Ospital ng Makati, The Medical City
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mb-5"><h2 className="uppercase text-2xl  font-bold">Suggested Properties</h2></div>
        <div className="flex mx-auto w-full justify-center gap-8 mb-20">
          <CardProperty />
          <CardProperty />
          <CardProperty />
        </div>
      </div>
    </>
  )
}
