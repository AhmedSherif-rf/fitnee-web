import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center textYellow cursorPointer my-2"
      onClick={() => navigate(-1)}
    >
      <IoIosArrowRoundBack size={25} />
      <div>
        <small>Go Back</small>
      </div>
    </div>
  );
};

export default memo(Index);
