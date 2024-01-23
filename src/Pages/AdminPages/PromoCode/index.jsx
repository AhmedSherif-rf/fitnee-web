import { Formik } from "formik";
import { FaGift, FaUsers } from "react-icons/fa6";
import MyDropdown from "../../../Shared/MyDropdown";
import InputField from "../../../Shared/InputField";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import { useDispatch, useSelector } from "react-redux";
import React, { memo, useEffect, useState } from "react";
import PageHeading from "../../../Shared/Headings/PageHeading";
import LoadingScreen from "../../../HelperMethods/LoadingScreen";
import { Card, CardBody, Col, Row, Label, Form } from "reactstrap";
import { PROMO_CODE_LIST_URL, promoType } from "../../../utils/constants";
import { SCHEMA_PROMO_CODE } from "../../../Shared/ValidationData/validation";
import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";
import { INITIAL_VALUES_PROMO_CODE } from "../../../Shared/ValidationData/initialValue";
import { getPromoCodeList } from "../../../Redux/features/Admin/PromoCode/promoCodeApi";

const PromoCode = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userListing);

  const [tableData, setTableData] = useState([]);
  const [promoCodeData, setPromoCodeData] = useState(null);

  const handleLoginSubmit = (values) => {};

  useEffect(() => {
    const data = {
      apiEndpoint: `${PROMO_CODE_LIST_URL}`,
    };

    dispatch(getPromoCodeList(data)).then((res) => {
      if (res.type === "getPromoCodeList/fulfilled") {
        setPromoCodeData(res.payload.data);
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (promoCodeData && promoCodeData.length > 0) {
      let promoCodeArray = [];
      promoCodeData.forEach((promoCode, index) => {
        promoCodeArray.push({
          id: <h6 className="text-secondary fw-bold mb-0">{promoCode.id}</h6>,
          code: promoCode.code,
          type: promoCode.type,
          limited_users: promoCode.limited_users,
          value: promoCode.value,
          expiry_date: promoCode.expire_date,
        });
      });
      setTableData(promoCodeArray);
    } else {
      setTableData([]);
    }
  }, [promoCodeData]);

  const columns = [
    { label: "ID", dataKey: "id", align: "center" },
    { label: "Code", dataKey: "code" },
    { label: "Type", dataKey: "type" },
    { label: "User Limit", dataKey: "limited_users", align: "center" },
    { label: "Expiry Date", dataKey: "expiry_date", align: "center" },
  ];

  return (
    <React.Fragment>
      <Row>
        {loading === "pending" && <LoadingScreen />}
        <div className="text-start w-100">
          <PageHeading headingText="Add Promo Code" categoryText="" />
        </div>
        <Col md={12} className="tableBodyWrapperPagination">
          <Card className="shadow-sm mb-2">
            <CardBody>
              <Formik
                initialValues={{ ...INITIAL_VALUES_PROMO_CODE }}
                validationSchema={SCHEMA_PROMO_CODE}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  handleLoginSubmit(values);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-2">
                        <Label className="w-100 text-start mb-0">Code *</Label>
                        <InputField
                          placeholder="free200"
                          type="text"
                          name="code"
                          className="py-3 mt-1"
                          value={values.code}
                        />
                        <p className="errorField text-end">
                          {errors.code && touched.code && errors.code}
                        </p>
                      </Col>

                      <Col md={6}>
                        <label className="mb-0 w-100 text-start">Type *</label>
                        <MyDropdown
                          className="py-3 px-4 mb-0"
                          Options={promoType}
                          name="type"
                          placeholder="Select Type"
                          // onChangeHandle={handleChange}
                          // onBlurHandle={handleBlur}
                          value={values.type}
                        />
                        <p className="errorField text-end">
                          {errors.type && touched.type && errors.type}
                        </p>
                      </Col>

                      <Col md={6} className="mb-2">
                        <Label className="w-100 text-start mb-0">
                          Enter Value *
                        </Label>
                        <InputField
                          icon={<FaGift />}
                          placeholder="10"
                          type="number"
                          name="promoValue"
                          className="p-3 px-5 mt-1"
                          value={values.promoValue}
                        />
                        <p className="errorField text-end">
                          {errors.promoValue &&
                            touched.promoValue &&
                            errors.promoValue}
                        </p>
                      </Col>

                      <Col md={6} className="mb-2">
                        <Label className="w-100 text-start mb-0">
                          User Limit *
                        </Label>
                        <InputField
                          icon={<FaUsers />}
                          placeholder="5"
                          type="number"
                          name="user_limit"
                          className="p-3 px-5 mt-1"
                          value={values.user_limit}
                        />{" "}
                        <p className="errorField text-end">
                          {errors.user_limit &&
                            touched.user_limit &&
                            errors.user_limit}
                        </p>
                      </Col>

                      <Col md={6} className="mb-2">
                        <Label className="mb-0 w-100 text-start">
                          Expiry Date: *
                        </Label>
                        <InputField
                          placeholder="30 /09 / 2023"
                          type="date"
                          name="expiry_date"
                          className="p-3 w-100"
                          value={values.expiry_date}
                        />
                        <p className="errorField text-end">
                          {errors.expiry_date &&
                            touched.expiry_date &&
                            errors.expiry_date}
                        </p>
                      </Col>
                      <Row className="justify-content-center mt-2">
                        <Col md={5} className="text-end">
                          <FillBtn
                            type={"submit"}
                            text={"Submit Code"}
                            className=" w-100 py-3"
                          />
                        </Col>
                      </Row>
                    </Row>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
          <ListingTable data={tableData} columns={columns} />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default memo(PromoCode);
