import { decode } from "jsonwebtoken";
import {
  AUTH_ACTIONS_TYPES,
  IUseAuthAction,
  IUseAuthState,
  initialAuthState,
} from "../types";

function authReducer(
  state: IUseAuthState = initialAuthState,
  action: IUseAuthAction
): IUseAuthState {
  switch (action.type) {
    case AUTH_ACTIONS_TYPES.SIGNIN_REQUEST:
      return { ...state, loading: true, success: false, error: false };
    case AUTH_ACTIONS_TYPES.SIGNIN_SUCCESS: {
      const sub = decode(action.payload);
      // TODO: PAREI AQUI
      console.log("SUB", sub);
      return {
        ...state,
        token: action.payload,
        accountLoggedId: sub ?? "",
        isAuthenticated: !!action.payload,
        loading: false,
        success: true,
        error: false,
      };
    }
    case AUTH_ACTIONS_TYPES.SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    case AUTH_ACTIONS_TYPES.SIGNOUT:
      return initialAuthState;
    default:
      return state;
  }
}

export default authReducer;
