import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import ReactWhatsapp from 'react-whatsapp';


// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: '1 - TROUVE TON/TES PRODUIT(S)',
      text:
        "Trouve le/les produit(s) qui t’interesse(nt) sur notre site et cliques sur commander via Whatsapp ça nous l’enverra automatiquement ou envoies nous une photo ",
      image:
      "#",
    },
    {
      title: '2 - TES INFORMATIONS',
      text:
        `COPIE, Remplie et renvoi nous ce formulaire

Last name (Nom) :
First name (Prénom) :
Adresse :
City (Ville) :
postal code :
Phone (Num):
Country (Pays) :`,
      image:
        '#',
    },
    {
      title: '3 - LE PAIEMENT',
      text:
        `Le paiement se fait par virement, en espèce via PCS Mastercard ou par CB via nos lien 100% sécurisé surtout n’oublies pas de nous préciser comment tu souhaites payer. `,
      image:
        '#',
    },
    {
        title: '4 - FINALISATION',
        text:
          `Une fois tout ça fait de A à Z envoies nous ✅✅✅ pour que l’on voit ton message rapidement si tu as tout bien fait ta commande est lancée.`,
        image:
          '#',
      }
  ];

  return (
    <Box
      position={'relative'}
      height={{ sm:'calc(100vh - 76px)', md: 'calc(100vh - 81px)' }}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={{ sm:'calc(100vh - 76px)', md: 'calc(100vh - 81px)' }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} p="5" whiteSpace="pre-wrap">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}