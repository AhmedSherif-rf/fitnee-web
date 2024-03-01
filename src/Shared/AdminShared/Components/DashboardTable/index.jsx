import React, { memo } from "react";
import { Link } from "react-router-dom";
import ListingTable from "../ListingTable";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";

const DashboardTable = (props) => {
  const { data, columns, link, headingText } = props;

  return (
    <Card className="AdminCard border-0 fw-bold text-start overflowY-scroll mb-3 h-100">
      <CardHeader className={`bg-transparent border-0 mt-2`}>
        <h6 className="fw-bold">{headingText}</h6>
      </CardHeader>
      <CardBody className="py-0 px-1">
        <ListingTable data={data} columns={columns} />
      </CardBody>
      <CardFooter className="text-end bg-transparent border-0 pt-0 mb-2">
        <Link to={link} className="textYellow">
          See More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default memo(DashboardTable);
