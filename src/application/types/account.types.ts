import { IUseAuthState } from "./auth.types";

export interface IAddress {
  id: string | undefined;
  createdAt: string | undefined;
  updatedAt: string | undefined;
  zipCode: string | undefined;
  street: string | undefined;
  number: number | undefined;
  complement: string | undefined;
  neighborhood: string | undefined;
  city: string | undefined;
  state: string | undefined;
}

export interface IAvatar {
  id: string | undefined;
  avatar: string | undefined;
  account: string | undefined;
}

export interface IUseAccountState {
  account: {
    id: string | undefined;
    createdAt: string | undefined;
    updatedAt: string | undefined;
    name: string | undefined;
    email: string | undefined;
    avatar: IAvatar;
    address: IAddress[];
  };
  loading: boolean;
  success: boolean;
  error: boolean;
}

export interface IUseAccountAction {
  type: string;
  payload?: any;
}

export interface IGetAccount {
  id: string;
}

export const initialAccountState: IUseAccountState = {
  account: {
    id: "",
    createdAt: "",
    updatedAt: "",
    name: "",
    email: "",
    avatar: {
      id: "",
      avatar: "",
      account: "",
    },
    address: [],
  },
  loading: false,
  success: false,
  error: false,
};

export enum ACCOUNT_ACTIONS_TYPES {
  GET_ACCOUNT_RESET = "@GET_ACCOUNT_RESET",
  GET_ACCOUNT_REQUEST = "@GET_ACCOUNT_REQUEST",
  GET_ACCOUNT_SUCCESS = "@GET_ACCOUNT_SUCCESS",
  GET_ACCOUNT_ERROR = "@GET_ACCOUNT_ERROR",
}
