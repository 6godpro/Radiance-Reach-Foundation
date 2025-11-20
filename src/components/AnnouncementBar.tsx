import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface AnnouncementBarProps {
  bannerMessage: string;
}

const AnnouncementBar = ({ bannerMessage }: AnnouncementBarProps) => {
  const animation = {
    x: ["0%", "-100%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop" as "loop",
      duration: 10,
      ease: "linear",
    },
  };

  return (
    <Box
      position="fixed"
      top="64px"
      zIndex={1000}
      w="100%"
      bg="red.600"
      color="white"
      overflow="hidden"
      whiteSpace="nowrap"
      py={2}
    >
      {Array.from({ length: 4 }).map(() => (
        <MotionBox display="inline-flex" animate={animation} px={10}>
          <Text as="span" fontWeight="600" fontSize={{ base: "sm", md: "md" }}>
            {bannerMessage}
          </Text>
        </MotionBox>
      ))}
    </Box>
  );
};

export default AnnouncementBar;
