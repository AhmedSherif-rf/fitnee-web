import "./styles.scss";
import { db } from "../../../firebase";
import { LuSend } from "react-icons/lu";
import React, { useEffect, useRef, useState } from "react";
import InputField from "../../../Shared/InputField";
import PageHeading from "../../../Shared/Headings/PageHeading";
import { onValue, ref, orderByChild } from "firebase/database";
import { Container, Row, Col, Card, CardFooter } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import Message from "../../../Shared/AdminShared/Components/Message";

const Community = (props) => {
  const [members, setMembers] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(false);
  const [groupMembers, setGroupMembers] = useState([]);
  const [groupMessages, setGroupMessages] = useState([]);

  const messageEl = useRef(null);

  useEffect(() => {
    const query = ref(db, "GroupMessages", orderByChild("messageTime"));
    const unsubscribe = onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((item, index) =>
          setGroupMessages([...groupMessages, item])
        );
      }
    });
    return () => unsubscribe();
  },);

  useEffect(() => {
    if (messageEl.current) {
      messageEl.current.scrollIntoView();
    }
  }, [groupMessages]);

  useEffect(() => {
    const query = ref(db, "Groups");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const groupKeys = Object.keys(data);
        const groupId = groupKeys[0];
        setGroupMembers(data[groupId].usersIds);
      }
    });
  }, []);

  useEffect(() => {
    const query = ref(db, "Users");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const usersArray = Object.values(data);
        const members = usersArray.map((user) => user);
        setMembers(members);
      }
    });
  }, []);

  const getMemberData = (memberId) => {
    const member = members.find((member) => {
      return member.userId === memberId;
    });

    return member;
  };

  return (
    <React.Fragment>
      <Container className="adminDashBoardScrolling" fluid>
        <Row>
          <Col md={12} className="text-center">
            <PageHeading
              headingText="Community"
              categoryText=""
              className="text-start"
            />
          </Col>
          <Col md={3} className="tableBodyWrapperPagination mb-3 ms-2 me-3">
            <h5 className="mb-0 fw-bold text-start d-md-block d-none text-black-custom">
              Members
            </h5>
            <h6 className="mb-0 fw-bold text-start d-md-none d-block text-black-custom">
              Members
            </h6>
            <Card className={`onlyBorderRadius chatCardFooterHeight p-3`}>
              {groupMembers.map((groupMember, index) => {
                const member = getMemberData(groupMember);
                return (
                  <Col
                    md={12}
                    key={index}
                    onMouseOver={() => setHoveredIndex(index)}
                    onMouseOut={() => setHoveredIndex(false)}
                    className={`d-flex mb-1 align-items-center py-1 bgCommunity rounded-4 ps-1`}
                  >
                    <div
                      className={`bgProperties rounded-circle  ${
                        hoveredIndex === index ? "cardHovered" : ""
                      }`}
                      style={{
                        border: "3px solid White",
                        backgroundImage:
                          member?.avatar === null
                            ? `url(${Images.USER_DUMMY_IMG})`
                            : `url(${member?.avatar})`,
                        width: "45px",
                        height: "45px",
                      }}
                    ></div>
                    <small className="ms-3 fw-bold">{member?.name}</small>
                  </Col>
                );
              })}
            </Card>
          </Col>
          <Col md={8} className="position-relative me-3">
            <h5 className="mb-0 fw-bold text-start  d-md-block d-none text-black-custom">
              Chat
            </h5>
            <h6 className="mb-0 fw-bold text-start d-md-none d-block text-black-custom">
              Chat
            </h6>
            <Card className="p-2 chatCardFooterHeight onlyBorderRadius">
              {groupMessages.map((messages, index) => {
                return Object.values(messages).map((message, index) => {
                  const member = getMemberData(message.messageFrom);
                  return (
                    <Col md={12} className="text-start" key={index}>
                      <Message member={member} message={message} />
                    </Col>
                  );
                });
              })}
              <div className="" ref={messageEl}></div>
            </Card>
            <CardFooter className="chatCardFooter border-0 bg-transparent">
              <div className="position-absolute chatButton ">
                <LuSend className="fs-3 textParrotGreen" />
              </div>
              <InputField
                type="text"
                name="AdminInputChat"
                placeholder="Start Typing"
              />
            </CardFooter>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Community;
