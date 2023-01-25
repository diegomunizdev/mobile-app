import { StyleSheet, Text, View } from "react-native";

const Details = () => {
  const styles = StyleSheet.create({
    view: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#e6e6e6",
    },
  });
  return (
    <View style={styles.view}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default Details;
