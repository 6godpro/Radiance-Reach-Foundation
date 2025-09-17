import { IconButton } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface SocialBtnProps {
  bg: string;
  color: string;
  shadow: string;
  href: string;
  icon: IconType;
}

const SocialButton = ({ bg, color, shadow, href, icon: Icon }: SocialBtnProps) => {
  return (
    <a href={href} target="_blank">
      <IconButton
        bg={bg}
        color={color}
        rounded="full"
        size="md"
        transition="all 0.3s ease-in"
        _hover={{
          boxShadow: shadow,
          transform: "scale(1.05)",
        }}
      >
        {<Icon />}
      </IconButton>
    </a>
  );
};

export default SocialButton;
