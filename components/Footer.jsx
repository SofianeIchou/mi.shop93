import { ButtonGroup, Container, IconButton, Stack, Text, Divider } from '@chakra-ui/react'
import * as React from 'react'
import { FaSnapchatGhost, FaWhatsapp } from 'react-icons/fa'

export const Footer = () => (
    <Container as="footer" role="contentinfo" backgroundColor="#27303e" maxWidth="100%">
    <Divider />
    <Stack
      pt="8"
      pb="12"
      justify="space-between"
      direction={{ base: 'column-reverse'}}
      align="center"
    >
      <Text fontSize="sm" color="white">
        &copy; {new Date().getFullYear()} - Mi.Shop93
      </Text>
      <ButtonGroup colorScheme="white">
        <IconButton
          as="a"
          target="_blank" 
          rel="noopener noreferrer"
          href="https://www.snapchat.com/add/mi.shop93"
          aria-label="Snapchat"
          icon={<FaSnapchatGhost fontSize="1.25rem" />}
        />
        <IconButton as="a" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=0618540065" aria-label="Whatsapp" icon={<FaWhatsapp fontSize="1.25rem" />} />
      </ButtonGroup>
    </Stack>
  </Container>
)