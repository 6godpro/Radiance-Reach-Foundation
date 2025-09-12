import { useRef } from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import playIcon from "../assets/play-icon.png";
import thumbnail from "../assets/thumbnail.jpg";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

interface aboutProps {
  setFullScreen: (arg0: boolean) => void;
}

const About = ({ setFullScreen }: aboutProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setFullScreen(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <Box as="section" id="about us" ref={ref} px={4} mb={10}>
      {/* Section Title */}
      <Box textAlign="center" mb={{ base: 5, md: 10 }} maxW="8xl" mx="auto">
        <Text
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="600"
          mb={4}
          color="red.500"
        >
          About Us
        </Text>
        <Text
          as="p"
          fontSize={{ base: "sm", md: "xl" }}
          textAlign="justify"
          lineHeight="1.7"
          color="gray.700"
        >
          We are a charity driven by compassion, built to serve. Born from a
          deep desire to ease the burden of those going through hard times, our
          mission is rooted in love, empathy, and action. We support families in
          need, care for children who lack the basics of life, and provide
          essential support to women in need. We believe in showing up for one
          another by bringing light and hope where it's needed most. Every life
          we touch is a reminder why we began.
        </Text>
      </Box>

      {/* Content Section */}
      <Box
        id="about"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        gap={{ base: 8, md: 10 }}
        width="100%"
        maxW="8xl"
        mx="auto"
      >
        {/* Mission and Vision */}
        <Box flexBasis={{ base: "100%", md: "30%" }}>
          <SimpleGrid columns={1} gap={{ base: 4, md: 10 }}>
            {/* Mission */}
            <Card
              title="Our Mission"
              text="To provide practical support, nourishment and encouragement to families, children, and women in vulnerable situations thereby restoring hope, dignity, and a sense of belonging through every act of care."
            />

            {/* Vision */}
            <Card
              title="Our Vision"
              text="To create a world where no family feels forgotten, no child is left in need, and every woman is empowered. To help them all rise through kindness, support and shared humanity."
            />
          </SimpleGrid>
        </Box>

        {/* Video Section */}
        <Box
          position="relative"
          flexBasis={{ base: "100%", md: "60%" }}
          w="full"
        >
          <Box
            position="relative"
            w="100%"
            h="500px"
            borderRadius={10}
            overflow="hidden"
          >
            <Image
              src={thumbnail}
              alt="Video preview"
              w="100%"
              h="100%"
              objectFit="cover"
            />

            {/* Gray overlay */}
            <Box
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              bg="blackAlpha.600"
            />
          </Box>

          {/* Play Button */}
          <Box
            as="button"
            onClick={handlePlay}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <img src={playIcon} alt="Play" width="70px" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
