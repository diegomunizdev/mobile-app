import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../home";
import AuthProvider, { useAuthContext } from "../../context/Auth.context";
import { ViewAuthentication, ViewForgotPassword } from "../auth";
import { ViewAccount } from "../account";
import { StackAnimationTypes } from "react-native-screens";
import { ViewEntry } from "../entry";

const { Navigator, Screen } = createNativeStackNavigator();

interface IRoutes {
  name: string;
  component: () => JSX.Element;
  options?: {
    animation?: StackAnimationTypes | undefined;
    contentStyle?: StyleProp<ViewStyle>;
  };
}

const Routes = () => {
  const { isAuthenticated } = useAuthContext();

  const styles = StyleSheet.create({
    bgColor: {
      backgroundColor: "#ffffff",
    },
    headerStyle: {
      backgroundColor: "#14213d",
    },
    headerTitleStyle: {
      color: "#ffffff",
    },
  });

  const publicRoutes: IRoutes[] = [
    {
      name: "entry",
      component: ViewEntry,
    },
    {
      name: "signin",
      component: ViewAuthentication,
    },
    {
      name: "forgot-password",
      component: ViewForgotPassword,
    },
  ];

  const privateRoutes: IRoutes[] = [
    {
      name: "home",
      component: Home,
    },
    {
      name: "account",
      component: ViewAccount,
      options: {
        animation: "fade_from_bottom",
      },
    },
  ];

  return (
    <>
      {isAuthenticated ? (
        <NavigationContainer>
          <Navigator
            initialRouteName="home"
            screenOptions={{
              statusBarColor: "#14213d",
              headerShown: false,
            }}
          >
            {privateRoutes.map((item, index) => (
              <Screen
                key={index}
                {...item}
                options={{
                  animation: item.options?.animation,
                }}
              />
            ))}
          </Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Navigator
            initialRouteName="entry"
            screenOptions={{
              statusBarColor: "#FFFFFF",
              headerShown: false,
              animation: "fade",
              contentStyle: {
                backgroundColor: "#FFFFFF",
              },
            }}
          >
            {publicRoutes.map((item, index) => (
              <Screen key={index} {...item} />
            ))}
          </Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);
