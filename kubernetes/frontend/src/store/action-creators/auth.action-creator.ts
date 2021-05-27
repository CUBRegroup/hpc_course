import axios from "../../utils/axiosInstance";
import { ActionType } from "../action-types";
import { AuthAction } from "../actions/auth.action";
import { Dispatch } from "redux";

export const signupUser = (user: { username: string; password: string }) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: ActionType.SIGNUP_START,
    });

    try {
      await axios.post("/auth/signup", { ...user });
      dispatch({
        type: ActionType.SIGNUP_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: ActionType.SIGNUP_ERROR,
        payload: e.response.data.message,
      });
    }
  };
};

export const signinUser = (user: { username: string; password: string }) => {
  return async (dispacth: any) => {
    dispacth({
      type: ActionType.AUTH_START,
    });
    try {
      const { data } = await axios.post("/auth/signin", { ...user });
      localStorage.setItem("token", data.accessToken);
      console.log(data);
      dispacth({
        type: ActionType.AUTH_SUCCESS,
        payload: { username: user.username, accessToken: data.accessToken },
      });
    } catch (e) {
      dispacth({
        type: ActionType.AUTH_ERROR,
        payload: e.response.data.message,
      });
    }
  };
};

export const signOut = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    localStorage.removeItem("token");
    dispatch({
      type: ActionType.SIGNOUT,
    });
  };
};
