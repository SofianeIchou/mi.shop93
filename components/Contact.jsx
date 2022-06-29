import {
  Flex,
  Container,
  Image,
  Heading,
  Box,
  Text,
  Link,
  Divider,
} from "@chakra-ui/react";
import * as React from "react";

export const Contact = () => (
  <Container background="white" maxW="100%" id="nous-contacter">
    <Divider my="50px" />
    <Heading textAlign="center" size="2xl">
      Nos réseaux
    </Heading>
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      m="25px"
      flexDir={{ base: "column", md: "row" }}
    >
      <Box w="250px">
        <Link
          href="https://www.snapchat.com/add/mi.shop93"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/img/snapchat-logo.svg" boxSize="250px" mb="25px" />
        </Link>
        <Text fontWeight="700" textAlign="center" fontSize="3xl">
          MI.SHOP93
        </Text>
        <br />
        <Text fontSize="md" textAlign="center">
          Vous pourrez nous suivre et voir toutes nos présentation produits en
          direct et pleins d’autres choses…
        </Text>
      </Box>
      <Box w="250px">
        <Link
          href="https://api.whatsapp.com/send/?phone=33651960718"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/img/whatsapp-logo.svg" boxSize="250px" mb="25px" />
        </Link>
        <Text fontWeight="700" textAlign="center" fontSize="3xl">
          33651960718
        </Text>
        <br />
        <Text fontSize="md" textAlign="center">
          Pour connaitre une disponibilité posez vos questions ou commande.
        </Text>
      </Box>
    </Flex>
  </Container>
);
