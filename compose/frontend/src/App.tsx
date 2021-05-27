import React from "react";
import "./App.css";
import SignInPage from "./pages/signin/SignInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import TasksPage from "./pages/tasks/TasksPage";
import CreateTaskPage from "./pages/create-task/CreateTaskPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignInPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route exact path="/tasks" component={TasksPage} />
      <Route exact path="/tasks/create" component={CreateTaskPage} />
    </Switch>
  );
}

export default App;
