import React, { useState } from "react";
import { TextField, FormControl, Button } from "@material-ui/core";
import styled from "styled-components";
import ErrorMessage from "../../components/ErrorMessage";
import { useHistory } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  max-width: 480px;
  width: 100%;
  background-color: #edf4ff;
  padding: 30px;
  border-radius: 5px;
`;

type Props = {};

const CreateTaskPage: React.FC<Props> = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();
  const { loading, error } = useTypedSelector((state) => state.tasks);
  const { createTask } = useActions();

  const handleSubmitTask = async () => {
    createTask({ title, description });
    history.push("/tasks");
  };

  return (
    <FormWrapper>
      <FormContainer>
        <h1>Create a new task</h1>
        <p>Provide information about the task you wish to complete.</p>

        {error && <ErrorMessage message={error} />}
        {loading && <h2 style={{ textAlign: "center" }}>Sending...</h2>}

        <FormControl fullWidth>
          <TextField
            label="Title"
            placeholder="Title"
            margin="normal"
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Description"
            placeholder="Description"
            multiline
            rows="8"
            margin="normal"
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <Button
          style={{ marginTop: "10px" }}
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmitTask}
        >
          CREATE TASK
        </Button>
      </FormContainer>
    </FormWrapper>
  );
};

export default CreateTaskPage;
