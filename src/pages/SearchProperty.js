import { useState } from "react";
import {
  Button,
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
} from "@chakra-ui/react";

function PropertySearch() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Button
        className="btn-services"
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
      >
        Find Property
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Find Property</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
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
                  <option value="Pre-selling">Pre-selling</option>
                </Select>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                colorScheme="green"
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                }
              >
                Search Property
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PropertySearch;
