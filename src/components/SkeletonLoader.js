// import React, { useState, useEffect } from "react";
// import { Box } from "@chakra-ui/react";
// import { Home } from "../pages/Home";
// import { CardProperty } from "./CardProperty";
// import { CardPropertyList } from "./CardPropertyList";
// import { Carousel } from "./Carousel";
// import { Hero } from "./Hero";
// import { Careers } from "../pages/careers/Careers";
// import { Ourteam } from "../pages/careers/Ourteam";
// import { About } from "../pages/About";
// import { FeaturedProperty } from "../pages/FeaturedProperty";
// import PrivacyPolicy from "../pages/PrivacyPolicy";
// import { PropertyDetails } from "../pages/PropertyDetails";
// import TermsAndConditionsModal from "../pages/TermsAndConditionsModal.js.js";

// export const SkeletonLoading = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate data loading
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   }, []);

//   if (isLoading) {
//     return (
//       <Box
//         role="status"
//         className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
//       >
//         <Box className="w-full">
//           <Box className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
//           <Box className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5" />
//           <Box className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
//           <Box className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
//           <Box className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
//           <Box className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
//         </Box>
//         <Box className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
//           <svg
//             className="w-12 h-12 text-gray-200"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 640 512"
//           >
//             <path
//               d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
//             />
//           </svg>
//         </Box>
//         <span className="sr-only">Loading...</span>
//       </Box>
//     );
//   }

//   // Render your actual content when loading is complete
//   return (
//     <>
//       <CardProperty />
//       <CardPropertyList />
//       <Carousel />
//       <Hero />
//       <Careers />
//       <Ourteam />
//       <About />
//       <FeaturedProperty />
//       <PrivacyPolicy />
//       <PropertyDetails />
//       <TermsAndConditionsModal />
//       <Search />
//     </>

//   );
// };
import { Box, Flex, Skeleton } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';




export const SkeletonLoader = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Flex
          role="status"
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "flex-start", md: "center" }}
          spacing={8}
          animate="pulse"
        >
          <Box
            w="full"
            h="full"
            bg="gray.300"
            rounded="md"
            display={{ base: "block", sm: "none" }}
            position={"absolute"}
          />
          <Box
            w={{ base: "full", sm: "96" }}
            h="48"
            bg="gray.300"
            rounded="md"
            display={{ base: "none", sm: "block" }}
          />
          <Box w="full">
            <Skeleton h="2.5" bg="gray.200" rounded="full" mb="4" />
            <Skeleton h="2" bg="gray.200" rounded="full" mb="2.5" />
            <Skeleton h="2" bg="gray.200" rounded="full" mb="2.5" />
            <Skeleton h="2" bg="gray.200" rounded="full" mb="2.5" />
            <Skeleton h="2" bg="gray.200" rounded="full" mb="2.5" />
            <Skeleton h="2" bg="gray.200" rounded="full" />
          </Box>
          <Box as="span" display="none">
            Loading...
          </Box>
        </Flex>
      ) : null}
    </>
  );
}
