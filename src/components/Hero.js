import Logo from '../assets/images/logo-no-bg.png'
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import SearchProperty from '../pages/SearchProperty';


export default () => {
  const typedRef = useRef(null);

  useEffect(() => {

    const options = {
      strings: [
        'beautifully designed houses',
        'assistance for site viewing',
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-logo">
          <img src={Logo} alt="Logo" />
        </div>

        <h1 className="text-7xl">Welcome Home</h1>
        <h2 className="text-3xl inline-block">
          We offer
          <span id="typing-text" className="typed text-3xl ml-3" ref={typedRef}></span>
        </h2>
        <div className="actions flex flex-col justify-center md:justify-center md:flex-row md:flex-wrap">
          <a href='#default-carousel' className="relative btn-get-started"> <span className='invisible'>View Gallery</span> <span className='view'>View Gallery</span>
          </a>
          <Link to=''
            className="btn-services"
          > {<SearchProperty />}</Link>

        </div>



      </div>
    </section>
  );
};
