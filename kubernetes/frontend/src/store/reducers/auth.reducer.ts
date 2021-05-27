import { ActionType } from "../action-types";
import { AuthAction } from "../actions/auth.action";

interface AuthState {
  loading: boolean;
  error: string | string[] | null;
  username: string | null;
  accessToken: string | null;
  success: boolean;
}

const initialState = {
  loading: false,
  error: null,
  username: null,
  accessToken: null,
  success: false,
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case ActionType.AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
        username: null,
        accessToken: null,
        success: false,
      };
    case ActionType.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        username: action.payload.username,
        accessToken: action.payload.accessToken,
        success: true,
      };
    case ActionType.AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        username: null,
        accessToken: null,
        success: false,
      };
    case ActionType.SIGNUP_START:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };
    case ActionType.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
      };
    case ActionType.SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case ActionType.SIGNOUT:
      return {
        ...state,
        loading: false,
        error: null,
        username: null,
        accessToken: null,
        success: true,
      };
    default:
      return state;
  }
};

export default authReducer;
