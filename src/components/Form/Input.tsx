import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label: string;
}

export function Input({ label, name, ...rest }: InputProps) {
  return (
    <FormControl>
      <FormLabel htmlFor="email">{label}</FormLabel>
      <ChakraInput
        id="email"
        name={name}
        type="email"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: "gray.900",
        }}
        {...rest}
      />
    </FormControl>
  );
}
