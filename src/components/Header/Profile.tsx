import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luiz Rioja</Text>
          <Text color="gray.300" fontSize="small">
            luizrioja@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Luiz Rioja"
        src="https://github.com/mrrioja.png"
      />
    </Flex>
  );
}
