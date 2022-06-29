import { Box, Image, Flex, Heading, Text, Stack, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Menu from "../../../components/Menu";
import { products } from "../../../utils/data";
import ReactWhatsapp from "react-whatsapp";
import CaptionCarousel from "../../../components/Carousel";

const Product = ({ produit }) => {
  const { name, description, price, imageUrl, images } = produit;
  const [defaultImg, setDefaultImg] = useState("");

  useEffect(() => {
    if (images?.length > 0)
      if (!images?.includes(imageUrl)) images.unshift(imageUrl);
    setDefaultImg(imageUrl);
  }, []);
  return (
    <div>
      <Menu />
      <Flex
        justifyContent="space-evenly"
        flexDir={{ base: "column", md: "row" }}
        height={{ base: "100%", md: "calc(100vh - 120px)" }}
      >
        <Flex flexDir="column-reverse" p="25px" justifyContent="space-evenly">
          <Flex flexDir="row" justifyContent="center">
            {images?.length > 0 &&
              images.map((elm, i) => (
                <Box key={i} mt={{ base: "0", md: "15px" }} h="50%">
                  <Image
                    src={elm}
                    mr="15px"
                    boxSize="80px"
                    mt="20px"
                    _hover={{ cursor: "pointer" }}
                    onClick={() => setDefaultImg(elm)}
                  />
                </Box>
              ))}
          </Flex>
          <Image
            src={defaultImg}
            boxSize="500px"
            border="1px solid rgba(0, 0, 0, 0.5)"
          />
        </Flex>
        <Flex marginTop={{ base: "15px", md: "10%" }} p="25px" flexDir="column">
          <Heading size="xl">{name}</Heading>
          <Text mt="10px" fontSize="20px" fontWeight={600}>
            Prix : {price} €
          </Text>
          <Text mt="10%">{description}</Text>
          <Stack align="left" mt="5%">
            <ReactWhatsapp
              number="33651960718"
              message={`Je souhaite ${name} au prix de ${price}€`}
            >
              <Box
                color="white"
                w="max-content"
                background="#25D366"
                _hover={{ background: "#075E54", cursor: "pointer" }}
                borderRadius="3px"
                p="2"
              >
                Commander via Whatsapp
              </Box>
            </ReactWhatsapp>
          </Stack>
        </Flex>
      </Flex>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const produit = products.find((x) => x.id === params.id);
  return {
    props: { produit },
  };
};
export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export default Product;
