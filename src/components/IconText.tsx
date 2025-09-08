import { Flex, Box, Text } from "@chakra-ui/react";
import { LucideIcon } from "lucide-react";

type IconTextProps = {
  icon: LucideIcon;
  text: string;
  bg?: string;
  color?: string;
};

export const IconText = ({ icon: Icon, text, bg = "red.600", color = "white" }: IconTextProps) => {
  return (
    <Flex w={{ md: "35%" }} alignItems="center" gap={2}>
      <Box
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        w={8}
        h={8}
        bg={bg}
        borderRadius="full"
        p={2}
      >
        <Icon size={15} color={color} />
      </Box>
      <Text color="blackAlpha.700" fontSize={{ base: "sm", md: "md" }}>
        {text}
      </Text>
    </Flex>
  );
};
