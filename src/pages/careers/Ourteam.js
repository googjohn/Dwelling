// import ourteamLogo  from "../assets/images/ourteam.jpg";
import { Footer } from "../../components/Footer";
import Image1 from "../../assets/images/profile-pictures/roper.jpg";
import Image2 from "../../assets/images/profile-pictures/jeric.jpeg";
import Image3 from "../../assets/images/profile-pictures/jake.jpeg";
import Image4 from "../../assets/images/profile-pictures/victor.jpeg";
import { Navbar } from "../../components/Navbar";
import { ContactUs } from "../ContactUs";

const people = [
  {
    name: 'Ropher Jhon Gares ',
    role: 'Co-Founder',
    imageUrl: Image1,
  },
  {
    name: 'Jeric Causo',
    role: 'Co-Founder',
    imageUrl: Image2,
  },
  {
    name: 'Ronald Jake Oloya',
    role: 'Co-Founder',
    imageUrl: Image3,
  },
  {
    name: 'Victor Niño Yamba',
    role: 'Co-Founder',
    imageUrl: Image4,
  },
  // More people...
]

export const Ourteam = () => {
  return (
    <>
      <Navbar />
      <div className=" flex-wrap  content-center pt-10 pb-24 sm:py-32">
        <div className="mx-auto grid  gap-x-11 gap-y-3  xl:grid-cols-2">
          <div className="max-auto">
            <p className="text-5xl pt-12  font-bold pb-0 flex justify-center tracking-tight text-gray-900 sm:text-4xl">Our Team</p>
            <p className="mt-6 text-lg leading-8 text-justify  p-20 pb-2 pt-2 text-gray-600 ">
              TopAgent, a Philippine-based real estate firm, excels in assisting clients with property buying, selling, and renting. Our expert team of agents, well-versed in the local market, is dedicated to fulfilling client real estate objectives. We offer comprehensive services such as property listing, management, real estate consultancy, and investment advisory, catering to both local and international clients through a robust online platform.
            </p>
          </div>
          <div className="grid justify-center content-center sm:pl-5 sm:m-9">
            <ul role="list" className="grid gap-x-20 sm:grid-cols-2 sm:gap-y-16  xl:col-span-2 mt-6">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flew-wrap flex content-center gap-6 sm:pb-3 ">
                    <img className="h-24 w-24 border-gold rounded-full " src={person.imageUrl} alt="" />
                    <div>
                      <h3 className="text-base  font-bold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-gray-700">{person.role}</p>

                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  )
}
