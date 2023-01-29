import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IRoutes } from "../../views/routes/Routes";
import { ViewEntry } from "../../views/entry";
import { ViewAuthentication, ViewForgotPassword } from "../../views/auth";

const { Navigator, Screen } = createNativeStackNavigator();

const PublicRoutes = () => {
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

  return (
    <NavigationContainer
      linking={{
        prefixes: [],
        config: {
          screens: {},
        },
      }}
    >
      <Navigator
        initialRouteName="entry"
        screenOptions={{
          statusBarColor: "#FFFFFF",
          statusBarStyle: "dark",
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
  );
};

export default PublicRoutes;
