import { Container, Row } from "reactstrap";
import SignUpForm  from "../../../Shared/SignUp/SignUpForm";

const EditProfile = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <SignUpForm />
      </Row>
    </Container>
  );
};

export default EditProfile;
