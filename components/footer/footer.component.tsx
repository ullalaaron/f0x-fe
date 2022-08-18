import { Image, Flex } from "@chakra-ui/react";
import * as React from "react";

export function Footer() {
  return (
    <Flex
      bg="black"
      padding={"5rem"}
      alignItems="center"
      justifyContent="center"
    >
      <Image src={"/img/logo-inverted.png"} alt="logo" width={"10rem"} />
    </Flex>
  );
}
