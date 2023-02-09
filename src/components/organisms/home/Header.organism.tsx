import { Box, Text } from "native-base";
import { MoleculaHomeHeader } from "../../molecules/home";
import { useAccounts } from "../../../hooks/useAccounts";
import { useHomeContext } from "../../context/Home.context";

const OrganismHomeHeader = () => {
  const { state } = useHomeContext();

  console.log("useHomeContext", state);

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
