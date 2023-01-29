import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../views/home";
import { ViewAccount } from "../../views/account";
import { IRoutes } from "../../views/routes/Routes";

const { Navigator, Screen } = createNativeStackNavigator();

const PrivateRoutes = () => {
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
      initialParams: {
        // adicionar o id do banco de dados
        accountId: 20,
      },
    },
  ];

  return (
    <NavigationContainer
      linking={{
        prefixes: [],
        config: {
          screens: {
            account: "account/:accountId",
          },
        },
      }}
    >
      <Navigator
        initialRouteName="home"
        screenOptions={{
          statusBarColor: "#14213d",
          headerShown: false,
        }}
      >
        {privateRoutes.map((item, index) => (
          <Screen key={index} {...item} />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};

export default PrivateRoutes;
