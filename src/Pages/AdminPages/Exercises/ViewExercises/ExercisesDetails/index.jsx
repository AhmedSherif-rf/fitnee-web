import React, { useEffect, useState } from "react";
import PageHeading from "../../../../../Shared/Headings/PageHeading";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ADMIN_MEAL_URL } from "../../../../../utils/constants";
import { getCategoryClassificationDetails } from "../../../../../Redux/features/Admin/Meals/mealsApi";
import Images from "../../../../../HelperMethods/Constants/ImgConstants";

const ExerciseDetails = () => {
  const dispatch = useDispatch();
  const [exerciseDetails, setExerciseDetails] = useState([]);

  const { id } = useParams();
  // // ------------- functions ------------

  function fetchExerciseDetails() {
    const data = {
      apiEndpoint: ADMIN_MEAL_URL + `${id}/`,
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
                <div
                  className="bgProperties rounded-circle me-2 mx-5 my-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundImage:
                      exerciseDetails?.meal_pic === null
                        ? `url(${Images.USER_DUMMY_IMG})`
                        : `url(${exerciseDetails?.meal_pic})`,
                  }}
                ></div>
                <h3>
                  English Name:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.en_name}
                  </span>
                </h3>
                <h3>
                  Arabic Name:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.ar_name}
                  </span>
                </h3>
                <h3>
                  Description:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.description}
                  </span>
                </h3>

                <h3>
                  Methods:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.methods?.join(", ")}
                  </span>
                </h3>
                <h3>
                  Ingredients:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.ingredients?.join(", ")}
                  </span>
                </h3>
                <h3>
                  Calorie Range:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.calorie_range}
                  </span>
                </h3>
                <h3>
                  Fats:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.fats}
                  </span>
                </h3>
                <h3>
                  Calorie Recipe:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.calorie_recipe}
                  </span>
                </h3>
                <h3>
                  Carbohydrate:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.carbohydrate}
                  </span>
                </h3>
                <h3>
                  Protein:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.protein}
                  </span>
                </h3>
                <h3>
                  Status:
                  <span style={{ fontSize: "18px", opacity: 0.7 }}>
                    {" "}
                    {exerciseDetails?.active ? "Active" : "Inactive"}
                  </span>
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
