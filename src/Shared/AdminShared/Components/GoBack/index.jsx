import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center textYellow py-2 cursorPointer"
      onClick={() => navigate(-1)}
    >
      <FaAngleDoubleLeft size={25} /> 
      <div>
        <small className="fw-bold ms-2">Back</small>
      </div>
    </div>
  );
};

export default memo(Index);
