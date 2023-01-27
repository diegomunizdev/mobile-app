import { Box, Text } from "native-base";
import { MoleculaHomeHeader } from "../../molecules/home";

const OrganismHomeHeader = () => {
  return (
    <Box bg="primary.900" px={5} py={5}>
      <MoleculaHomeHeader />
      <Text color="gray.50" bold fontSize="lg" pt={5}>
        Usuário
      </Text>
    </Box>
  );
};

export default OrganismHomeHeader;
