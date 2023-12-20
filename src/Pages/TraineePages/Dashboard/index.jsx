import "./style.scss";
import { useNavigate } from "react-router-dom";
import InfoModal from "../../../Shared/InfoModal";
import InputField from "../../../Shared/InputField";
import React, { useCallback, useState } from "react";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import { LineChart } from "../../../Shared/Chart/LineChart";
import OutlineBtn from "../../../Shared/Buttons/OutlineBtn";
import PageHeading from "../../../Shared/Headings/PageHeading";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ProfileProgressBar from "../../../Shared/ProfileProgressBar";
import { Row, Col, Container, Card, CardBody, Label } from "reactstrap";
import ProfileInformationCard from "../../../Shared/ProfileInformationCard";
import ProgressHistoryWrapper from "../../../Shared/ProgressHistoryWrapper";

export const myProgressGrapghOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Trainee Progress Graph",
    },
  },
  maintainAspectRatio: window.innerWidth > 500,
  redraw: true,
  interaction: {
    intersect: false,
  },
};

const labels = ["1 Nov", "15 Nov", "30 Nov", "15 Dec", "30 Dec"];

export const myProgressGrapghData = {
  labels,
  datasets: [
    {
      label: "Weight",
      borderDash: [5, 5],
      data: [100, 200, 150, 250, 200],
      borderColor: "#67165A",
      backgroundColor: "rgba(103, 22, 90, 0.40)",
      pointStyle: "circle",
      pointRadius: 5,
      pointHoverRadius: 6,
    },
    {
      label: "SMM",
      data: [80, 150, 190, 300, 200],
      borderColor: "#F67109",
      backgroundColor: "rgba(246, 113, 9, 0.40)",
      pointStyle: "circle",
      pointRadius: 5,
      pointHoverRadius: 6,
    },
    {
      label: "BFM",
      data: [105, 100, 200, 300, 100],
      borderColor: "#F6E709",
      backgroundColor: "rgba(246, 231, 9, 0.40)",
      pointStyle: "circle",
      pointRadius: 5,
      pointHoverRadius: 6,
    },
    {
      label: "Proteins",
      data: [105, 170, 245, 198, 200],
      borderColor: "#8EF609",
      backgroundColor: "rgba(142, 246, 9, 0.40)",
      pointStyle: "circle",
      pointRadius: 5,
      pointHoverRadius: 6,
    },
  ],
};

