import "./styles.scss";
import { db } from "../../../firebase";
import { Container, Row, Col } from "reactstrap";
import React, { useEffect, useState } from "react";
import PageHeading from "../../../Shared/Headings/PageHeading";
import { onValue, ref, orderByChild } from "firebase/database";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import Message from "../../../Shared/AdminShared/Components/Message";

const Community = (props) => {
  const [members, setMembers] = useState([]);
  const [groupMembers, setGroupMembers] = useState([]);
  const [groupMessages, setGroupMessages] = useState([]);

  useEffect(() => {
    const query = ref(db, "GroupMessages", orderByChild("messageTime"));
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((item, index) =>
          setGroupMessages([...groupMessages, item])
        );
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <Container className="adminDashBoardScrolling">
        <Row>
          <Col md={5}>
            <PageHeading
              headingText="Members"
              categoryText=""
              className="text-start"
            />
            <Row className="gap-2">
              {groupMembers.map((groupMember, index) => {
                const member = getMemberData(groupMember);
                const teamMemberCssClass =
                  (index + 1) % 2 === 0
                    ? (index + 1) % 4 === 0
                      ? "teamMemberWrapperFirst"
                      : "teamMemberWrapperFourth"
                    : (index + 1) % 3 === 0
                    ? "teamMemberWrapperSecond"
                    : "teamMemberWrapperThird";

                return (
                  <Col
                    md={5}
                    sm={12}
                    key={index}
                    className={`d-flex gap-3 align-items-center py-1 ${teamMemberCssClass}`}
                  >
                    <div
                      className="bgProperties rounded-circle"
                      style={{
                        backgroundImage:
                          member?.avatar === null
                            ? `url(${Images.USER_DUMMY_IMG})`
                            : `url(${member?.avatar})`,
                        width: "40px",
                        height: "40px",
                      }}
                    ></div>
                    <small>{member?.name}</small>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col md={7}>
            <PageHeading
              headingText="Community Chat"
              categoryText=""
              className="text-start"
            />
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
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Community;
