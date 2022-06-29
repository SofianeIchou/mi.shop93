import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import ReactWhatsapp from "react-whatsapp";
import { PriceTag } from "./PriceTag";

export const ProductCard = (props) => {
  const { product, rootProps } = props;
  const { name, imageUrl, price, id } = product;
  return (
    <Stack
      spacing={useBreakpointValue({ base: "4", md: "5" })}
      {...rootProps}
      p={{ base: "5", md: "7" }}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {name}
          </Text>
          <PriceTag price={price} currency="EUR" />
        </Stack>
      </Stack>
      <Stack align="left">
        <Link
          href={`/catalogue/${id}`}
          textAlign="center"
          color="white"
          background="#327da8"
          _hover={{ background: "#213f91", cursor: "pointer" }}
          borderRadius="3px"
          p="1"
        >
          Voir le produit
        </Link>
        <ReactWhatsapp
          number="0651960718"
          message={`Je souhaite ${name} au prix de ${price}€`}
        >
          <Box
            color="white"
            background="#25D366"
            _hover={{ background: "#075E54", cursor: "pointer" }}
            borderRadius="3px"
            p="1"
          >
            Ouvrir Whatsapp
          </Box>
        </ReactWhatsapp>
      </Stack>
    </Stack>
  );
};
