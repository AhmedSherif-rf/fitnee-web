import { Formik } from "formik";
import React, { memo } from "react";
import FillBtn from "../../Buttons/FillBtn";
import OutlineBtn from "../../Buttons/OutlineBtn";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Modal, ModalBody, ModalHeader, Label, Form } from "reactstrap";
import { TRAINEE_Filters_INITIAL_VALUES } from "../../ValidationData/initialValue";
import SelectField from "../../../Shared/Select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TraineeFilter = (props) => {
  const { onClose, isOpen, handleRefetchHistory } = props;
  const { loading } = useSelector((state) => state.userListing);
  const [dateError, setDateError] = React.useState(false);

  const { t, i18n } = useTranslation("");

  const convertDate = (date) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toISOString().split("T")[0];

    return formattedDate;
  };

  const handleFilter = async (values) => {
    let queries = {};

    if (values.from) queries.from = convertDate(values.from);
    if (values.to) queries.to = convertDate(values.to);
    if (new Date(queries.to).getTime() < new Date(queries.from).getTime()) {
      setDateError(true);
      return;
    }
    setDateError(false);
    if (values.active) queries.active = values.active;

    onClose();
    handleRefetchHistory(queries);
  };

  // ----------------- side effects -----------------

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size={{}}
      isOpen={isOpen}
      onClosed={onClose}
      toggle={onClose}
      className={` ${i18n.dir()}`}
    >
      <ModalHeader className="border-0">
        <b>{t("meals.filter")}</b>
      </ModalHeader>
      <ModalBody className="px-4">
        <Formik
          initialValues={{ ...TRAINEE_Filters_INITIAL_VALUES }}
          // validationSchema={MEALS_Filter_SCHEMA}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            await handleFilter(values);
          }}
        >
          {({ values, errors, touched, setFieldValue, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.fromLabel")}`}
                </Label>
                <DatePicker
                  name="from"
                  className={"w-100 form-control-lg BorderRadiusInput"}
                  selected={values.from}
                  onChange={(date) => setFieldValue("from", date)}
                />

                <p className="errorField">
                  {t(errors.from) && touched.from && t(errors.from)}
                </p>
              </div>

              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.toLabel")}`}
                </Label>
                <DatePicker
                  name="to"
                  className={"w-100 form-control-lg BorderRadiusInput"}
                  selected={values.to}
                  onChange={(date) => setFieldValue("to", date)}
                />

                <p className="errorField">
                  {t(errors.to) && touched.to && t(errors.to)}
                </p>
                <p className="errorField">
                  {dateError && "To date should be greater than from date"}
                </p>
              </div>

              <div className="mb-2">
                <Label className="fw-normal small mb-0">
                  {`${t("meals.statusLabel")}`}
                </Label>
                <SelectField
                  name="active"
                  className={"form-control-lg BorderRadiusInput"}
                  options={[
                    {
                      value: "True",
                      label: "Active",
                    },
                    {
                      value: "False",
                      label: "Inactive",
                    },
                  ]}
                  handleChange={(value) => setFieldValue("active", value)}
                />
                <p className="errorField">
                  {t(errors.active) && touched.active && t(errors.active)}
                </p>
              </div>

              <div className="w-100 d-flex align-items-center justify-content-center gap-3">
                <FillBtn
                  className="w-100 py-2"
                  text={t("meals.saveText")}
                  disabled={loading === "pending" ? true : false}
                  type={"submit"}
                />
                <OutlineBtn
                  className="w-100 py-2"
                  disabled={loading === "pending" ? true : false}
                  text={t("login.cancelText")}
                  handleOnClick={() => onClose()}
                />
              </div>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </Modal>
  );
};

export default memo(TraineeFilter);