const Dashboard = () => {
  const [showAddProgressModal, setSowAddProgressModal] = useState(false);
  const [showHistory, setShowHistory] = useState(true);

  const toggleHistory = useCallback(() => {
    setShowHistory(!showHistory);
  }, [showHistory]);

  const navigate = useNavigate();

  const handleCurrentTrainerClick = useCallback(() => {
    navigate("/trainee/serviceProviderList");
  }, [navigate]);

  const handleCurrentNutritionistClick = useCallback(() => {
    navigate("/trainee/serviceProviderList");
  }, [navigate]);

  const handleSubscriptionHistoryClick = useCallback(() => {
    navigate("/trainee/subscriptionHistory");
  }, [navigate]);

  const handleAllServiceProviderClick = useCallback(() => {
    navigate("/trainee/allServiceProvider/trainer");
  }, [navigate]);

  const handleAddProgressClick = useCallback(() => {
    setSowAddProgressModal(true);
  }, []);

  const handlePaymentClick = useCallback(() => {
    navigate("/trainee/myWallet");
  }, [navigate]);

  const infoData = [
    {
      infoImg: Images.PROFILE4_IMG,
      infoLogo: Images.SHORTLOGO_IMG,
      infoTitle: "Shane",
      infoRating: 4,
      infoDes: "2 Years",
      Height: "38",
      TraineeEmail: "shane@gmail.com",
    },
  ];

  const HistoryData = [
    {
      TDate: "26.7.2023",
      Weight: "50",
      SMM: "40",
      BFM: "30",
      Proteins: "20",
    },
    {
      TDate: "26.7.2023",
      Weight: "50",
      SMM: "40",
      BFM: "30",
      Proteins: "20",
    },
    {
      TDate: "26.7.2023",
      Weight: "50",
      SMM: "40",
      BFM: "30",
      Proteins: "20",
    },
    {
      TDate: "26.7.2023",
      Weight: "50",
      SMM: "40",
      BFM: "30",
      Proteins: "20",
    },
    {
      TDate: "26.7.2023",
      Weight: "50",
      SMM: "40",
      BFM: "30",
      Proteins: "20",
    },
    {
      TDate: "26.7.2023",
      Weight: "50",
      SMM: "40",
      BFM: "30",
      Proteins: "20",
    },
    {
      TDate: "26.7.2023",
      Weight: "50",
      SMM: "40",
      BFM: "30",
      Proteins: "20",
    },
    {
      TDate: "26.7.2023",
      Weight: "50",
      SMM: "40",
      BFM: "30",
      Proteins: "20",
    },
    {
      TDate: "26.7.2023",
      Weight: "50",
      SMM: "40",
      BFM: "30",
      Proteins: "20",
    },
    {
      TDate: "26.7.2023",
      Weight: "50",
      SMM: "40",
      BFM: "30",
      Proteins: "20",
    },
    {
      TDate: "26.7.2023",
      Weight: "50",
      SMM: "40",
      BFM: "30",
      Proteins: "20",
    },
    {
      TDate: "26.7.2023",
      Weight: "50",
      SMM: "40",
      BFM: "30",
      Proteins: "20",
    },
  ];

  return (
    <Container fluid>
      <Row className="py-2">
        <Col lg={3} md={4} className="mb-2">
          <div className="mb-2">
            {infoData.map((item, index) => {
              return (
                <ProfileInformationCard
                  key={index}
                  infoLogo={item.infoLogo}
                  infoTitle={item.infoTitle}
                  infoRating={item.infoRating}
                  infoImg={item.infoImg}
                  infoDes={item.infoDes}
                  CardHeight={item.Height}
                  TraineeEmail={item.TraineeEmail}
                />
              );
            })}
          </div>
          <Row className="my-3">
            <Col md={12}>
              <FillBtn
                className="w-100 mb-2 py-2"
                text="My Current Trainer"
                handleOnClick={handleCurrentTrainerClick}
              />
              <FillBtn
                className="w-100 mb-2 py-2"
                text="My Current Nutritionist"
                handleOnClick={handleCurrentNutritionistClick}
              />
              <FillBtn
                className="w-100 mb-2 py-2"
                text="My Subscription History"
                handleOnClick={handleSubscriptionHistoryClick}
              />
              <FillBtn
                className="w-100 mb-2 py-2"
                text="All Service Providers"
                handleOnClick={handleAllServiceProviderClick}
              />
              <FillBtn
                handleOnClick={handlePaymentClick}
                className="w-100 mb-2 py-2"
                text="My Wallet"
              />
            </Col>
          </Row>
        </Col>
        <Col lg={9} md={8}>
          <Card className="BorderRadius border-0">
            <CardBody>
              <Row>
                <Col md={12}>
                  <div className="d-flex align-items-center justify-content-between">
                    <PageHeading headingText="My Progress" categoryText="" />
                    <div className="">
                      <FillBtn
                        text="Add"
                        handleOnClick={handleAddProgressClick}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="mb-2">
                  <div className="p-2">
                    <ProfileProgressBar />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} className="mb-2">
                  {showHistory ? (
                    <>
                      <div className="py-2 d-flex justify-content-center chart-container">
                        <LineChart
                          options={myProgressGrapghOptions}
                          data={myProgressGrapghData}
                        />
                      </div>
                      <div className="d-flex justify-content-between text-black-custom">
                        <div className="m-2">
                          <p className="mb-0">26.7.2023</p>
                          <p className="mb-0">
                            <span>Weight:</span>
                            <span>50 kg</span>
                          </p>
                          <p className="mb-0">
                            <span>SMM:</span>
                            <span>30 kg</span>
                          </p>
                          <p className="mb-0">
                            <span>BFM:</span>
                            <span>20 kg</span>
                          </p>
                          <p className="mb-0">
                            <span>Proteins:</span>
                            <span>10 kg</span>
                          </p>
                        </div>
                        <div className="">
                          <FillBtn
                            text="View History"
                            handleOnClick={toggleHistory}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="">
                      <Row
                        className="overflowScroll p-3"
                        style={{ maxHeight: "65vh", overflowY: "auto" }}
                      >
                        {HistoryData.map((item, index) => {
                          return (
                            <Col md={3} className="mb-2" key={index}>
                              <ProgressHistoryWrapper
                                TDate={item.TDate}
                                Weight={item.Weight}
                                SMM={item.SMM}
                                BFM={item.BFM}
                                Proteins={item.Proteins}
                              />
                            </Col>
                          );
                        })}
                      </Row>
                      <div className="text-center pt-3">
                        <FillBtn
                          text="View Graph"
                          handleOnClick={toggleHistory}
                        />
                      </div>
                    </div>
                  )}

                  <InfoModal
                    heading={"Add Your Progress"}
                    size={"md"}
                    TOneClassName={"fw-bold mb-4 fs-5"}
                    isOpen={showAddProgressModal}
                    onClose={useCallback(() => {
                      setSowAddProgressModal(false);
                    }, [])}
                    ModalText1={
                      <>
                        <Label className="mb-0 fw-normal small">Weight</Label>
                        <InputField
                          className="mb-2"
                          type="text"
                          placeholder="Weight"
                        />

                        <Label className="mb-0 fw-normal small">
                          Skeletal Muscle Mass
                        </Label>
                        <InputField
                          className="mb-2"
                          type="text"
                          placeholder="Kg"
                        />

                        <Label className="mb-0 fw-normal small">
                          Body Fat Mass
                        </Label>
                        <InputField
                          className="mb-2"
                          type="text"
                          placeholder="Kg"
                        />

                        <Label className="mb-0 fw-normal small">Protein</Label>
                        <InputField
                          className="mb-2"
                          type="text"
                          placeholder="Kg"
                        />
                      </>
                    }
                    ButtonOne={<FillBtn className="w-100" text={"Save"} />}
                    ButtonTwo={
                      <OutlineBtn
                        className="w-100"
                        text={"Cancel"}
                        handleOnClick={useCallback(() => {
                          setSowAddProgressModal(false);
                        }, [])}
                      />
                    }
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
