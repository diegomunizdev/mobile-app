import { useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  AUTH_ACTIONS_TYPES,
  IAuthenticationFormField,
  IForgotPasswordFormField,
  IUseAuthAction,
  IUseAuthState,
  initialAuthState,
} from "../../application/types";
import { authReducer } from "../../application/reducer";
import { useAxios } from "../../application/client";

interface UseAUth {
  state: IUseAuthState;
  signIn: (variables: IAuthenticationFormField) => Promise<void>;
  forgotPassword: (variables: IForgotPasswordFormField) => Promise<void>;
  signOut: () => void;
}

const useAuth = (): UseAUth => {
  const { axiosInstance } = useAxios();
  const [state, dispatch] = useReducer<
    (state: IUseAuthState, action: IUseAuthAction) => IUseAuthState
  >(authReducer, initialAuthState);

  const signIn = async (variables: IAuthenticationFormField): Promise<void> => {
    dispatch({ type: AUTH_ACTIONS_TYPES.SIGNIN_REQUEST });
    await axiosInstance
      .post("auth/signin", variables)
      .then(async (response) => {
        await AsyncStorage.setItem(
          "accessToken",
          JSON.stringify(response.data)
        );
        dispatch({
          type: AUTH_ACTIONS_TYPES.SIGNIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch(() => {
        dispatch({ type: AUTH_ACTIONS_TYPES.SIGNIN_ERROR });
      });
  };

  const forgotPassword = async (variables: IForgotPasswordFormField) => {};

  const signOut = () => {
    AsyncStorage.clear();
    dispatch({ type: AUTH_ACTIONS_TYPES.SIGNOUT });
  };

  return { state, signIn, forgotPassword, signOut };
};

export default useAuth;
