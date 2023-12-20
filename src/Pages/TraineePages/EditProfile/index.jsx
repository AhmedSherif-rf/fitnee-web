import { Container, Row, Card } from "reactstrap";
import SignUpForm from "../../../Shared/SignUp/SignUpForm";

const EditProfile = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Card>
          <SignUpForm />
        </Card>
      </Row>
    </Container>
  );
};

export default EditProfile;
