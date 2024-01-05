import "./paginationStyles.scss";
import React, { memo } from "react";
import ReactPaginate from "react-paginate";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { PER_PAGE_COUNT, PAGE_RANGE } from "../../utils/constants";

const pagination = ({ size, handlePageChange }) => {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaGreaterThan className="text-black-custom fs-4" />}
        onPageChange={handlePageChange}
        pageRangeDisplayed={PAGE_RANGE}
        pageCount={size / PER_PAGE_COUNT}
        previousLabel={<FaLessThan className="text-black-custom fs-4" />}
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        activeLinkClassName={"activePageLink"}
      />
    </>
  );
};

export default memo(pagination);
