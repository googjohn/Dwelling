// import React from "react";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/react"
// import { Button, Text, useDisclosure } from "@chakra-ui/react"

// function SearchProperty() {

//   const OverlayTwo = () => (
//     <ModalOverlay
//       bg='none'
//       backdropFilter='auto'
//       backdropInvert='20%'
//       backdropBlur='10px'
//     />
//   )

//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const [overlay, setOverlay] = React.useState(<OverlayTwo />)

//   return (
//     <>
//       <Button

//         style={{
//           padding: "8px 20px",
//           margin: "10px",
//           fontFamily: "Raleway, sans-serif",
//           color: "white",
//           fontWeight: 500,
//           fontSize: "16px",
//           display: "inline-block",
//           transition: "0.5s",
//           borderRadius: "50px",
//           letterSpacing: "1px",
//           textTransform: "uppercase",
//           background: "transparent",
//           border: "2px solid white"
//         }}
//         _hover={{
//           border: "2px solid white"
//         }}
//         onClick={() => {
//           setOverlay(<OverlayTwo />)
//           onOpen()
//         }}
//       >
//         Find Property
//       </Button>
//       <Modal blockScrollOnMount={false} isCentered isOpen={isOpen} onClose={onClose}>
//         {overlay}
//         <ModalContent>
//           <ModalHeader>SearchProperty Property</ModalHeader>
//           <hr />
//           <ModalCloseButton />
//           <ModalBody>
//             <Text>Custom backdrop filters!</Text>
//           </ModalBody>
//           <ModalFooter>
//             <Button onClick={onClose}>Close</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }

// // export default SearchProperty;
// import React from "react";
// import { useState } from "react";
// import {
//   // Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   ModalFooter,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   background,
// } from "@chakra-ui/react";

// function PropertySearchProperty() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//   };

//   const OverlayTwo = () => (
//     <ModalOverlay
//       bg='none'
//       backdropFilter='auto'
//       backdropInvert='20%'
//       backdropBlur='10px'
//     />
//   )

//   const { onOpen, onClose } = useDisclosure()
//   const [overlay, setOverlay] = React.useState(<OverlayTwo />)
//   return (
//     <>
//       <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={() => setIsOpen(false)}>
//         {overlay}
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Find Property</ModalHeader>
//           <ModalCloseButton />
//           <form onSubmit={handleSubmit}>
//             <ModalBody>
//               <FormControl mb={4}>
//                 <FormLabel htmlFor="name">Name</FormLabel>
//                 <Input
//                   type="text"
//                   id="name"
//                   placeholder="Type property name"
//                   required
//                 />
//               </FormControl>
//               <FormControl mb={4}>
//                 <FormLabel htmlFor="location">Location</FormLabel>
//                 <Select id="location" required>
//                   <option disabled>Select location</option>
//                   <option value="baguio">Baguio City</option>
//                   <option value="cebu">Cebu City</option>
//                   <option value="davao">Davao City</option>
//                   <option value="tagaytay">Tagaytay</option>
//                   <option value="manila">Metro Manila</option>
//                 </Select>
//               </FormControl>
//               <FormControl mb={4}>
//                 <FormLabel htmlFor="price">Max Price</FormLabel>
//                 <Input
//                   type="number"
//                   id="price"
//                   placeholder="Php100,000,000"
//                   required
//                 />
//               </FormControl>
//               <FormControl mb={4}>
//                 <FormLabel htmlFor="category">Category</FormLabel>
//                 <Select id="category" required>
//                   <option disabled>Select category</option>
//                   <option value="RFO">Ready for occupancy</option>
//                   <option value="Pre-selling">Pre-selling</option>
//                 </Select>
//               </FormControl>
//             </ModalBody>
//             <ModalFooter>
//               <Button
//                 type="submit"
//                 colorScheme="green"
//                 leftIcon={
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={1.5}
//                       d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//                     />
//                   </svg>
//                 }
//               >
//                 SearchProperty Property
//               </Button>
//             </ModalFooter>
//           </form>
//         </ModalContent>
//       </Modal>

//       <Button

//         style={{
//           padding: "8px 20px",
//           margin: "10px",
//           fontFamily: "Raleway, sans-serif",
//           color: "white",
//           fontWeight: 500,
//           fontSize: "16px",
//           display: "inline-block",
//           transition: "0.5s",
//           borderRadius: "50px",
//           letterSpacing: "1px",
//           textTransform: "uppercase",
//           background: "transparent",
//           border: "2px solid white"
//         }}
//         _hover={{
//           border: "2px solid white"
//         }}
//         onClick={() => {
//           setOverlay(<OverlayTwo />)
//           onOpen()
//         }}

//         // className="btn-services"
//         data-modal-target="defaultModal"
//         data-modal-toggle="defaultModal"
//       // onClick={() => setIsOpen(true)}
//       >
//         Find Property
//       </Button>
//     </>
//   );
// }

// export default PropertySearchProperty;

// import React from "react";
// import { useState } from "react";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   ModalFooter,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Button,
//   useDisclosure,
// } from "@chakra-ui/react";

// function PropertySearchProperty() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//   };

//   const OverlayTwo = () => (
//     <ModalOverlay
//       bg="none"
//       backdropFilter="blur(10px)"
//       backdropInvert="20%"
//       zIndex="modal"
//     />
//   );

