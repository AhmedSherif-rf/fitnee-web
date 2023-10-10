import React from "react";
import StarRating from "../Rating";
import { Card, CardBody, CardText, CardFooter } from "reactstrap";

const RatingCard = (props) => {
  const { header, image, des } = props;

  return (
    <Card
      className="rounded-0"
      style={{
        border: "#F5E74C 2px solid",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        minHeight: "400px",
        minWidth: "300px",
      }}
    >
      <CardBody>{""}</CardBody>
      <CardFooter
        className="text-center p-0 m-0"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <CardText className="lh-1 pt-2">
          <small>{des}</small>
        </CardText>
        <StarRating />
        <CardText className="">{header}</CardText>
      </CardFooter>
    </Card>
  );
};

export default RatingCard;
