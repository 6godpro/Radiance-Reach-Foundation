import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  Textarea,
  Stack,
  Field,
  Portal,
  Select,
  createListCollection,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import SocialButton from "./SocialButton";
import emailjs from "@emailjs/browser";
import { IconText } from "./IconText";

// form fields
interface FormValues {
  name: string;
  email: string;
  message: string;
  title: string;
}

const MotionButton = motion.create(Button);

// EmailJS environment variables
const serviceId: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const helpOptions = createListCollection({
  items: [
    { label: "Join Volunteer team", value: "volunteer" },
    { label: "Donation", value: "donation" },
    { label: "Partner with us", value: "partner" },
  ],
});

const subjectMap:Record<string, string> = {
  volunteer: "Volunteer Application",
  donation: "Donation Inquiry",
  partner: "Partnership Request",
}

const contactFieldStyleProp = {
  variant: "outline" as const,
  size: "md" as const,
  fontSize: "16px",
  maxW: { base: "", md: "80%" },
  _focus: { border: "none" },
  color: "black",
  bg: "whiteAlpha.700",
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setButtonText("");

    const mappedTitle = subjectMap[data.title]

    await emailjs
      .send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          title: mappedTitle,
          message: data.message,
        },
        publicKey
      )
      .then(() => {
        setLoading(false);
        setButtonText("Sent");
        reset();
      })
      .catch(() => {
        alert("Message sending failed");
      });

    setTimeout(() => {
      setLoading(false);
      setButtonText("Send Message");
    }, 500);
  };

  return (
    <Flex
      id="contact us"
      width={{ base: "90vw", md: "80vw" }}
      justifyContent="center"
      margin="0 auto"
      flexDir={{ base: "column", md: "row" }}
      marginBottom={{ base: "20px", md: "100px" }}
    >
      {/* Contact Us text */}
      <Flex flexBasis="50%" flexDir="column">
        <Text
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="700"
          marginBottom="2"
          textAlign="center"
          color="red.600"
        >
          Get in touch
        </Text>
        <Text
          as="p"
          fontSize={{ base: "sm", md: "xl" }}
          textAlign="justify"
          marginBottom="4"
          width={{ base: "100%", md: "90%" }}
          color="gray.700"
          lineHeight="1.7"
        >
          Ready to get involved or have questions? We'd love to hear from you.
          Reach out and let's start making a difference together.
        </Text>

        {/* Social media handles */}
        <Flex
          alignItems={{ md: "center" }}
          gap={{ base: 0, md: 5 }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Text as="p" fontSize={{ base: "sm", md: "xl" }} color="gray.700">
            Check us out on our socials
          </Text>
          <Box display="flex" gap={2} mt={{ base: 2 }}>
            <SocialButton
              icon={FaInstagram}
              bg="red.100"
              color="red.600"
              href="https://www.instagram.com/radiancereachcharityfoundation"
              shadow="0 0 10px rgba(220, 38, 38, 0.7)"
            />
            <SocialButton
              icon={FaFacebook}
              bg="blue.100"
              color="blue.700"
              href="https://web.facebook.com/p/Radiance-Reach-Charity-Foundation-61569795354383/?_rdc=1&_rdr#"
              shadow="0 0 10px rgba(23, 61, 166, 0.7)"
            />
          </Box>
        </Flex>
        <Flex
          mt={6}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 4, md: 16 }}
        >
          <IconText icon={Mail} text="radiancereachcharity@gmail.com" />
          <IconText icon={Phone} text="+2348157174593" />
        </Flex>
      </Flex>

      {/* Message area */}
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        flexBasis="50%"
        bg="whiteAlpha.300"
        border="1px rgba(158, 147, 147, 0.2) solid"
        borderRadius="10px"
        px={{ base: 2, md: 5 }}
        py={{ base: 2, md: 5 }}
        mt={{ base: 4 }}
      >
        <Stack gap="4" mt={{ base: "10px", md: "0" }}>
          <Box
            as="span"
            fontSize={{ base: "sm", md: "xl" }}
            color="red.600"
            fontWeight={600}
          >
            LEAVE A MESSAGE
          </Box>
          <Input
            id="name"
            {...register("name", {
              required: { value: true, message: "Name is required" },
              minLength: { value: 3, message: "Please enter a valid name" },
            })}
            {...contactFieldStyleProp}
            placeholder="Name"
            border={
              errors.name
                ? "1px solid red"
                : "1px rgba(158, 147, 147, 0.2) solid"
            }
          />
          {errors.name && (
            <Text fontSize="12px" color="red.500">
              {errors.name.message}
            </Text>
          )}
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email address",
              },
            })}
            {...contactFieldStyleProp}
            placeholder="Email"
            border={
              errors.email
                ? "1px solid red"
                : "1px rgba(158, 147, 147, 0.2) solid"
            }
          />
          {errors.email && (
            <Text fontSize="12px" color="red.500">
              {errors.email.message}
            </Text>
          )}
          <Field.Root
            invalid={!!errors.title}
            width={{ base: "100%", md: "80%" }}
          >
            <Field.Label color="gray.600" fontSize="sm">
              How would you like to help?
            </Field.Label>
            <Controller
              control={control}
              name="title"
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <Select.Root
                  name={field.name}
                  value={field.value ? [field.value] : []} // convert string -> string[]
                  onValueChange={(details) =>
                    field.onChange(details.value[0] ?? "")
                  }
                  onInteractOutside={() => field.onBlur()}
                  collection={helpOptions}
                  border={
                    errors.title
                      ? "0px solid red"
                      : "0px rgba(158, 147, 147, 0.2) solid"
                  }
                  bg="whiteAlpha.700"
                  rounded="md"
                  size="lg"
                >
                  <Select.HiddenSelect />
                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText
                        placeholder="Choose an option"
                        fontSize="16px"
                      />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>
                  <Portal>
                    <Select.Positioner>
                      <Select.Content>
                        {helpOptions.items.map((item) => (
                          <Select.Item item={item} key={item.value}>
                            {item.label}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>
              )}
            />
            <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
          </Field.Root>

          {/* Message */}
          <Textarea
            {...register("message", { required: "Please enter a message" })}
            {...contactFieldStyleProp}
            placeholder="Enter your message here"
            minH={{ base: "120px", md: "120px" }}
            border={
              errors.message
                ? "1px solid red"
                : "1px rgba(158, 147, 147, 0.2) solid"
            }
            resize="none"
          />
          {errors.message && (
            <Text fontSize="12px" color="red.500">
              {errors.message.message}
            </Text>
          )}

          <MotionButton
            type="submit"
            bgColor="red.600"
            width={{ base: "100%", md: "40%" }}
            rounded="full"
            loading={loading}
            spinner={<BeatLoader size={8} color="#fff" />}
            loadingText={buttonText}
            disabled={false}
            color="white"
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 800 }}
            _hover={{ transform: "scale(1.05)" }}
          >
            {buttonText}
          </MotionButton>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Contact;
