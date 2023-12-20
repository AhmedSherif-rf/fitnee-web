import React from "react";
import { Container, Card } from "reactstrap";
import SignUpForm from "../../../Shared/SignUp/SignUpForm";

const SignUp = (props) => {
  return (
    <Container fluid>
      <Card className="BorderRadius">
      <SignUpForm />
      </Card>
    </Container>
  );
};

export default SignUp;
