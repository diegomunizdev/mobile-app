import { StyleProp, ViewStyle } from "react-native";
import { StackAnimationTypes } from "react-native-screens";

import AuthProvider, { useAuthContext } from "../../context/Auth.context";
import { PrivateRoutes, PublicRoutes } from "../../templates/routes";

export interface IRoutes {
  name: string;
  component: () => JSX.Element;
  options?: {
    animation?: StackAnimationTypes;
    contentStyle?: StyleProp<ViewStyle>;
  };
  initialParams?: any;
}

const Routes = () => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
};

export default () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);
