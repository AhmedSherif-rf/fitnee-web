import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import React, { useState, useEffect } from "react";
import LoadingScreen from "../../../HelperMethods/LoadingScreen";
import { getMyTrainees } from "../../../Redux/features/User/userApi";
import {
  ADMIN_TRAINEE_PROFILE_URL,
  COACH_TRAINEE_PROFILE_URL,
  MEMBERSHIP_URL,
  TRAINEE_EXERCISES_URL,
  TRAINEE_MEALS_URL,
} from "../../../utils/constants";
import { Card, CardBody, Col, Container, Row, CardFooter } from "reactstrap";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import "./styles.css";
import { useParams } from "react-router-dom";
import Carousel from "../../../Shared/Carousel";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateObj = [
  {
    id: 1,
    date: new Date().toISOString().split("T")[0],
    dateNumber: new Date().toISOString().split("T")[0]?.split("-")[2],
    month: months[new Date().getMonth()],
    day: days[new Date().getDay()],
  },
  {
    id: 2,
    date: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split("T")[0],
    dateNumber: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .split("T")[0]
      ?.split("-")[2],
    month:
      months[new Date(new Date().setDate(new Date().getDate() + 1)).getMonth()],
    day: days[new Date(new Date().setDate(new Date().getDate() + 1)).getDay()],
  },
  {
    id: 3,
    date: new Date(new Date().setDate(new Date().getDate() + 2))
      .toISOString()
      .split("T")[0],
    dateNumber: new Date(new Date().setDate(new Date().getDate() + 2))
      .toISOString()
      .split("T")[0]
      ?.split("-")[2],
    month:
      months[new Date(new Date().setDate(new Date().getDate() + 2)).getMonth()],
    day: days[new Date(new Date().setDate(new Date().getDate() + 2)).getDay()],
  },
  {
    id: 4,
    date: new Date(new Date().setDate(new Date().getDate() + 3))
      .toISOString()
      .split("T")[0],
    dateNumber: new Date(new Date().setDate(new Date().getDate() + 3))
      .toISOString()
      .split("T")[0]
      ?.split("-")[2],
    month:
      months[new Date(new Date().setDate(new Date().getDate() + 3)).getMonth()],
    day: days[new Date(new Date().setDate(new Date().getDate() + 3)).getDay()],
  },
  {
    id: 5,
    date: new Date(new Date().setDate(new Date().getDate() + 4))
      .toISOString()
      .split("T")[0],
    dateNumber: new Date(new Date().setDate(new Date().getDate() + 4))
      .toISOString()
      .split("T")[0]
      ?.split("-")[2],
    month:
      months[new Date(new Date().setDate(new Date().getDate() + 4)).getMonth()],
    day: days[new Date(new Date().setDate(new Date().getDate() + 4)).getDay()],
  },
  {
    id: 6,
    date: new Date(new Date().setDate(new Date().getDate() + 5))
      .toISOString()
      .split("T")[0],
    dateNumber: new Date(new Date().setDate(new Date().getDate() + 5))
      .toISOString()
      .split("T")[0]
      ?.split("-")[2],
    month:
      months[new Date(new Date().setDate(new Date().getDate() + 5)).getMonth()],
    day: days[new Date(new Date().setDate(new Date().getDate() + 5)).getDay()],
  },
];

