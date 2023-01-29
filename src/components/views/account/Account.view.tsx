import { TouchableOpacity } from "react-native";
import { Avatar, Box, FlatList, Icon, Text, View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useAuthContext } from "../../context/Auth.context";

const ViewAccount = () => {
  const { goBack } = useNavigation();
  const { signOut } = useAuthContext();

  const data = [
    {
      name: "Dados pessoais",
      icon: "account-outline",
    },
    {
      name: "Notificações",
      icon: "bell-outline",
    },

    {
      name: "Sair",
      icon: "logout",
      onPress: () => signOut(),
    },
  ];

  return (
    <View>
      <View bg="gray.200">
        <TouchableOpacity onPress={() => goBack()}>
          <Icon
            as={<MaterialCommunityIcons name="chevron-left" />}
            size="4xl"
            ml={2}
            mt={2}
          />
        </TouchableOpacity>
        <View p={5} flexDirection="row" alignItems="center">
          <Avatar bg="secondary.900" size="md">
            US
          </Avatar>
          <Text ml={5} fontSize="lg" bold>
            Usuário
          </Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={item.onPress}>
              <Box p={5} flexDirection="row" alignItems="center">
                <Icon
                  name={item.icon}
                  size="lg"
                  as={<MaterialCommunityIcons />}
                />
                <Text ml={5}>{item.name}</Text>
              </Box>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ViewAccount;
