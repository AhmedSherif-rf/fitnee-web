import React, { memo } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card, CardHeader } from "reactstrap";

const CategoryCard = (props) => {
  const { category, onEditClick } = props;

  return (
    <>
      <Card className={`border-0 p-0 CategoryCard`}>
        <CardHeader
          className={`p-0 onlyBorderRadius d-flex align-items-center justify-content-between border-0`}
        >
          <Link
            className="w-100"
            to={`/admin/settings/category/${category.uuid}/${category.id}/subCategory`}
          >
            <div
              className={`w-100 p-3 onlyBorderRadius  ${`CategoryCardHeader`}`}
            >
              <h6 className="mb-0 text-start fw-bold textGrey">
                {category.title} / {category.title_ar}
              </h6>
            </div>
          </Link>
          <div className="w-25">
            <div className="rounded-circle text-black-custom">
              <FaEdit
                className="cursorPointer"
                onClick={() =>
                  onEditClick({
                    id: category.id,
                    title: category.title,
                    title_ar: category.title_ar,
                  })
                }
              />
            </div>
          </div>
        </CardHeader>
      </Card>
    </>
  );
};

export default memo(CategoryCard);
