import moment from "moment";
import { GrCurrency } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../Shared/InputField";
import MyDropdown from "../../../../Shared/MyDropdown";
import Pagination from "../../../../Shared/Pagination";
import React, { useState, useCallback, useEffect } from "react";
import PageHeading from "../../../../Shared/Headings/PageHeading";
import LoadingScreen from "../../../../HelperMethods/LoadingScreen";
import { FaEllipsisVertical, FaMagnifyingGlass } from "react-icons/fa6";
import {
  getWalletData,
  releasePayment,
} from "../../../../Redux/features/Admin/Wallet/walletApi";
import ListingTable from "../../../../Shared/AdminShared/Components/ListingTable";
import {
  CURRENCY,
  PER_PAGE_COUNT,
  PENDING_PAYMENTS,
  ADMIN_RELEASE_PAYMENT_URL,
} from "../../../../utils/constants";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const WalletOverview = (props) => {
  const today = moment();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalSize, setSizePages] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [walletData, setWalletData] = useState(null);

  const { loading } = useSelector((state) => state.wallet);

  const handlePageChange = useCallback((page) => {
    setPage(page.selected + 1);
  }, []);

  useEffect(() => {
    getWalletHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);

  const getWalletHistory = () => {
    const data = {
      apiEndpoint: `${PENDING_PAYMENTS}?page=${page}`,
    };

    dispatch(getWalletData(data)).then((res) => {
      if (res.type === "getWalletData/fulfilled") {
        setSizePages(res.payload.data.count);
        setWalletData(res.payload.data.results);
      }
    });
  };

  const handlePayClick = (transaction_id) => {
    const data = {
      apiEndpoint: ADMIN_RELEASE_PAYMENT_URL,
      requestData: JSON.stringify({ id: transaction_id }),
    };

    dispatch(releasePayment(data)).then((res) => {
      if (res.type === "releasePayment/fulfilled") {
        getWalletHistory();
      }
    });
  };

  useEffect(() => {
    if (walletData && walletData.length > 0) {
      let traineeListArray = [];

      walletData?.forEach((wallet) => {
        wallet?.transactions.forEach((transaction) => {
          traineeListArray.push({
            transaction_no: transaction?.id,
            amount: `${CURRENCY} ${transaction?.amount}`,
            status: (
              <div className="d-flex align-items-center justify-content-md-center">
                <div
                  className={`me-2 ${
                    transaction?.is_paid ? "bg-success" : "bg-danger"
                  } rounded-circle`}
                  style={{ minWidth: "8px", minHeight: "8px" }}
                ></div>
                <span>{transaction?.is_paid ? "Paid" : "Pending"}</span>
              </div>
            ),
            total_amount: `${CURRENCY} ${transaction?.total_amount}`,
            release_date: (
              <p
                className={
                  today.isSame(moment(transaction?.payment_date), "day")
                    ? "text-success fw-bold"
                    : today.isAfter(moment(transaction?.payment_date), "day")
                    ? "text-danger fw-bold"
                    : "text-dark"
                }
              >
                {moment(transaction?.payment_date).format("DD/MM/YYYY")}
              </p>
            ),
            action: (
              <UncontrolledDropdown className={`UncontrolledDropdown`}>
                <DropdownToggle
                  className={`p-0 d-flex align-items-center justify-content-center`}
                  nav
                >
                  <div className=" rounded-circle text-black-custom">
                    <FaEllipsisVertical size={18} className="fs-3" />
                  </div>
                </DropdownToggle>
                <DropdownMenu
                  className={`DropdownMenu`}
                  style={{ right: 0, left: "auto" }}
                >
                  <DropdownItem className={`p-1 DropdownItem`}>
                    <div
                      className="d-flex align-items-center px-2"
                      onClick={() => handlePayClick(transaction?.id)}
                    >
                      <GrCurrency className="me-2" />
                      <span className="fs-6">Click to pay</span>
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ),
          });
        });
      });

      setTableData(traineeListArray);
    } else {
      setTableData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletData]);

  const columns = [
    { label: "Transaction #", dataKey: "transaction_no", align: "center" },
    { label: "Amount", dataKey: "amount" },
    { label: "Status", dataKey: "status", align: "center" },
    {
      label: "Total Subscription Amount",
      dataKey: "total_amount",
      align: "center",
    },
    { label: "Release Date", dataKey: "release_date", align: "center" },
    { label: "Action", dataKey: "action", align: "center" },
  ];

  return (
    <Row className="h-100">
      <Col md={12}>
        <Card className="border-0 h-100 text-start">
          <CardHeader className="bg-transparent border-0 p-0">
            <PageHeading headingText="Wallet Overview" />
          </CardHeader>
          <CardBody className="tableBodyWrapperPagination">
            {loading === "pending" && <LoadingScreen />}

            <Row>
              <Col md={12} className="mb-3">
                <Card className="shadow-sm border onlyBorderRadius">
                  <CardBody>
                    <Row>
                      <Col md={6}>
                        <div className="d-flex align-items-center justify-content-between h-100">
                          <h6 className="w-50">Payment Duration:</h6>
                          <div className="w-50">
                            <MyDropdown
                              className="mb-0 border"
                              name={"role"}
                              placeholder="Select Duration"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <InputField
                          icon={<FaMagnifyingGlass />}
                          placeholder="Search by phone number"
                          type="text"
                          name="category"
                          className="py-3 ps-5 mt-1"
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md={12} className="mb-2">
                <ListingTable data={tableData} columns={columns} />
              </Col>
            </Row>
          </CardBody>
          <CardFooter className="bg-transparent text-end pb-0 pt-2">
            {totalSize > PER_PAGE_COUNT && (
              <Pagination
                size={totalSize}
                handlePageChange={handlePageChange}
              />
            )}
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
};
export default WalletOverview;
