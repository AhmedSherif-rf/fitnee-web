import React from "react";
import { Container } from "reactstrap";
import TraineeInfo from "../../../Shared/SignUp/TraineeInfo";
import BasicFormInfo from "../../../Shared/SignUp/BasicInfoForm";
import BodyInformation from "../../../Shared/SignUp/BodyInformation";
import TrainerFormInfo from "../../../Shared/SignUp/TrainerFormInfo";
import MultipleImgUpload from "../../../Shared/SignUp/MultipleImgUpload";

const SignUp = () => {
  return (
    <Container className="mt-5">
      <BasicFormInfo />
      <BodyInformation />
      <MultipleImgUpload />
      <TraineeInfo />
      <TrainerFormInfo />
    </Container>
  );
};

export default SignUp;
