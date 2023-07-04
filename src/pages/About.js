import React, { useState, useEffect } from 'react';
import ourteamLogo from '../assets/images/profile-pictures/ourteam.jpg';
import ContentLoader from 'react-content-loader';
import { Box } from '@chakra-ui/react';

export const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>

      <div className='w-full blur-container py-10 mb-10'>
        {isLoading ? (
          <ContentLoader
            rtl={true}
            speed={2}
            width={1200} // Increase the width to match the desired size
            height={768} // Increase the height to match the desired size
            viewBox="0 0 1200 768" // Update the viewBox to match the new width and height
            backgroundColor="#a39e9e"
            foregroundColor="#ece4e4"
          >
            <rect x="320" y="16" rx="3" ry="3" width="176" height="20" />
            <rect x="320" y="40" rx="3" ry="3" width="104" height="16" />
            <rect x="320" y="112" rx="3" ry="3" width="656" height="16" />
            <rect x="320" y="144" rx="3" ry="3" width="608" height="16" />
            <rect x="320" y="176" rx="3" ry="3" width="284" height="16" />
            <rect x="0" y="0" rx="5" ry="5" width="300" height="200" />

            {/* Add more lines or elements here */}
            <rect x="0" y="214" rx="3" ry="3" width="900" height="16" />
            <rect x="0" y="242" rx="3" ry="3" width="1000" height="16" />
            <rect x="0" y="274" rx="3" ry="3" width="800" height="16" />
            <rect x="0" y="306" rx="3" ry="3" width="500" height="16" />
            <rect x="0" y="338" rx="3" ry="3" width="1000" height="16" />
            <rect x="0" y="370" rx="3" ry="3" width="600" height="16" />
            <rect x="0" y="402" rx="3" ry="3" width="1000" height="16" />
            <rect x="0" y="442" rx="3" ry="3" width="1000" height="16" />
            <rect x="0" y="474" rx="3" ry="3" width="700" height="16" />
            <rect x="0" y="506" rx="3" ry="3" width="1000" height="16" />
            <rect x="0" y="538" rx="3" ry="3" width="1000" height="16" />
            <rect x="0" y="570" rx="3" ry="3" width="900" height="16" />
            <rect x="0" y="606" rx="3" ry="3" width="1000" height="16" />
            {/* Add more lines or elements here */}
          </ContentLoader>

        ) : (
          <div className="relative h-screen container  mx-auto p-10 text-gray-900">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold to-green rounded-md filter blur-3xl opacity-80 -z-10">
            </div>

            <img src={ourteamLogo} className="hover:opacity-90 float-right rounded-2xl z-50   shadow-2xl md:w-1/2 object-cover ml-5 mb-5 w-full" alt="" />

            <h1 className="text-3xl font-bold mb-4">Welcome to Topagentph!</h1>

            <p className="text-lg mb-6">
              At Topagentph, we understand that finding the perfect property is more than just a transaction; it's about finding a place to call home or a space to build your dreams. With our passion for real estate and dedication to exceptional service, we are here to guide you every step of the way.
            </p>

            <p className="text-lg mb-6">
              As a leading real estate platform, we strive to provide a seamless and enjoyable experience for buyers, sellers, renters, and investors alike. Our team of experienced professionals is committed to delivering personalized attention, reliable advice, and valuable insights to help you make informed decisions.
            </p>

            <h2 className="text-2xl font-bold mb-4">What sets us apart:</h2>

            <ul className="list-disc list-inside mb-6">
              <li className="text-lg mb-2">
                <strong>Expertise:</strong> Our team consists of licensed real estate agents and industry professionals with an in-depth understanding of the local market. We stay up-to-date with the latest trends and developments to ensure you have access to the best opportunities.
              </li>
              <li className="text-lg mb-2">
                <strong>Extensive Listings:</strong> Whether you're searching for a cozy apartment, a spacious family home, a commercial property, or an investment opportunity, our website offers a comprehensive range of listings to suit diverse needs and budgets. Explore our vast collection of properties and discover your perfect match.
              </li>
              <li className="text-lg mb-2">
                <strong>User-Friendly Interface:</strong> We have designed our website with simplicity and functionality in mind. Our intuitive search filters, detailed property descriptions, high-quality images, and virtual tours allow you to explore properties from the comfort of your own home.
              </li>
              <li className="text-lg mb-2">
                <strong>Trust and Transparency:</strong> We believe in building long-lasting relationships with our clients based on trust and transparency. Our team is dedicated to providing honest and reliable information, ensuring you have all the facts needed to make confident decisions.
              </li>
              <li className="text-lg mb-2">
                <strong>Exceptional Customer Service:</strong> Your satisfaction is our top priority. Whether you have questions about a listing, need guidance on the buying or selling process, or require assistance with financing options, our friendly and knowledgeable support team is here to help. We are just a phone call or email away.
              </li>
            </ul>

            <p className="text-lg">
              Thank you for choosing Topagentph. We are excited to embark on this journey with you and help you find your perfect property. Start exploring our listings today and let us be your trusted partner in real estate.
            </p>
          </div>

        )}

      </div >
    </>
  );
};
