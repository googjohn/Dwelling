// import { useEffect, useState } from "react";
// import { SkeletonLoader } from "./SkeletonLoader";

// // Custom hook to handle loading state
// const useLoadingEffect = (initialLoading = false) => {
//   const [isLoading, setIsLoading] = useState(initialLoading);

//   // Simulate an asynchronous operation
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return isLoading;
// };

import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';


export const UseSkeletonLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Box
          maxW="sm"
          p={{ base: 4, md: 6 }}
          borderWidth="1px"
          borderColor="gray.200"
          rounded="md"
          shadow="md"
          animate="pulse"
          role="status"
        >
          <Flex
            items="center"
            justify="center"
            h={48}
            mb={4}
            bg="gray.300"
            rounded="md"
            dark={{ bg: "gray.700" }}
          >
            <Spinner
              w={12}
              h={12}
              color="gray.200"
              dark={{ color: "gray.600" }}
            />
          </Flex>
          <Box
            h={2.5}
            bg="gray.200"
            rounded="full"
            mb={4}
          />
          <Box
            h={2}
            bg="gray.200"
            rounded="full"
            mb={2.5}
          />
          <Box
            h={2}
            bg="gray.200"
            rounded="full"
            mb={2.5}
          />
          <Box
            h={2}
            bg="gray.200"
            rounded="full"
            mb={2.5}
          />
          <Box
            h={2}
            bg="gray.200"
            rounded="full"
          />
          <Flex
            items="center"
            mt={4}
            spaceX={3}
          >
            <Spinner
              w={14}
              h={14}
              color="gray.200"
              dark={{ color: "gray.700" }}
              aria-hidden="true"
            />
            <Box>
              <Box
                h={2.5}
                bg="gray.200"
                rounded="full"
                w={32}
                mb={2}
              />
              <Box
                w={48}
                h={2}
                bg="gray.200"
                rounded="full"
              />
            </Box>
          </Flex>
          <span className="sr-only">Loading...</span>
        </Box>
      ) : null}
    </>
  );
};

