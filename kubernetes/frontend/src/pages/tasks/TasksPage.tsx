import React, { useEffect } from "react";
import { Fab, IconButton } from "@material-ui/core";
import { Redirect, useHistory } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import AddIcon from "@material-ui/icons/Add";
import SignOutIcon from "@material-ui/icons/ExitToApp";

import styled from "styled-components";
import Task from "../../components/Task";
// import TasksFilters from "../../components/TasksFilters";
import ErrorMessage from "../../components/ErrorMessage";

const TasksWrapper = styled.div`
  width: 100%;
  max-width: 860px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;

const TasksHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #757c87;
`;

const Title = styled.h1`
  width: 100%;
  color: #edf4ff;
`;

const CreateButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TasksContainer = styled.div`
  padding-top: 20px;
`;

const EmptyTasksPlaceholder = styled.p`
  color: #edf4ff;
  text-align: center;
  font-size: 22px;
`;

const SignOutIconContainer = styled.div`
  margin-left: 10px;

  .signOutIcon {
    fill: #edf4ff;
  }
`;

type Props = {};

const TasksPage: React.FC<Props> = (props) => {
  const history = useHistory();
  const { loading, error, data } = useTypedSelector((state) => state.tasks);
  const { accessToken } = useTypedSelector((state) => state.auth);
  const { getTasks, signOut, resetTasks } = useActions();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  // useEffect(() => {
  //   return () => {
  //
  //   };
  // }, []);

  const handleSignOut = () => {
    signOut();
    resetTasks();
    history.push("/signin");
  };

  const renderTasks = () => {
    if (!data || data.length === 0) {
      return (
        <EmptyTasksPlaceholder>
          No tasks available. Create one?
        </EmptyTasksPlaceholder>
      );
    }

    return data.map((task) => (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
      />
    ));
  };

  return (
    <TasksWrapper>
      {!accessToken && <Redirect to="/signin" />}
      <TasksHeader>
        <Title>Get things done.</Title>

        <CreateButtonContainer>
          <Fab variant="extended" onClick={() => history.push("/tasks/create")}>
            <AddIcon />
            Create Task
          </Fab>

          <SignOutIconContainer>
            <IconButton onClick={handleSignOut}>
              <SignOutIcon className="signOutIcon" />
            </IconButton>
          </SignOutIconContainer>
        </CreateButtonContainer>
      </TasksHeader>

      {/*<TasksFilters />*/}

      {/*{!error && !loading && !data && <Redirect to="/signin" />}*/}

      {error && <ErrorMessage message={error} />}
      {loading && <h2 style={{ textAlign: "center" }}>Sending...</h2>}
      {!error && !loading && <TasksContainer>{renderTasks()}</TasksContainer>}
    </TasksWrapper>
  );
};

export default TasksPage;
