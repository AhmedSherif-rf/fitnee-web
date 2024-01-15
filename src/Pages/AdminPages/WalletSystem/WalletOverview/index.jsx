import React from "react";
import { GrCurrency } from "react-icons/gr";
import duration from "../../../../utils/constants";
import InputField from "../../../../Shared/InputField";
import MyDropdown from "../../../../Shared/MyDropdown";
import { FaCaretDown, FaMagnifyingGlass, FaRegEye } from "react-icons/fa6";
import PageHeading from "../../../../Shared/Headings/PageHeading";
import ListingTable from "../../../../Shared/AdminShared/Components/ListingTable";
import {
  Card,
  CardBody,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";

const walletOverview = (props) => {
  const tableData = [
    {
      InvNo: "122",
      name: "Hassan",
      Promo_code: "A discount for first ",
      monthly: "10000",
      paying_date: "Sep 01, 2023",
      weekly_pay: "2500",
      paying_date: "Sep 02, 2023",
      next_payment: "2600",
      action: (
        <UncontrolledDropdown className={`UncontrolledDropdown`}>
          <DropdownToggle
            className={`p-0 d-flex align-items-center justify-content-center`}
            nav
          >
            <div className=" rounded-circle text-black-custom">
              <FaCaretDown className="fs-3" />
            </div>
          </DropdownToggle>
          <DropdownMenu
            className={`DropdownMenu`}
            style={{ right: 0, left: "auto" }}
          >
            <DropdownItem className={`p-0 DropdownItem`}>
              <div className="d-flex align-items-center px-2">
                <GrCurrency className="me-2" />
                <span className="fs-6">Click to pay</span>
              </div>
            </DropdownItem>

            <DropdownItem className={`p-0 DropdownItem`}>
              <div className="d-flex align-items-center px-2">
                <FaRegEye className="me-2" />np,
                <span className="fs-6">View history</span>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    },
  ];

  const columns = [
    { label: "Inv. No", dataKey: "InvNo", align: "center" },
    { label: "Name", dataKey: "name" },
    { label: "Promo code", dataKey: "Promo_code" },
    { label: "Pay in this month", dataKey: "monthly", align: "center" },
    { label: "1st Payment", dataKey: "paying_date", align: "center" },
    { label: "Pay this Week", dataKey: "weekly_pay", align: "center" },
    { label: "2nd Payment", dataKey: "paying_date", align: "center" },
    { label: "Next Week Payment", dataKey: "next_payment", align: "center" },
    { label: "Action", dataKey: "action", align: "center" },
  ];
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md="12" className={`text-start mb-2 b`}>
            <PageHeading headingText="Wallet Overview" />
          </Col>
          <Col md={12} className="mb-3">
            <Card className="shadow-sm border onlyBorderRadius">
              <CardBody>
                <Row>
                  <Col md={6}>
                    <div className="d-flex align-items-center justify-content-between h-100">
                      <h6 className="w-50">Payment Duration:</h6>
                      <div className="w-50">
                        <MyDropdown
                          className="py-3 px-4 mb-0"
                          //   Options={duration}
                          name={"role"}
                          placeholder="Select Duration"
                          // onChangeHandle={handleChange}
                          // onBlurHandle={handleBlur}
                          // value={values.role}
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
      </Container>
    </React.Fragment>
  );
};
export default walletOverview;
