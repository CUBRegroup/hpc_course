import { ActionType } from "../action-types";

export type AuthAction =
  | AuthStartAction
  | AuthSuccessAction
  | AuthErrorAction
  | SignupStartAction
  | SignupSuccessAction
  | SignupErrorAction
  | SignOutAction;

interface AuthStartAction {
  type: ActionType.AUTH_START;
}

interface AuthSuccessAction {
  type: ActionType.AUTH_SUCCESS;
  payload: { username: string; accessToken: string };
}

interface AuthErrorAction {
  type: ActionType.AUTH_ERROR;
  payload: string;
}

interface SignupStartAction {
  type: ActionType.SIGNUP_START;
}

interface SignupSuccessAction {
  type: ActionType.SIGNUP_SUCCESS;
}

interface SignupErrorAction {
  type: ActionType.SIGNUP_ERROR;
  payload: string[];
}

interface SignOutAction {
  type: ActionType.SIGNOUT;
}
