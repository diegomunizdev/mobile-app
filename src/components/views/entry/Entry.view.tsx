import { Box, Button, Center, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

const ViewEntry = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <Box flex={1} />
      <VStack space={3} m={8} mb={20}>
        <Button>Criar minha conta</Button>
        <Button variant="outline" onPress={() => navigate("signin" as never)}>
          Entrar na minha conta
        </Button>
      </VStack>
    </>
  );
};

export default ViewEntry;
