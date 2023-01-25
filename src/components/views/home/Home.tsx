import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import HomeProvider, { useHomeContext } from "../../../context/Home";

const Home = () => {
  const { navigate } = useNavigation();

  const styles = StyleSheet.create({
    view: {
      display: "flex",
      padding: 10,
    },
  });

  return (
    <View style={styles.view}>
      <Text>Home Screen</Text>
      <Button
        title="Clique aqui"
        onPress={() => navigate("Details" as never)}
      />
    </View>
  );
};

export default () => (
  <HomeProvider>
    <Home />
  </HomeProvider>
);
