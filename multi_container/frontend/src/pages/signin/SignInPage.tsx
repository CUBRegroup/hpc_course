import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import { Redirect, useHistory } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./SignInPage.module.scss";
import ErrorMessage from "../../components/ErrorMessage";

const Heading = styled.h1`
  margin-top: 0;
`;

const FormContainer = styled.div`
  max-width: 480px;
  width: 100%;
  background-color: #edf4ff;
  padding: 30px;
  border-radius: 5px;
`;

const FormField = styled(TextField)`
  width: 100%;
`;

type Props = {};

const SignInPage: React.FC<Props> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { loading, error, accessToken } = useTypedSelector(
    (state) => state.auth
  );

  const { signinUser } = useActions();

  const submit = async () => {
    signinUser({ username, password });
  };

  const goToSignUp = () => {
    history.push("/signup");
  };

  return (
    <div className={classes["fullscreen-wrapper"]}>
      <FormContainer>
        <Heading>Hello!</Heading>
        <p>Fill in your username and password to sign in.</p>
        {accessToken && <Redirect to="/tasks" />}
        {error && <ErrorMessage message={error} />}
        {loading && <h2 style={{ textAlign: "center" }}>Sending...</h2>}
        {!error && !loading && (
          <>
            <div>
              <FormField
                id="outlined-name"
                label="Username"
                margin="dense"
                variant="outlined"
                onChange={(e: any) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <FormField
                id="outlined-name"
                label="Password"
                margin="dense"
                variant="outlined"
                type="password"
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <hr />
            <div>
              <Button
                style={{ marginBottom: "10px" }}
                fullWidth
                variant="contained"
                color="primary"
                onClick={submit}
              >
                SIGN IN
              </Button>

              <Button fullWidth onClick={goToSignUp}>
                Don't have an account? Sign up now!
              </Button>
            </div>
          </>
        )}
      </FormContainer>
    </div>
  );
};

export default SignInPage;
