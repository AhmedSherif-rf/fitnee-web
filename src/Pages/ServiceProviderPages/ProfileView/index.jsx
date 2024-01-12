import { Container, Row, Card, Col } from "reactstrap";
import ProfileViewWrapper from "../../../Shared/ProfileViewWrapper";

const ProfileView = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="BorderRadius contentCard px-md-5 px-2 pb-4">
            <ProfileViewWrapper />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileView;
