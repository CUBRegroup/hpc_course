import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";

const CardContainer = styled.div`
  margin-bottom: 20px;
`;

const CardTitle = styled.h1`
  margin: 8px 0;
  font-size: 22px;
`;

type Props = {
  id: string;
  title: string;
  status: string;
  description: string;
};

const Task: React.FC<Props> = (props) => {
  const { deleteTask, updateTask } = useActions();

  const deleteTaskHandler = () => {
    deleteTask(props.id);
  };

  const handleStatusChange = (e: any) => {
    updateTask(props.id, e.target.value);
  };

  return (
    <CardContainer>
      <Card>
        <CardContent>
          <CardTitle>{props.title}</CardTitle>
          {props.description}
        </CardContent>
        <CardActions style={{ padding: "14px" }} disableSpacing>
          <Grid
            justify="space-between" // Add it here :)
            container
          >
            <Grid item>
              <FormControl style={{ width: "140px" }}>
                <Select
                  value={props.status}
                  onChange={handleStatusChange}
                  displayEmpty
                >
                  <MenuItem value={"OPEN"}>Open</MenuItem>
                  <MenuItem value={"IN_PROGRESS"}>In Progress</MenuItem>
                  <MenuItem value={"DONE"}>Done</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <IconButton onClick={deleteTaskHandler}>
                <DeleteIcon color="error" />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </CardContainer>
  );
};

export default Task;
