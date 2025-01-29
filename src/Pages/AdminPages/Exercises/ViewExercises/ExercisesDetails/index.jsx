import React, { useEffect, useState } from "react";
import PageHeading from "../../../../../Shared/Headings/PageHeading";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  ADMIN_EXERCISES_DETAILS_URL,
  ADMIN_MEAL_URL,
} from "../../../../../utils/constants";
import { getCategoryClassificationDetails } from "../../../../../Redux/features/Admin/Meals/mealsApi";
import Images from "../../../../../HelperMethods/Constants/ImgConstants";
import i18next from "i18next";

const ExerciseDetails = () => {
  const dispatch = useDispatch();
  const [exerciseDetails, setExerciseDetails] = useState([]);

  const { id } = useParams();
  // // ------------- functions ------------

  function fetchExerciseDetails() {
    const data = {
      apiEndpoint: ADMIN_EXERCISES_DETAILS_URL + `${id}/`,
    };

    dispatch(getCategoryClassificationDetails(data)).then((res) => {
      if (res.type === "getCategoryClassificationDetails/fulfilled") {
        setExerciseDetails(res.payload.data);
      }
    });
  }

  // ------------ side effects -----------
  useEffect(() => {
    fetchExerciseDetails();
  }, [dispatch]);

  return (
    <React.Fragment>
      <Container className="adminDashBoardScrolling" fluid>
        <Row>
          <Col md={12}>
            <PageHeading
              headingText="Exercise Details"
              categoryText=""
              className="text-start"
            />
            <Col
              md={12}
              className="d-flex flex-row justify-content-between align-items-start text-start p-3"
            >
              <div>
                <h3>
                  English Name:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.title}
                  </span>
                </h3>
                <h3>
                  Arabic Name:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.title_ar}
                  </span>
                </h3>
                <h3>
                  Exercise type:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.stretching
                      ? "Stretching"
                      : exerciseDetails?.warm_up === "Yes"
                      ? "Warm up"
                      : "Exercise"}
                  </span>
                </h3>
                <h3>
                  Instructions:
                  <br />
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {!exerciseDetails?.exercise_part?.length
                      ? "No Instructions"
                      : exerciseDetails?.exercise_part?.map((item) => {
                          return (
                            <>
                              <h5>
                                -{" "}
                                {i18next.language === "ar"
                                  ? item?.text_ar
                                  : item?.text}
                              </h5>
                            </>
                          );
                        })}
                  </span>
                </h3>
                <h3>
                  Video:
                  <div>
                    <video
                      width="320"
                      height="240"
                      controls
                      src={exerciseDetails?.exercise_type?.[0]?.file}
                    />
                  </div>
                </h3>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default ExerciseDetails;
