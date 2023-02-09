import {
  ACCOUNT_ACTIONS_TYPES,
  AUTH_ACTIONS_TYPES,
  IUseAccountAction,
  IUseAccountState,
  initialAccountState,
} from "../types";

function accountReducer(
  state: IUseAccountState = initialAccountState,
  action: IUseAccountAction
): IUseAccountState {
  console.log("action", action);
  switch (action.type) {
    case ACCOUNT_ACTIONS_TYPES.GET_ACCOUNT_RESET:
      return initialAccountState;
    case ACCOUNT_ACTIONS_TYPES.GET_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case ACCOUNT_ACTIONS_TYPES.GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        account: action.payload,
        loading: false,
        success: true,
        error: false,
      };
    case AUTH_ACTIONS_TYPES.SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    case AUTH_ACTIONS_TYPES.SIGNOUT:
      return initialAccountState;
    default:
      return state;
  }
}

export default accountReducer;
