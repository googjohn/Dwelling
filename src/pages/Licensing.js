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

export function Licensing() {
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
                Licensing
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
                    <ModalHeader sx={modalHeaderStyles}>Licensing</ModalHeader>
                    <ModalCloseButton
                        style={{
                            color: "white",
                            fontSize: "20px",
                            top: "20px",
                        }} />
                    <ModalBody style={{ maxHeight: "calc(100vh - 180px)", overflowY: "auto" }}>



                        <h2 className="text-xl font-bold">Intellectual Property Rights</h2>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">All content on this website, including text, images, graphics, logos, and software, is the property of <a href="/" target='_blank' rel='noreferrer noopener' className="  text-gold hover:"> www.topagent.com </a>or its licensors and is protected by Philippine and international copyright laws. </p>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">
                            You may not reproduce, modify, distribute, or republish any of the content on this website without obtaining prior written permission from TopAgent.</p>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">
                            The use of our logo or any other trademarks displayed on this website is strictly prohibited without our express written consent.</p>

                        <h3 className="text-xl font-bold">Third-Party Content</h3>

                        <p className="mb-3 text-gray-500 dark:text-gray-400">This website may include content or links to third-party websites for your convenience. We do not have control over the content or practices of these third-party websites and are not responsible for their actions or policies.</p>

                        <p className="mb-3 text-gray-500 dark:text-gray-400">Any third-party content or services integrated into our website are subject to their respective terms and licenses. Please review the applicable terms and conditions of these third parties.</p>

                        <h6 className="text-xl font-bold">Limitations of Liability</h6>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.</p>

                        <p className="mb-3 text-gray-500 dark:text-gray-400">We shall not be liable for any loss or damage, including but not limited to indirect or consequential loss or damage, arising out of or in connection with the use of this website or any third-party websites linked to from this website.</p>

                        <h3 className="text-xl font-bold">Contact Information</h3>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">If you have any questions or concerns regarding the licensing or intellectual property issues related to our website, please contact us at:</p>

                        <p className="mb-3 text-gray-500 dark:text-gray-400">Email: info@topagent.com</p>

                        <p className="mb-3 text-gray-500 dark:text-gray-400">Phone: +639154456321</p>

                        <p className="mb-3 text-gray-500 dark:text-gray-400">Adress: 11F, One Ayala West Tower, Ayala Avenue, corner Edsa, Makati, 1223 Metro Manila</p>



                        <h3 className="text-xl font-bold">Updates and Modifications</h3>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">We reserve the right to update or modify this Licensing page at any time without prior notice. Any changes made will be effective immediately upon posting. Continued use of the website constitutes acceptance of any revisions.</p>

                        <h3 className="text-xl font-bold">Governing Law</h3>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">This Licensing page shall be governed by and construed in accordance with the laws of the Republic of the Philippines. Any disputes arising out of or relating to this Licensing page shall be subject to the exclusive jurisdiction of the courts located in Makati, 1223 Metro Manila.</p>


                    </ModalBody>
                </ModalContent>
            </Modal >
        </>
    );
}

export default Licensing;
