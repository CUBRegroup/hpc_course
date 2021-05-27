import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { useMemo } from "react";
export const useActions = () => {
  const dispatch = useDispatch();

  //combines action creators with the dispatch function
  //{signupUser: dispatch(signupUser}
  return useMemo(
    () => bindActionCreators(actionCreators, dispatch),
    [dispatch]
  );
};
