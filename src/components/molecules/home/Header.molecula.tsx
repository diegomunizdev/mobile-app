import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Box, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MoleculaHomeHeader = () => {
  const { navigate } = useNavigation();

  return (
    <Box flexDirection="row" justifyContent="space-between" alignItems="center">
      <TouchableOpacity onPress={() => navigate("account" as never)}>
        <Avatar bg="secondary.900" size="md">
          US
        </Avatar>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="bell-outline"
          color="gray.50"
          size={6}
          as={<MaterialCommunityIcons />}
        />
      </TouchableOpacity>
    </Box>
  );
};

export default MoleculaHomeHeader;
