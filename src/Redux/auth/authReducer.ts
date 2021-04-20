import { Action } from 'redux';

export type AuthStateType = {
  login: boolean;
};

const initState: AuthStateType = {
  login: false,
};

export const authReducer = (
  state: AuthStateType = initState,
  action: Action,
): AuthStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
