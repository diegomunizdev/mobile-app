import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/components/views/home";
import { Details } from "./src/components/views/details";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const routes = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Details",
    component: Details,
  },
];

const App = () => {
  const styles = StyleSheet.create({
    btn: {
      margin: 20,
    },
    header: {
      backgroundColor: "#00ff00",
      height: 100,
    },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {routes.map((item, index) => (
          <Stack.Screen
            key={index}
            {...item}
            options={{
              headerTitleAlign: "center",
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
