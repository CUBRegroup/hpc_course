import { ActionType } from "../action-types";
import { Task } from "../reducers/tasks.reducer";

interface CreateTaskStartAction {
  type: ActionType.CREATE_TASK_START;
}

interface CreateTaskSuccessAction {
  type: ActionType.CREATE_TASK_SUCCESS;
}

interface CreateTaskErrorAction {
  type: ActionType.CREATE_TASK_ERROR;
  payload: string;
}

interface DeleteTaskStartAction {
  type: ActionType.DELETE_TASK_START;
}

interface DeleteTaskSuccessAction {
  type: ActionType.DELETE_TASK_SUCCESS;
  payload: Task[];
}

interface DeleteTaskErrorAction {
  type: ActionType.DELETE_TASK_ERROR;
  payload: string;
}

interface UpdateTaskStartAction {
  type: ActionType.UPDATE_TASK_START;
}

interface UpdateTaskSuccessAction {
  type: ActionType.UPDATE_TASK_SUCCESS;
  payload: Task[];
}

interface UpdateTaskErrorAction {
  type: ActionType.UPDATE_TASK_ERROR;
  payload: string;
}

interface GetTasksStartAction {
  type: ActionType.GET_TASKS_START;
}

interface GetTasksSuccessAction {
  type: ActionType.GET_TASKS_SUCCESS;
  payload: Task[];
}

interface GetTasksErrorAction {
  type: ActionType.GET_TASKS_ERROR;
  payload: string;
}

interface ResetTasksAction {
  type: ActionType.RESET_TASKS;
}

export type TasksAction =
  | DeleteTaskStartAction
  | DeleteTaskSuccessAction
  | DeleteTaskErrorAction
  | UpdateTaskStartAction
  | UpdateTaskSuccessAction
  | UpdateTaskErrorAction
  | CreateTaskStartAction
  | CreateTaskSuccessAction
  | CreateTaskErrorAction
  | GetTasksStartAction
  | GetTasksSuccessAction
  | GetTasksErrorAction
  | ResetTasksAction;
