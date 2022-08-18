import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { CloseIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./navbar.module.scss";

const MenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      fontSize="2rem"
      onClick={toggle}
    >
      {isOpen ? (
        <CloseIcon color={"white"} />
      ) : (
        <HamburgerIcon color={"white"} />
      )}
    </Box>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItems = ["Lorem", "Lorem", "Lorem"];
  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      height={{ md: "7rem" }}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      padding="2rem"
      bg="black"
      id={styles.navbar}
      zIndex="1"
    >
      <Image src={"/img/logo.png"} width="12rem" alt="Logo"></Image>

      <InputGroup
        w="40%"
        maxW="50rem"
        bg="#1F1F1F"
        color="#A2A2A2"
        borderColor="transparent"
        borderRadius="1rem"
        display={{ base: "none", md: "inherit" }}
      >
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>

        <Input type="text" placeholder="Lorem Ipsum" />
      </InputGroup>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
        className="menu-items"
      >
        <Stack
          bg="black"
          as={motion.div}
          spacing={8}
          align="center"
          justify={["center", "center", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
          height={{ base: "100vh", md: "auto" }}
        >
          {menuItems.map((item, i) => (
            <Link key={i} color="white">
              <Button variant="nav"> {item} </Button>
            </Link>
          ))}
        </Stack>
      </Box>

      <MenuToggle isOpen={isOpen} toggle={toggle} />
    </Flex>
  );
}
