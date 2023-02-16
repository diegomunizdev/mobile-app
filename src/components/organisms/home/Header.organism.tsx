import { Box, Text } from "native-base";
import { MoleculaHomeHeader } from "../../molecules/home";
import { usePrivateRoutesContext } from "../../context/PrivateRoutes.context";

const OrganismHomeHeader = () => {
  const { state } = usePrivateRoutesContext();

  return (
    <Box bg="primary.900" px={5} py={5}>
      <MoleculaHomeHeader />
      <Text color="gray.50" bold fontSize="lg" pt={5}>
        {state?.account.name}
      </Text>
    </Box>
  );
};

export default OrganismHomeHeader;
