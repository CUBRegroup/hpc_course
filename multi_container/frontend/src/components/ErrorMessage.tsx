import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  width: 100%;
  padding: 8px 16px;
  background-color: #f7c5c0;
  color: #a51809;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const ErrorHeading = styled.h1`
  font-size: 18px;
  margin: 10px 0;
`;

const ErrorList = styled.ul`
  padding-left: 20px;
`;

type Props = {
  message: string | string[];
};

const ErrorMessage: React.FC<Props> = (props) => {
  const { message } = props;

  // const renderMessageArray = (errors: any[]) => {
  //   const constraints = errors
  //     .map((error: any) =>
  //       error.constraints ? Object.values(error.constraints) : error
  //     )
  //     .flat()
  //     .map((constraint: any, idx: any) => <li key={idx}>{constraint}</li>);
  //
  //   return <ErrorList>{constraints}</ErrorList>;
  // };

  const renderError = (error: string | string[]) => {
    let result;

    if (typeof error === "string") {
      result = <li key={"error"}>{error}</li>;
    } else {
      result = error.map((error, i) => <li key={i}>{error}</li>);
    }

    return <ErrorList>{result}</ErrorList>;
  };

  return (
    <ErrorContainer>
      <ErrorHeading>Oops!</ErrorHeading>
      {Array.isArray(message) ? renderError(message) : <p>{message}</p>}
    </ErrorContainer>
  );
};

export default ErrorMessage;
