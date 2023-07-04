
// export const ContactUs = () => {
//   return (
//     <div className=" bg-black py-5 border-b border-gold pb-20">
//       <div className="w-1/3 mx-auto">
//         <div className="text-center font-bold text-3xl text-white mb-3"><h2>Join Our Newsletter</h2></div>
//         <form>


//           <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full mb-6 group">
//               <input
//                 type="text"
//                 name="floating_first_name"
//                 id="floating_first_name"
//                 className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gold focus:outline-none focus:ring-0 focus:border-gold peer"
//                 placeholder=" "
//                 required=""
//               />
//               <label
//                 htmlFor="floating_first_name"
//                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//               >
//                 First name
//               </label>
//             </div>
//             <div className="relative z-0 w-full mb-6 group">
//               <input
//                 type="text"
//                 name="floating_last_name"
//                 id="floating_last_name"
//                 className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gold focus:outline-none focus:ring-0 focus:border-gold peer"
//                 placeholder=" "
//                 required=""
//               />
//               <label
//                 htmlFor="floating_last_name"
//                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//               >
//                 Last name
//               </label>
//             </div>
//           </div>
//           <div className="relative z-0 w-full mb-6 group">
//             <input
//               type="email"
//               name="floating_email"
//               id="floating_email"
//               className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gold focus:outline-none focus:ring-0 focus:border-gold peer"
//               placeholder=" "
//               required=""
//             />
//             <label
//               htmlFor="floating_email"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Email address
//             </label>
//           </div>

//           <div className="relative z-0 w-full mb-6 group">
//             <input
//               type="tel"
//               pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//               name="floating_phone"
//               id="floating_phone"
//               className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gold focus:outline-none focus:ring-0 focus:border-gold peer"
//               placeholder=" "
//               required=""
//             />
//             <label
//               htmlFor="floating_phone"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Phone number (123-456-7890)
//             </label>
//           </div>



//           <div className="relative z-0 w-full mb-6 group">
//             <label
//               htmlFor="floating_message"
//               className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Your message
//             </label>
//             <textarea type="text"
//               name="floating_message"
//               id="floating_message"
//               className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gold focus:outline-none focus:ring-0 focus:border-gold peer"
//               placeholder=" "
//               required=""></textarea>
//           </div>


//           <button
//             type="submit"
//             className="block mx-auto text-white bg-green border-2 border-transparent hover:border-white focus:ring-0 transition duration-300 ease-out focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-10 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Subscribe
//           </button>
//         </form>

//       </div>
//     </div>
//   )
// }

// import {
//   Card,
//   Input,
//   Checkbox,
//   Button,
//   Typography,
// } from "@material-tailwind/react";

// export const ContactUs = () => {
//   return (
//     <Card color="transparent" shadow={false}>
//       <Typography variant="h4" color="blue-gray">
//         Sign Up
//       </Typography>
//       <Typography color="gray" className="mt-1 font-normal">
//         Enter your details to register.
//       </Typography>
//       <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
//         <div className="mb-4 flex flex-col gap-6">
//           <Input size="lg" label="Name" />
//           <Input size="lg" label="Email" />
//           <Input type="password" size="lg" label="Password" />
//         </div>
//         <Checkbox
//           label={
//             (
//               <Typography
//                 variant="small"
//                 color="gray"
//                 className="flex items-center font-normal"
//               >
//                 I agree the
//                 <a
//                   href="#"
//                   className="font-medium transition-colors hover:text-blue-500"
//                 >
//                   &nbsp;Terms and Conditions
//                 </a>
//               </Typography>
//             )
//           }
//           containerProps={{ className: "-ml-2.5" }}
//         />
//         <Button className="mt-6" fullWidth>
//           Register
//         </Button>
//         <Typography color="gray" className="mt-4 text-center font-normal">
//           Already have an account?{" "}
//           <a
//             href="#"
//             className="font-medium text-blue-500 transition-colors hover:text-blue-700"
//           >
//             Sign In
//           </a>
//         </Typography>
//       </form>
//     </Card>
//   );
// }
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  // Button,
  useDisclosure,
  Center,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,

}
  from "@chakra-ui/react";
import { color } from "framer-motion";




export const ContactUs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)



  const Overlay = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="blur(20px)"
      backdropInvert="20%"
      zIndex="modal"
    />
  );

  const [overlay, setOverlay] = useState(<Overlay />);

  const modalHeaderStyles = {
    backgroundColor: '#229b50',
    color: 'white',
    fontSize: '24px',
    padding: '20px',
    borderBottom: "2px solid #c8b568",
  };

  return (
    <>
      {/* <Link
        className="button-modal"
        style={{
          padding: "10px 20px",
          margin: "0",
          fontFamily: "Raleway, sans-serif",
          color: "white",
          fontWeight: 500,
          fontSize: "16px",
          background: "green",
          opacity: .8,
          borderRadius: "50px",
        }}
        onClick={() => {
          setOverlay(<Overlay />);
          onOpen();
        }}
      >
        Sign Up
      </Link > */}
      <Modal
        size="4xl"
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        scrollBehavior="inside"
      >
        {overlay}
        <ModalContent
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.8)",
          }}
          maxW="80vw"
          maxH="90vh"
          overflowY="auto"
        >
          <ModalHeader sx={modalHeaderStyles}>Sign Up</ModalHeader>
          <ModalCloseButton
            style={{
              color: "white",
              fontSize: "20px",
              top: "20px",
            }} />
          <ModalBody style={{ maxHeight: "calc(100vh - 180px)", overflowY: "auto" }}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Your Email' />
            </FormControl>
            <Button colorScheme='green' mt={5} mr={5} className="btn-gallery-view">
              Register
            </Button>
          </ModalBody>

        </ModalContent>
      </Modal >
    </>
  );
}


