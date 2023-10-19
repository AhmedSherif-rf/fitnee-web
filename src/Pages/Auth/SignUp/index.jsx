import React from "react";
import { Container } from "reactstrap";
import SignUpForm from "../../../Shared/SignUp/SignUpForm";

const SignUp = (props) => {
  return (
    <Container fluid className="vh-100">
      <SignUpForm />
    </Container>
  );
};

export default SignUp;