const Index = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("");
  const { loading, user } = useSelector((state) => state.user);

  const { id } = useParams();

  const [traineesData, setTraineesData] = useState([]);
  const [meals, setMeals] = useState([]);
  const [exercises, setExercises] = useState([]);

  const [dayFilter, setDayFilter] = useState("all");

  useEffect(() => {
    fetchMealsData();
    fetchTraineesData();
    fetchExercisesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    fetchMealsData(dayFilter === "all" ? new Date() : new Date(dayFilter));
    fetchExercisesData(dayFilter === "all" ? new Date() : new Date(dayFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dayFilter]);

  const fetchMealsData = (date = new Date()) => {
    const data = {
      apiEndpoint: `${TRAINEE_MEALS_URL.replace(
        "userDate",
        date.toISOString().split("T")[0]
      ).replace("userId", id)}`,
    };

    dispatch(getMyTrainees(data)).then((res) => {
      if (res.type === "getMyTrainees/fulfilled") {
        setMeals(res.payload.data);
      }
    });
  };

  const fetchExercisesData = (date = new Date()) => {
    const data = {
      apiEndpoint: `${TRAINEE_EXERCISES_URL.replace(
        "userDate",
        date.toISOString().split("T")[0]
      ).replace("userId", id)}`,
    };

    dispatch(getMyTrainees(data)).then((res) => {
      if (res.type === "getMyTrainees/fulfilled") {
        setExercises(res.payload.data);
      }
    });
  };

  const fetchTraineesData = () => {
    const data = {
      apiEndpoint: `${COACH_TRAINEE_PROFILE_URL.replace("userId", id)}`,
    };

    dispatch(getMyTrainees(data)).then((res) => {
      if (res.type === "getMyTrainees/fulfilled") {
        setTraineesData(res.payload.data);
      }
    });
  };

  return (
    <Container fluid>
      {loading === "loading" && <LoadingScreen />}
      <Row>
        <Col md={12}>
          <Card className="BorderRadius contentCard">
            <CardBody className={`${i18n.dir()} px-4`}>
              <Row>
                <Col md={12}>
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                    <div className="d-flex align-items-start flex-row gap-3 w-50">
                      <img
                        style={{
                          boxShadow: "0 0 10px #ccc",
                          width: "180px",
                          height: "180px",
                        }}
                        className="rounded"
                        src={
                          traineesData?.profile_pic
                            ? traineesData?.profile_pic
                            : Images.USER_DUMMY_IMG
                        }
                        alt=""
                      />
                      <div className="pt-2">
                        <p className="fw-bold mb-2">
                          {traineesData?.first_name} {traineesData?.last_name}
                        </p>
                        <p className="fw-bold mb-2">{traineesData?.email}</p>
                        <p className="fw-bold mb-2">
                          {t("trainer.weight")}: {traineesData?.weight}kg
                        </p>
                        <p className="fw-bold mb-2">
                          {t("trainer.height")}: {traineesData?.height}cm
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-column gap-2 w-25 align-items-end">
                      {/* <FillBtn className="w-75" text={t("trainer.chat")} /> */}
                      <FillBtn
                        className="w-75 bg-success text-white"
                        text={t("trainer.active")}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center text-black-custom justify-content-center  d-md-flex d-none border-top text-black-custom py-2 my-2">
                <div className="bg-light container p-3">
                  <div className="row">
                    <p className="col">
                      <span className="fw-bold">{t("trainer.name")} : </span>
                      {traineesData?.first_name} {traineesData?.last_name}
                    </p>
                    <p className="col">
                      <span className="fw-bold">
                        {t("trainer.fivMeals")} :{" "}
                      </span>
                      {traineesData?.meal_likes?.map((i, ind) => {
                        return `${
                          i18n.language === "en" ? i.en_name : i.ar_name
                        } ${
                          ind < traineesData?.meal_likes?.length - 1 ? "," : ""
                        }`;
                      })}
                    </p>
                    <p className="col">
                      <span className="fw-bold">
                        {t("trainer.trainingPlace")} :{" "}
                      </span>
                      {traineesData?.training_place || "-"}
                    </p>
                  </div>
                  <div className="row">
                    <p className="col">
                      <span className="fw-bold">{t("trainer.goal")} : </span>
                      {traineesData?.training_goal || "-"}
                    </p>
                    <p className="col">
                      <span className="fw-bold">
                        {t("trainer.medCondition")} :{" "}
                      </span>
                      {traineesData?.have_diseases ? "نعم" : "لا يوجد"}
                    </p>
                    <p className="col"></p>
                  </div>
                </div>
              </Row>
              <Row>
                <div className="d-flex flex-row gap-3 justify-content-center">
                  <div
                    onClick={() => setDayFilter("all")}
                    style={{
                      width: "120px",
                      height: "120px",
                      cursor: "pointer",
                    }}
                    className={`${
                      dayFilter === "all" ? "active" : "bg-soft-gray"
                    } d-flex justify-content-center align-items-center fw-bold rounded`}
                  >
                    {t("trainer.allWeek")}
                  </div>
                  {dateObj.map((day) => (
                    <div
                      onClick={() => setDayFilter(day.date)}
                      key={day}
                      style={{
                        width: "120px",
                        height: "120px",
                        cursor: "pointer",
                      }}
                      className={`${
                        dayFilter === day.date ? "active" : "bg-soft-gray"
                      } d-flex flex-column justify-content-center align-items-center rounded`}
                    >
                      <p className="fw-bold m-0">{day.dateNumber}</p>
                      <p className="fw-bold m-0">{day.month}</p>
                      <p className="fw-bold m-0">{day.day}</p>
                    </div>
                  ))}
                </div>
                <div className="w-100">
                  <h1>{t("landing.exerciseText")}</h1>
                  <Carousel
                    items={meals.map((meal) => {
                      return (
                        <CarouselCard
                          name={
                            i18n.language === "en"
                              ? meal.meal?.en_name
                              : meal.meal?.ar_name
                          }
                          img={meal.meal.meal_pic}
                          isDone={meal.ate}
                        />
                      );
                    })}
                  />
                </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;

const CarouselCard = ({ img, name, isDone }) => {
  return (
    <div style={{ position: "relative" }}>
      <p
        className="rounded"
        style={{
          backgroundColor: isDone ? "#65E44B" : "#E4624B",
          padding: "2px 25px",
          left: "10px",
          top: "10px",
          position: "absolute",
        }}
      >
        {isDone ? "تم" : "لم يتم"}
      </p>
      <img
        alt="meal"
        title={name}
        src={img}
        // {
        //   "https://www.google.com/search?sca_esv=e2ae8c4310a8b420&sxsrf=ADLYWIKUxirUrYFroe-37Ch5fLJZMwcUBQ:1737302141739&q=video&udm=7&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWwAFG7ranuZ26H8lR7pf_8AzBs6lnFFuPH6eU3OV27QKh6ftn9lc4yAcaBgSvqjbSCyeaApdzCHMvL4n82P-FwUG6xXTIl3AXBdTeyTsLpCulLlT-wwbW1VfYYLjNrqyC3Vy00mrhhTW85z0vcKkl-z7UtMxfYgFfPDrK7JW_z0ln1Etn&sa=X&ved=2ahUKEwiClprokoKLAxUkUKQEHYSsBTkQtKgLegQIFhAB&biw=1360&bih=607&dpr=1#fpstate=ive&ip=1&vld=cid:383e444d,vid:Qh8QwVYOSVU,st:0"
        // }
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style={{ width: 100 + "%", height: "300px" }}
      ></img>
      <p>{name}</p>
    </div>
  );
};
