import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import classes from "./SignUpPage.module.scss";
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

const SignUpPage: React.FC<Props> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();
  const { loading, error, success } = useTypedSelector((state) => state.auth);
  const { signupUser } = useActions();

  const submit = async () => {
    signupUser({ username, password });
    // history.push("/signin");
  };

  return (
    <div className={classes["fullscreen-wrapper"]}>
      <FormContainer>
        <Heading>Join us!</Heading>
        <p>Start managing tasks easily.</p>

        {success && <Redirect to="/signin" />}
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
            <p>
              Passwords must contain at least 1 upper case letter, 1 lower case
              letter and one number OR special charracter.
            </p>
            <hr />
            <div>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={submit}
              >
                SIGN UP
              </Button>
            </div>
          </>
        )}
      </FormContainer>
    </div>
  );
};

export default SignUpPage;
