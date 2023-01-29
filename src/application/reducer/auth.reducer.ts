import { AUTH_ACTIONS_TYPES, IUseAuthAction, IUseAuthState } from "../types";

function authReducer(
  state: IUseAuthState,
  action: IUseAuthAction
): IUseAuthState {
  switch (action.type) {
    case AUTH_ACTIONS_TYPES.SIGNIN_REQUEST:
      return { ...state, loading: true };
    case AUTH_ACTIONS_TYPES.SIGNIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: !!action.payload,
        loading: false,
        success: true,
      };
    case AUTH_ACTIONS_TYPES.SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case AUTH_ACTIONS_TYPES.SIGNOUT:
      return {
        ...state,
        loading: false,
        token: "",
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export default authReducer;
