import { urlFor } from "@/sanityImageBuilder";
import { SanityUpcomingEventType } from "@/sanityTypes";
import { Box, Text, Image } from "@chakra-ui/react";

interface UpcomingEventProps {
  event: SanityUpcomingEventType | null;
}

const UpcomingEvent = ({ event }: UpcomingEventProps) => {
  return (
    <Box textAlign="center" mb={{ base: 5, md: 10 }} maxW="8xl" mx="auto">
      {event && (
        <Image
          src={urlFor(event.poster).url()}
          w="100%"
          maxH={{ base: "40vh", md: "70vh" }}
          objectFit={{ base: "contain", md: "cover" }}
          mb={6}
        />
      )}
      <Text
        as="h1"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="700"
        mb={4}
        color="red.600"
      >
        Upcoming Event!!!
      </Text>
      {/* Hero Poster */}

      {/* Content */}
      {event ? (
        <Box
          display="flex"
          justifyContent="center"
          flexDir="column"
          alignItems="center"
        >
          <Text
            as="p"
            fontSize={{ base: "sm", md: "xl" }}
            textAlign="justify"
            lineHeight="1.7"
            color="gray.700"
            px={{ base: 5 }}
          >
            {event.description}
          </Text>
        </Box>
      ) : (
        <Text
          as="p"
          fontSize={{ base: "sm", md: "xl" }}
          textAlign="center"
          lineHeight="1.7"
          color="gray.700"
          px={{ base: 5 }}
        >
          No upcoming event at the moment. New updates will be posted here.
        </Text>
      )}
    </Box>
  );
};

export default UpcomingEvent;
