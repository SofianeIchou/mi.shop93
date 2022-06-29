import { Flex, IconButton, Text, Box, Button, Link } from "@chakra-ui/react";
import Menu from "../components/Menu";
import { BiErrorAlt } from "react-icons/bi"
export default function Error() {
  return (
    <Box>
      <Menu />
      <Flex h="100vh" justifyContent="center" alignItems="center">
      <BiErrorAlt fontSize="14rem" />
      <Box>
        <Text fontSize={{base:"2xl", md: "6xl"}}>Page non trouvé - Erreur 404</Text>
        <Link href="/">
          <Button mt="15px" color="gray.800">Revenir à l'accueil</Button>
        </Link>
      </Box>
    </Flex>
    </Box>
    
  )
}
