import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo-no-bg.png';
import TermsAndConditionsModal from '../pages/TermsAndConditionsModal.js';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import { Licensing } from '../pages/Licensing';
export const Footer = () => {
  return (
    <footer className=' bg-black w-full text-white'>

      {/* <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-br from-green to-gold rounded-lg filter blur-3xl opacity-50 "></div> */}
      <section id="footer-content" className="py-4">
        <div className="container py-4 mx-auto w-full max-w-screen-xl">
          <div className="foot-item-header pb-4">
            <img className="w-1/3 mx-auto" src={Logo} alt="topagent logo" />
          </div>
          <div id="id" className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <div className="foot-item">
                <div className="foot-item-header pb-4">
                  <h3 className="w-title-a text-brand font-medium  text-3xl">About Us</h3>
                </div>
                <div className="w-body-a">
                  <p className="w-text-a">
                    TopAgentPH is a real estate company based in the Philippines
                    that specializes in providing exceptional service to clients
                    in buying, selling, and renting properties.
                  </p>
                </div>
                <div className="w-footer-a mt-4">
                  <ul className="">
                    <li className="">
                      <span className="font-bold">Phone:</span> +54 356 945234
                    </li>
                    <li className="">
                      <span className="font-bold">Email:</span> topagent@capstone.ph
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="foot-item ">
                <div className="foot-item-header pb-4">
                  <h3 className="w-title-a text-brand font-medium  text-3xl">The Company</h3>
                </div>
                <div className="w-body-a">
                  <ul className="">

                    <li className="item-list-a">

                      <Link to="/ourteam" className='py-1'>Our Team</Link>
                    </li>
                    <li className="item-list-a">

                      <Link to="/careers" className='py-1'>Careers</Link>
                    </li>
                    <li className="item-list-a">

                      <Link to="/affiliates" className='py-1'>Affiliates</Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="foot-item">
                <div className="foot-item-header pb-4">
                  <h3 className="w-title-a text-brand font-medium  text-3xl">Key Locations</h3>
                </div>
                <div>
                  <ul className="">
                    <li className="item-list-a">

                      <Link href="#" className='py-1'>Baguio City</Link>
                    </li>
                    <li className="item-list-a">

                      <Link href="#" className='py-1'>Cebu City</Link>
                    </li>
                    <li className="item-list-a">

                      <Link href="#" className='py-1'>Davao City</Link>
                    </li>

                    <li className="item-list-a">

                      <Link href="#" className='py-1'>Metro Manila</Link>
                    </li>
                    <li className="item-list-a">

                      <Link href="#" className='py-1'>Tagaytay</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='foot-item '>
                <div className="foot-item-header pb-4">
                  <h3 className="w-title-a text-brand font-medium  text-3xl">Legal</h3>
                </div>
                <ul id="footer-legal">
                  <li className="item-list-a">
                    {/* <Link href="#" className="py-1">Privacy Policy</Link> */}
                    {/* <Link to="privacy-policy">
                      <button data-modal-target="privacyModal" data-modal-toggle="privacyModal" className="py-1" type="button">Privacy Policy</button></Link> */}
                    <button>{<PrivacyPolicy />}</button>
                  </li>
                  <li className="item-list-a">
                    {/* <Link href="#" className="py-1">Licensing</Link> */}
                    <button>{<Licensing />}</button>
                  </li>
                  <li className="item-list-a">
                    {/* <Link to='terms-and-conditions' className="py-1">Terms &amp; Conditions</Link> */}
                    {/* <button data-modal-target="ModalTandC" data-modal-toggle="ModalTandC" className="py-1" type="button">Terms &amp; Conditions</button> */}
                    <button>{<TermsAndConditionsModal />}</button>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="socials">
            <ul className="list-inline flex gap-4 mx-auto container pt-4 max-w-screen-xl">
              <li className="list-inline-item">
                <Link to="https://www.facebook.com">
                  <i className="fab fa-facebook fa-2x " aria-hidden="true"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to='https://www.twitter.com'>
                  <i className="fab fa-twitter fa-2x " aria-hidden="true"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to='https://www.instagram.com'>
                  <i className="fab fa-instagram fa-2x " aria-hidden="true"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to='https://www.linkdein.com'>
                  <i className="fab fa-linkedin fa-2x " aria-hidden="true"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to='https://www.github.com'>
                  <i className="fab fa-github fa-2x " aria-hidden="true"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="https://www.youtube.com">
                  <i className="fab fa-youtube fa-2x " aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="border-gold" />
      <section id="footer-nav" className="flex justify-between py-8 mx-auto max-w-screen-xl">
        <div className="py-1">
          <p className="py-1">
            &copy; <span className="text-brand text-sm">topagent.ph</span> All Rights Reserved.
          </p>
        </div>
        <ul className="flex py-1 flex-nowrap items-center overflow-hidden gap-4 max-w-screen-xl text-sm  sm:mt-0">
          <li>
            <NavLink to="/" className="py-1">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="py-1">About</NavLink>
          </li>

          <li>
            <NavLink to="/featured-properties" className="py-1">Featured Properties</NavLink>
          </li>
        </ul>
      </section>

    </footer>
  )
}
