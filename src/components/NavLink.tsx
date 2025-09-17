import { Button } from "@chakra-ui/react";

interface NavLinkProps {
  children: React.ReactNode;
  onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave: () => void;
  fontSize: string;
  isLast: boolean;
}
const NavLink = ({
  children,
  onMouseEnter,
  onMouseLeave,
  fontSize,
  isLast,
}: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const section = document.getElementById(
      e.currentTarget.innerText.toLowerCase()
    );
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Button
      fontSize={fontSize}
      width="fit-content"
      height="40px"
      onMouseEnter={!isLast ? onMouseEnter : undefined}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
      fontWeight="600"
      _hover={{
        color: "white",
      }}
      color={{ base: "#3e6389", md: isLast ? "white" : "#3e6389" }}
      bg={isLast ? "red.600" : "none"}
      rounded={isLast ? "full" : "none"}
    >
      {children}
    </Button>
  );
};

export default NavLink;
