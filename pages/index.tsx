import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { MainContainer } from "../components/main-container/main-container.component";
import { Navbar } from "../components/navbar/navbar.component";

const Home: NextPage = () => {
  return (
    <Box w="100%" h="100%" bg="black">
      <Head>
        <title>Fr0ntierX</title>
        <meta name="description" content="F0X FE Test" />
      </Head>
      <Navbar></Navbar>
      <MainContainer></MainContainer>
    </Box>
  );
};

export default Home;
