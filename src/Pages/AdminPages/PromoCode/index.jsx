import React from "react";
import Checkbox from "../../../Shared/Checkbox";
import { FaGift, FaUsers } from "react-icons/fa6";
import InputField from "../../../Shared/InputField";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import PageHeading from "../../../Shared/Headings/PageHeading";
import { Card, CardBody, Col, Container, Label, Row } from "reactstrap";
import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";

const PromoCode = (props) => {
  const tableData = [
    {
      id: <h6 className="text-secondary fw-bold mb-0">1</h6>,
      name: "Hassan",
      description: "A discount for first ",
      discount_percentage: "10 %",
      user_limit: "20",
      created_date: "Sep 01, 2023 12:25",
      updated_date: "Sep 02, 2023 12:00",
      expiry_date: "Sep 010, 2023 12:00",
    },
  ];

  const columns = [
    { label: "ID", dataKey: "id", align: "center" },
    { label: "Name", dataKey: "name" },
    { label: "Description", dataKey: "description" },
    { label: "Discount %", dataKey: "discount_percentage", align: "center" },
    { label: "User Limit", dataKey: "user_limit", align: "center" },
    { label: "Created Date", dataKey: "created_date", align: "center" },
    { label: "Updated Date", dataKey: "updated_date", align: "center" },
    { label: "Expiry Date", dataKey: "expiry_date", align: "center" },
  ];
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md="12" className={`text-start mb-2 b`}>
            <PageHeading headingText="Add Promo Code" categoryText="" />
          </Col>
          <Col md={12} className="mb-3">
            <Card className="shadow-sm border-0">
              <CardBody>
                <Row>
                  <Col md={6} className="mb-2">
                    <Label className="w-100 text-start mb-0">Code *</Label>
                    <InputField
                      placeholder="DISCOUNT10%"
                      type="text"
                      name="code"
                      className="py-3 mt-1"
                    />
                  </Col>

                  <Col md={6} className="mb-2">
                    <Label className="w-100 text-start mb-0">
                      Description *
                    </Label>
                    <InputField
                      placeholder="A discount for first subscription."
                      type="text"
                      name="description"
                      className="py-3 mt-1"
                    />
                  </Col>

                  <Col md={6} className="mb-2">
                    <Label className="w-100 text-start mb-0">
                      Enter Discount Percentage *
                    </Label>
                    <InputField
                      icon={<FaGift />}
                      placeholder="10 %"
                      type="number"
                      name="percentage"
                      className="p-3  text-end mt-1"
                    />
                  </Col>

                  <Col md={6} className="mb-2">
                    <div className="d-flex align-items-center h-100 mt-2 pt-2">
                      <Checkbox
                        label={<p className="mb-0 fs-6">Unlimited Users</p>}
                        name={"term_and_condition"}
                      />
                    </div>
                  </Col>

                  <Col md={6} className="mb-2">
                    <div className="d-flex align-items-center justify-content-between h-100 mt-2 pt-2">
                      <div className="">
                        <Checkbox
                          label={<p className="mb-0 fs-6">User Limit: *</p>}
                          name={"term_and_condition"}
                        />
                      </div>
                      <InputField
                        icon={<FaUsers className="fs-4" />}
                        placeholder="10 %"
                        type="number"
                        name="percentage"
                        className="p-3  text-end mt-1"
                      />
                    </div>
                  </Col>

                  <Col md={6} className="mb-2">
                    <div className="d-flex align-items-center justify-content-between h-100 mt-2 pt-2">
                      <div className="">
                        <p className="mb-0">Expiry Date: *</p>
                      </div>
                      <InputField
                        placeholder="30 /09 / 2023"
                        type="date"
                        name="date"
                        className="p-3 w-100"
                      />
                    </div>
                  </Col>
                  <Row className="justify-content-center mt-2">
                    <Col md={5} className="mb-2 text-end">
                      <FillBtn
                        type={"submit"}
                        text={"Submit Code"}
                        className=" w-100 py-3"
                      />
                    </Col>
                  </Row>
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
export default PromoCode;
