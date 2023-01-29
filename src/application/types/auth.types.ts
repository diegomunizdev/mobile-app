export interface IAuthenticationFormField {
  email?: string | null;
  password?: string | null;
}

export interface IForgotPasswordFormField {
  email?: string | null;
}

export interface IUseAuthState {
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  success: boolean;
  error: boolean;
}

export interface IUseAuthAction {
  type: string;
  payload?: any;
}

export const initialAuthState: IUseAuthState = {
  token: "",
  isAuthenticated: false,
  loading: false,
  success: false,
  error: false,
};

export enum AUTH_ACTIONS_TYPES {
  SIGNIN_REQUEST = "@SIGNIN_REQUEST",
  SIGNIN_SUCCESS = "@SIGNIN_SUCCESS",
  SIGNIN_ERROR = "@SIGNIN_ERROR",
  SIGNOUT = "@SIGNOUT",
}