//   const [overlay, setOverlay] = useState(<OverlayTwo />);

//   return (
//     <>
//       <Button
//         style={{
//           padding: "8px 20px",
//           margin: "10px",
//           fontFamily: "Raleway, sans-serif",
//           color: "white",
//           fontWeight: 500,
//           fontSize: "16px",
//           display: "inline-block",
//           transition: "0.5s",
//           borderRadius: "50px",
//           letterSpacing: "1px",
//           textTransform: "uppercase",
//           background: "transparent",
//           border: "2px solid white",
//         }}
//         _hover={{
//           border: "2px solid white",
//         }}
//         onClick={() => {
//           setOverlay(<OverlayTwo />);
//           onOpen();
//         }}
//       >
//         Find Property
//       </Button>
//       <Modal
//         blockScrollOnMount={false}
//         isOpen={isOpen}
//         onClose={onClose}
//         scrollBehavior="inside"
//       >
//         {overlay}
//         <ModalContent>
//           <ModalHeader>Find Property</ModalHeader>
//           <ModalCloseButton />
//           <form onSubmit={handleSubmit}>
//             <ModalBody style={{ maxHeight: "calc(100vh - 180px)", overflowY: "auto" }}>
//               <FormControl mb={4}>
//                 <FormLabel htmlFor="name">Name</FormLabel>
//                 <Input
//                   type="text"
//                   id="name"
//                   placeholder="Type property name"
//                   required
//                 />
//               </FormControl>
//               <FormControl mb={4}>
//                 <FormLabel htmlFor="location">Location</FormLabel>
//                 <Select id="location" required>
//                   <option disabled>Select location</option>
//                   <option value="baguio">Baguio City</option>
//                   <option value="cebu">Cebu City</option>
//                   <option value="davao">Davao City</option>
//                   <option value="tagaytay">Tagaytay</option>
//                   <option value="manila">Metro Manila</option>
//                 </Select>
//               </FormControl>
//               <FormControl mb={4}>
//                 <FormLabel htmlFor="price">Max Price</FormLabel>
//                 <Input
//                   type="number"
//                   id="price"
//                   placeholder="Php100,000,000"
//                   required
//                 />
//               </FormControl>
//               <FormControl mb={4}>
//                 <FormLabel htmlFor="category">Category</FormLabel>
//                 <Select id="category" required>
//                   <option disabled>Select category</option>
//                   <option value="RFO">Ready for occupancy</option>
//                   <option value="Pre-selling">Pre-selling</option>
//                 </Select>
//               </FormControl>
//             </ModalBody>
//             <ModalFooter>
//               <Button
//                 type="submit"
//                 colorScheme="green"
//                 leftIcon={
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={1.5}
//                       d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//                     />
//                   </svg>
//                 }
//               >
//                 SearchProperty Property
//               </Button>
//             </ModalFooter>
//           </form>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// export default PropertySearchProperty;


import React from "react";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function SearchProperty() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const Overlay = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="blur(20px)"
      backdropInvert="20%"
      zIndex="modal"
    />
  );
  const [overlay, setOverlay] = useState(<Overlay />);

  return (
    <>
      <Button
        style={{
          padding: "0",
          fontFamily: "Raleway, sans-serif",
          color: "white",
          fontWeight: 500,
          fontSize: "16px",
          display: "inline-block",
          transition: "0.5s",
          borderRadius: "50px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          background: "transparent",
          // border: "2px solid white",
          margin: 'auto',
        }}

        className="button-hover"
        onClick={() => {
          setOverlay(<Overlay />);
          onOpen();
        }}
      >
        Find Property
      </Button>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
      >
        {overlay}
        <ModalContent
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <ModalHeader>Find Property</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody style={{ maxHeight: "calc(100vh - 180px)", overflowY: "auto" }}>
              <FormControl mb={4}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  placeholder="Type property name"
                  required
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor="location">Location</FormLabel>
                <Select id="location" required>
                  <option disabled>Select location</option>
                  <option value="baguio">Baguio City</option>
                  <option value="cebu">Cebu City</option>
                  <option value="davao">Davao City</option>
                  <option value="tagaytay">Tagaytay</option>
                  <option value="manila">Metro Manila</option>
                </Select>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor="price">Max Price</FormLabel>
                <Input
                  type="number"
                  id="price"
                  placeholder="Php100,000,000"
                  required
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor="category">Category</FormLabel>
                <Select id="category" required>
                  <option disabled>Select category</option>
                  <option value="RFO">Ready for occupancy</option>
                  <option value="Preselling">Preselling</option>
                </Select>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                style={{
                  padding: "8px 20px",
                  fontFamily: "Raleway, sans-serif",
                  color: "white",
                  fontWeight: 500,
                  fontSize: "16px",
                  display: "inline-block",
                  transition: "0.5s",
                  borderRadius: "50px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  background: "#229b50",
                  border: "2px solid transprent",
                  margin: 'auto',
                }}
                onMouseEnter={(e) => {
                  e.target.style.border = "2px solid white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.border = "2px solid #229b50";
                }}
                type="submit"
                colorScheme="green"
                className="btn-services"
              >
                Search Property
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal >
    </>
  );
}

export default SearchProperty;