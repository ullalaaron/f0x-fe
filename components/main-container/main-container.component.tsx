import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import * as React from "react";
import styles from "./main-container.module.scss";

export function MainContainer() {
  return (
    <Box id={styles.home} color="white" marginTop="7.75rem">
      <Box w="99%" maxW="120rem" margin="0 auto" padding="1rem">
        <Box
          backgroundImage={"/img/header.png"}
          height="25rem"
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          position="relative"
        >
          <Image
            src={"/img/eye.png"}
            width="15rem"
            alt="eye"
            position="absolute"
            left="calc(50% - 7.5rem)"
            bottom="-10rem"
          ></Image>
        </Box>
        <Box marginTop={"13rem"} textAlign="center">
          <Heading as="h1" size="3xl" marginBottom="1rem">
            Lorem Ipsum
          </Heading>
          <Text fontSize="2xl">
            Created By: <Link color="f0xPink">Lorem Ipsum</Link>
          </Text>
          <Text fontSize="2xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
