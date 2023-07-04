
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    Center,
} from "@chakra-ui/react";
import { color } from "framer-motion";

function PrivacyPolicy() {
    const { isOpen, onOpen, onClose } = useDisclosure();



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
            <Link
                className="button-modal"
                style={{
                    padding: "0",
                    margin: "0",
                    fontFamily: "Raleway, sans-serif",
                    color: "white",
                    fontWeight: 500,
                    fontSize: "16px",
                    background: "none",
                }}
                onClick={() => {
                    setOverlay(<Overlay />);
                    onOpen();
                }}
            >
                Privacy Policy
            </Link >
            <Modal
                size="4xl"
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
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
                    <ModalHeader sx={modalHeaderStyles}>Privacy Policy</ModalHeader>
                    <ModalCloseButton
                        style={{
                            color: "white",
                            fontSize: "20px",
                            top: "20px",
                        }} />
                    <ModalBody style={{ maxHeight: "calc(100vh - 180px)", overflowY: "auto" }}>


                        <h2 className="text-xl font-bold">Who we are</h2>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">Our website address is: <a href="/" target='_blank' rel='noreferrer noopener' className="  text-gold hover:">www.topagent.com</a></p>

                        <h3 className="text-xl font-bold">What personal data we collect and why we collect it</h3>
                        <h4 className="text-md font-semibold">MEDIA</h4>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>

                        <h5 className="text-md font-semibold">COOKIES</h5>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>

                        <p className="mb-3 text-gray-500 dark:text-gray-400">If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>

                        <h6 className="text-md font-semibold">EMBEDDED CONTENT FROM OTHER WEBSITES</h6>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>

                        <p className="mb-3 text-gray-500 dark:text-gray-400">These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>

                        <h3 className="text-xl font-bold">How long we retain your data</h3>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>

                        <p className="mb-3 text-gray-500 dark:text-gray-400">For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>

                        <h3 className="text-xl font-bold">What rights you have over your data</h3>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes</p>

                        <h3 className="text-xl font-bold">What rights you have over your data</h3>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">Visitor comments may be checked through an automated spam detection service.</p>

                        <p className="mb-3 text-gray-500 dark:text-gray-400">If you have questions or concerns about our Privacy Policy, please contact us at info.topagent@gmail.com</p>



                    </ModalBody>
                </ModalContent>
            </Modal >
        </>
    );
}

export default PrivacyPolicy;