import axios from "../../utils/axiosInstance";
import { ActionType } from "../action-types";
import { TasksAction } from "../actions/tasks.action";
import { Dispatch } from "redux";
import { Task } from "../reducers/tasks.reducer";

export const getTasks = () => {
  return async (dispacth: Dispatch<TasksAction>) => {
    dispacth({
      type: ActionType.GET_TASKS_START,
    });
    try {
      const token = localStorage.getItem("token");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const { data } = await axios.get("/tasks", config);
      dispacth({
        type: ActionType.GET_TASKS_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispacth({
        type: ActionType.GET_TASKS_ERROR,
        payload: e.response.data.message,
      });
    }
  };
};

export const createTask = (task: { title: string; description: string }) => {
  return async (dispatch: Dispatch<TasksAction>) => {
    dispatch({
      type: ActionType.CREATE_TASK_START,
    });
    try {
      const token = localStorage.getItem("token");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      await axios.post("/tasks", task, config);
      dispatch({
        type: ActionType.CREATE_TASK_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: ActionType.CREATE_TASK_ERROR,
        payload: e.response.data.message,
      });
    }
  };
};

export const resetTasks = () => {
  return async (dispatch: Dispatch<TasksAction>) => {
    dispatch({
      type: ActionType.RESET_TASKS,
    });
  };
};

export const deleteTask = (taskId: string) => {
  return async (dispatch: Dispatch<TasksAction>, getState: any) => {
    dispatch({
      type: ActionType.DELETE_TASK_START,
    });
    try {
      const token = localStorage.getItem("token");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      await axios.delete(`/tasks/${taskId}`, config);

      const { data } = getState().tasks;
      const payload = data.filter((task: any) => task.id !== taskId);

      dispatch({
        type: ActionType.DELETE_TASK_SUCCESS,
        payload,
      });
    } catch (e) {
      dispatch({
        type: ActionType.DELETE_TASK_ERROR,
        payload: e.response.data.message,
      });
    }
  };
};

export const updateTask = (taskId: string, status: string) => {
  return async (dispatch: Dispatch<TasksAction>, getState: any) => {
    dispatch({
      type: ActionType.UPDATE_TASK_START,
    });
    try {
      const token = localStorage.getItem("token");
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      await axios.patch(`/tasks/${taskId}/status`, { status }, config);

      const { data } = getState().tasks;
      const updatedTask = data.find((task: any) => task.id === taskId);

      updatedTask.status = status;

      // const results = data.filter((task: any) => task.id !== taskId);
      const payload: Task[] = [...data];

      dispatch({
        type: ActionType.UPDATE_TASK_SUCCESS,
        payload,
      });
    } catch (e) {
      dispatch({
        type: ActionType.UPDATE_TASK_ERROR,
        payload: e.response.data.message,
      });
    }
  };
};
