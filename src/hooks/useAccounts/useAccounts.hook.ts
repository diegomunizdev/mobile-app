import { useReducer } from "react";

import {
  AUTH_ACTIONS_TYPES,
  IGetAccount,
  IUseAuthAction,
  IUseAccountState,
  initialAuthState,
  initialAccountState,
  ACCOUNT_ACTIONS_TYPES,
} from "../../application/types";
import { accountReducer, authReducer } from "../../application/reducer";
import { useAxios } from "../../application/client";

interface UseAccounts {
  state: IUseAccountState;
  getAccountById: (variables: IGetAccount) => Promise<void>;
}

const useAccounts = (): UseAccounts => {
  const { axiosInstance } = useAxios();
  const [state, dispatch] = useReducer<
    (state: IUseAccountState, action: IUseAuthAction) => IUseAccountState
  >(accountReducer, initialAccountState);

  const getAccountById = async (variables: IGetAccount): Promise<void> => {
    dispatch({ type: ACCOUNT_ACTIONS_TYPES.GET_ACCOUNT_REQUEST });
    await axiosInstance
      .get(`accounts/${variables.id}`)
      .then((response) => {
        dispatch({
          type: ACCOUNT_ACTIONS_TYPES.GET_ACCOUNT_SUCCESS,
          payload: response.data,
        });
      })
      .catch(() => {
        dispatch({ type: ACCOUNT_ACTIONS_TYPES.GET_ACCOUNT_ERROR });
      });
  };

  return { state, getAccountById };
};

export default useAccounts;
