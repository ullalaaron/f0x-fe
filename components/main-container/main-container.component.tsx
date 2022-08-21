import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import styles from "./main-container.module.scss";
import { MdOutlineDashboard } from "react-icons/md";
import { BsBarChartLine, BsBoxArrowInUpRight } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { SiDiscord } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io";
import { TbBrandTwitter } from "react-icons/tb";

export function MainContainer() {
  const sampleAcordion = (
    <Accordion className={styles.f0xAccordion} allowMultiple>
      <AccordionItem>
        <AccordionButton>
          <HStack flex="1" textAlign="left">
            <Icon fontSize="2xl" as={MdOutlineDashboard} />
            <Text fontSize="2xl">Lorem Ipsum</Text>
          </HStack>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <Flex
            direction="row"
            wrap="wrap"
            alignItems="center"
            marginTop="2rem"
          >
            <HStack className={styles.socialContainer}>
              <BsBoxArrowInUpRight />
              <Text>Lorem Ipsum.com</Text>
            </HStack>
            <HStack className={styles.socialContainer}>
              <SiDiscord />
              <Text>@Lorem Ipsum</Text>
            </HStack>
            <HStack className={styles.socialContainer}>
              <IoLogoInstagram />
              <Text>@Lorem Ipsum</Text>
            </HStack>
            <HStack className={styles.socialContainer}>
              <TbBrandTwitter />
              <Text>@Lorem Ipsum</Text>
            </HStack>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
  const accordionItems = [
    {
      category: "Accessories & Ears",
      text: "Lorem Ipsum",
      percentage: "9",
    },
    {
      category: "Arms",
      text: "Lorem Ipsum",
      percentage: "15",
    },
    {
      category: "Background",
      text: "Lorem Ipsum",
      percentage: "2",
    },
    {
      category: "Eye",
      text: "Lorem Ipsum",
      percentage: "32",
    },
    {
      category: "Glasses",
      text: "Lorem Ipsum",
      percentage: "3",
    },
    {
      category: "Hair & Hats",
      text: "Lorem Ipsum",
      percentage: "2",
    },
    {
      category: "Head",
      text: "Lorem Ipsum",
      percentage: "92",
    },
    {
      category: "Legs & Clothes",
      text: "Lorem Ipsum",
      percentage: "2",
    },
    {
      category: "Mouth",
      text: "Lorem Ipsum",
      percentage: "46",
    },
  ];
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
        <Box marginY={"5rem"}>
          <Flex
            margin="0 auto"
            maxW={"30rem"}
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Button
              leftIcon={<Icon as={BsBarChartLine} />}
              bg="black"
              opacity="0.5"
              disabled={true}
            >
              Lorem Ipsum
            </Button>
            <Button leftIcon={<Icon as={MdOutlineDashboard} />} bg="black">
              Lorem Ipsum
            </Button>
            <Button
              leftIcon={<Icon as={BiHomeCircle} />}
              bg="black"
              opacity="0.5"
              disabled={true}
            >
              Lorem Ipsum
            </Button>
          </Flex>
        </Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="flex-start"
          justifyContent={"space-between"}
        >
          <Box w={{ base: "100%", md: "49%" }}>{sampleAcordion}</Box>
          <Flex direction="column" w={{ base: "100%", md: "49%" }}>
            <Accordion className={styles.f0xAccordion} allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <HStack flex="1" textAlign="left">
                    <Icon fontSize="2xl" as={MdOutlineDashboard} />
                    <Text fontSize="2xl">Lorem Ipsum</Text>
                  </HStack>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Flex direction="row" wrap="wrap">
                    {accordionItems.map((item, index) => (
                      <Box key={index} className={styles.f0xAccordionItem}>
                        <Text className={styles.detail}>{item.category}</Text>
                        <Text className={styles.master} fontSize="xl">
                          {item.text}
                        </Text>
                        <Text className={styles.detail}>
                          {item.percentage} %
                        </Text>
                      </Box>
                    ))}
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            {sampleAcordion}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
