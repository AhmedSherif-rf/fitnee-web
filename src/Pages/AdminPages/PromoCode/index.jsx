import { Formik } from "formik";
import { FaGift, FaUsers } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import MyDropdown from "../../../Shared/MyDropdown";
import InputField from "../../../Shared/InputField";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import { useDispatch, useSelector } from "react-redux";
import PageHeading from "../../../Shared/Headings/PageHeading";
import LoadingScreen from "../../../HelperMethods/LoadingScreen";
import { Card, CardBody, Col, Row, Label, Form } from "reactstrap";
import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";
import { ADD_PROMO_CODE_SCHEMA } from "../../../Shared/ValidationData/validation";
import { ADD_PROMO_CODE_INITIAL_VALUES } from "../../../Shared/ValidationData/initialValue";
import {
  ADMIN_PROMO_CODE_URL,
  promoCodeTypeOptions,
} from "../../../utils/constants";
import {
  getPromoCodeList,
  createPromoCodeList,
} from "../../../Redux/features/Admin/PromoCode/promoCodeApi";

const PromoCode = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.promoCode);

  const [tableData, setTableData] = useState([]);
  const [promoCodeData, setPromoCodeData] = useState(null);

  const handleAddPromoCodeSubmit = (values) => {
    const data = {
      apiEndpoint: ADMIN_PROMO_CODE_URL,
      requestData: JSON.stringify(values),
    };
    dispatch(createPromoCodeList(data)).then((res) => {
      if (res.type === "createPromoCodeList/fulfilled") {
        setPromoCodeData(res.payload.data);
        fetchPromoCodeListing();
      }
    });
  };

  useEffect(() => {
    fetchPromoCodeListing();
  }, [dispatch]);

  const fetchPromoCodeListing = () => {
    const data = {
      apiEndpoint: `${ADMIN_PROMO_CODE_URL}`,
    };

    dispatch(getPromoCodeList(data)).then((res) => {
      if (res.type === "getPromoCodeList/fulfilled") {
        setPromoCodeData(res.payload.data);
      }
    });
  };

  useEffect(() => {
    if (promoCodeData && promoCodeData.length > 0) {
      let promoCodeArray = [];
      promoCodeData.forEach((promoCode) => {
        promoCodeArray.push({
          id: <h6 className="text-secondary fw-bold mb-0">{promoCode.id}</h6>,
          code: promoCode.code,
          type: promoCode.type,
          limited_users: promoCode.limited_users,
          value: promoCode.value,
          expire_date: promoCode.expire_date,
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
    { label: "Expire Date", dataKey: "expire_date", align: "center" },
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
                initialValues={{ ...ADD_PROMO_CODE_INITIAL_VALUES }}
                validationSchema={ADD_PROMO_CODE_SCHEMA}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  handleAddPromoCodeSubmit(values);
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
                          type="text"
                          name="code"
                          className="py-3"
                          placeholder="Free200"
                          value={values.code}
                          onBlurHandle={handleBlur}
                          onChangeHandle={handleChange}
                        />
                        <p className="errorField text-start">
                          {errors.code && touched.code && errors.code}
                        </p>
                      </Col>

                      <Col md={6}>
                        <label className="mb-0 w-100 text-start">Type *</label>
                        <MyDropdown
                          name="type"
                          value={values.type}
                          placeholder="Select Type"
                          className="py-3 px-4 mb-0"
                          onBlurHandle={handleBlur}
                          onChangeHandle={handleChange}
                          Options={promoCodeTypeOptions}
                        />
                        <p className="errorField text-start">
                          {errors.type && touched.type && errors.type}
                        </p>
                      </Col>

                      <Col md={6} className="mb-2">
                        <Label className="w-100 text-start mb-0">
                          Enter Value *
                        </Label>
                        <InputField
                          icon={<FaGift />}
                          type="number"
                          name="value"
                          placeholder="10"
                          className="p-3 px-5"
                          value={values.value}
                          onBlurHandle={handleBlur}
                          onChangeHandle={handleChange}
                        />
                        <p className="errorField text-start">
                          {errors.value && touched.value && errors.value}
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
                          name="limited_users"
                          className="p-3 px-5"
                          value={values.limited_users}
                          onBlurHandle={handleBlur}
                          onChangeHandle={handleChange}
                        />
                        <p className="errorField text-start">
                          {errors.limited_users &&
                            touched.limited_users &&
                            errors.limited_users}
                        </p>
                      </Col>

                      <Col md={6} className="mb-2">
                        <Label className="mb-0 w-100 text-start">
                          Expiry Date: *
                        </Label>
                        <InputField
                          type="date"
                          name="expire_date"
                          className="p-3 w-100"
                          value={values.expire_date}
                          onBlurHandle={handleBlur}
                          onChangeHandle={handleChange}
                        />
                        <p className="errorField text-start">
                          {errors.expire_date &&
                            touched.expire_date &&
                            errors.expire_date}
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
export default PromoCode;
