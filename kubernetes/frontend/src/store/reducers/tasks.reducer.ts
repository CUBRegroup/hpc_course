import { ActionType } from "../action-types";
import { TasksAction } from "../actions/tasks.action";

export type Task = {
  id: string;
  title: string;
  status: string;
  description: string;
};

interface TasksState {
  loading: boolean;
  error: string | null;
  data: Task[] | null;
  success: boolean;
}

const initialState = {
  loading: false,
  error: null,
  data: [],
  success: false,
};

const taskReducer = (
  state: TasksState = initialState,
  action: TasksAction
): TasksState => {
  switch (action.type) {
    case ActionType.CREATE_TASK_START:
      return { ...state, loading: true, success: false };
    case ActionType.CREATE_TASK_SUCCESS:
      return { ...state, loading: false, success: true, error: null };
    case ActionType.CREATE_TASK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case ActionType.DELETE_TASK_START:
      return { ...state, loading: true, success: false };

    case ActionType.DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        data: action.payload,
      };

    case ActionType.DELETE_TASK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };

    case ActionType.UPDATE_TASK_START:
      return { ...state, loading: true, success: false };

    case ActionType.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        data: action.payload,
      };

    case ActionType.UPDATE_TASK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };

    case ActionType.GET_TASKS_START:
      return { ...state, loading: true, error: null, data: [], success: false };
    case ActionType.GET_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        success: true,
        error: null,
      };
    case ActionType.GET_TASKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    case ActionType.RESET_TASKS:
      return { ...state, loading: false, error: null, data: [] };
    default:
      return state;
  }
};

export default taskReducer;
