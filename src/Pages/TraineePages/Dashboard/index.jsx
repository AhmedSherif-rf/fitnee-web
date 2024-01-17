import "./style.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import InfoModal from "../../../Shared/InfoModal";
import InputField from "../../../Shared/InputField";
import React, { useCallback, useState } from "react";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import { LineChart } from "../../../Shared/Chart/LineChart";
import OutlineBtn from "../../../Shared/Buttons/OutlineBtn";
import PageHeading from "../../../Shared/Headings/PageHeading";
import ProfileProgressBar from "../../../Shared/ProfileProgressBar";
import { Row, Col, Container, Card, CardBody, Label } from "reactstrap";
import ProfileInformationCard from "../../../Shared/ProfileInformationCard";
import ProgressHistoryWrapper from "../../../Shared/ProgressHistoryWrapper";
import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";

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
  const { user } = useSelector((state) => state.user);
  const [showHistory, setShowHistory] = useState(true);
  const [showAddProgressModal, setSowAddProgressModal] = useState(false);

  const { t, i18n } = useTranslation("");
  const toggleHistory = useCallback(() => {
    setShowHistory(!showHistory);
  }, [showHistory]);

  const navigate = useNavigate();

  const handleCurrentTrainerClick = useCallback(() => {
    navigate("/trainee/trainerList");
  }, [navigate]);

  const handleCurrentNutritionistClick = useCallback(() => {
    navigate("/trainee/nutritionistList");
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

  const users = [
    {
      currentDate: "26/ Dec /2023",
      Weight: "50 kg",
      SMM: "30 kg",
      BFM: "30 kg",
      Proteins: "30 g / kg",
    },
  ];

  const columns = [
    { label: "Date", dataKey: "currentDate" },
    { label: "Weight", dataKey: "Weight", align: "center" },
    { label: "SMM", dataKey: "SMM", align: "center" },
    { label: "BFM", dataKey: "BFM", align: "center" },
    { label: "Proteins", dataKey: "Proteins", align: "center" },
  ];

  return (
    <Container fluid>
      <Row className={`${i18n.dir()}`}>
        <Card className="px-3 contentCard bg-transparent">
          <Row>
            <Col lg={3} md={4} className="mb-2">
              <div className="mb-2">
                <ProfileInformationCard providerProfile={user} />
              </div>
              <Row className="my-3">
                <Col md={12}>
                  <FillBtn
                    className="w-100 mb-2 py-2"
                    text={t("traineeDashboard.myCurrentTrainerText")}
                    handleOnClick={handleCurrentTrainerClick}
                  />
                  <FillBtn
                    className="w-100 mb-2 py-2"
                    text={t("traineeDashboard.myCurrentNutritionistText")}
                    handleOnClick={handleCurrentNutritionistClick}
                  />
                  <FillBtn
                    className="w-100 mb-2 py-2"
                    text={t("traineeDashboard.mySubscriptionHistoryText")}
                    handleOnClick={handleSubscriptionHistoryClick}
                  />
                  <FillBtn
                    className="w-100 mb-2 py-2"
                    text={t("traineeDashboard.allServiceProvidersText")}
                    handleOnClick={handleAllServiceProviderClick}
                  />
                  <FillBtn
                    handleOnClick={handlePaymentClick}
                    className="w-100 mb-2 py-2"
                    text={t("traineeDashboard.myWalletText")}
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
                        <PageHeading
                          headingText={t("traineeDashboard.myProgressText")}
                          categoryText=""
                        />
                        <div className="">
                          <FillBtn
                            text={t("traineeDashboard.myWalletText")}
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

                          <div className="mb-3">
                            <ListingTable data={users} columns={columns} />
                          </div>
                          <div className="text-center">
                            <FillBtn
                              text={t("traineeDashboard.viewHistoryText")}
                              handleOnClick={toggleHistory}
                            />
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
                              text={t("traineeDashboard.viewGraphText")}
                              handleOnClick={toggleHistory}
                            />
                          </div>
                        </div>
                      )}

                      <InfoModal
                        heading={t("traineeDashboard.addYourProgressText")}
                        size={"md"}
                        TOneClassName={"fw-bold mb-4 fs-5"}
                        isOpen={showAddProgressModal}
                        onClose={useCallback(() => {
                          setSowAddProgressModal(false);
                        }, [])}
                        ModalText1={
                          <>
                            <Label className="mb-0 fw-normal small">
                              {t("traineeDashboard.weightText")}
                            </Label>
                            <InputField
                              className="mb-2"
                              type="text"
                              placeholder="Weight"
                            />

                            <Label className="mb-0 fw-normal small">
                              {t("traineeDashboard.skeletalMuscleMassText")}
                            </Label>
                            <InputField
                              className="mb-2"
                              type="text"
                              placeholder="Kg"
                            />

                            <Label className="mb-0 fw-normal small">
                              {t("traineeDashboard.bodyFatMassText")}
                            </Label>
                            <InputField
                              className="mb-2"
                              type="text"
                              placeholder="Kg"
                            />

                            <Label className="mb-0 fw-normal small">
                              {t("traineeDashboard.ProteinText")}
                            </Label>
                            <InputField
                              className="mb-2"
                              type="text"
                              placeholder="g / kg"
                            />
                          </>
                        }
                        ButtonOne={
                          <FillBtn
                            className="w-100"
                            text={t("traineeDashboard.saveText")}
                          />
                        }
                        ButtonTwo={
                          <OutlineBtn
                            className="w-100"
                            text={t("traineeDashboard.cancelText")}
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
        </Card>
      </Row>
    </Container>
  );
};

export default Dashboard;
