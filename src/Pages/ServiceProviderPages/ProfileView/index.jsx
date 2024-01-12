import { Container, Row, Card, Col } from "reactstrap";
import ProfileViewWrapper from "../../../Shared/ProfileViewWrapper";

const ProfileView = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="BorderRadius contentCard px-3">
         
            <ProfileViewWrapper/>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileView;
