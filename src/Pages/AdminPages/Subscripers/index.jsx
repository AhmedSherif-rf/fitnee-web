import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeading from "../../../Shared/Headings/PageHeading";
import LoadingScreen from "../../../HelperMethods/LoadingScreen";
import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { PACKAGES_URL } from "../../../utils/constants";
import { getPackageDetails } from "../../../Redux/features/Admin/Packages/packagesApi";
import { BsChatText } from "react-icons/bs";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import { useNavigate } from "react-router-dom";

const columns = [
  { label: "Full name", dataKey: "trainee" },
  {
    label: "Email",
    dataKey: "trainer_email",
    align: "center",
  },
  { label: "Start date", dataKey: "start_date", align: "center" },
  { label: "End date", dataKey: "end_date", align: "center" },
  // { label: "Actions", dataKey: "action", align: "center" },
];

const Subscribers = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userListing);
  const [packageDetails, setPackageDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = {
      apiEndpoint: `${PACKAGES_URL}1/`,
    };

    dispatch(getPackageDetails(data)).then((res) => {
      if (res.type === "getPackageDetails/fulfilled") {
        setPackageDetails(
          res.payload.data?.trainers?.map((item) => {
            return {
              trainee: (
                <h6
                  onClick={() =>
                    navigate(
                      `/admin/traineeProviderProfile/${item?.trainee_id}`
                    )
                  }
                  style={{
                    cursor: "pointer",
                  }}
                  className="text-secondary fw-bold mb-0 cursor-pointer"
                >
                  {item?.trainee}
                </h6>
              ),
              trainer_email: item?.trainer_email,
              start_date: item?.start_date,
              end_date: item?.end_date,
              // action: (
              //   <p
              //     className="mb-0 text-decoration-underline cursorPointer"
              //     onClick={() => {
              //       // fetchChat(item?.id, item?.trainer_id, item);
              //     }}
              //   >
              //     <BsChatText size={25} />
              //   </p>
              // ),
            };
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <Container fluid>
      <Row className="h-100">
        {loading === "pending" && <LoadingScreen />}
        <Col md={12}>
          <Card className="border-0 h-100 text-start border border-danger">
            <CardHeader className="bg-transparent border-0 p-0 d-md-flex align-items-center justify-content-between">
              <PageHeading headingText="Subscribers" categoryText="" />
            </CardHeader>
            <CardBody className="tableBodyWrapperPagination p-0">
              <ListingTable data={packageDetails || []} columns={columns} />
            </CardBody>
            {/* <CardFooter className="bg-transparent text-end pb-0 pt-2">
              {totalSize > PER_PAGE_COUNT && (
                <Pagination
                  size={totalSize}
                  handlePageChange={handlePageChange}
                  page={page}
                />
              )}
            </CardFooter> */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscribers;
