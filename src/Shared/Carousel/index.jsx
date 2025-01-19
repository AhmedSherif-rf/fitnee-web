import { useState } from "react";

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div
      style={{
        padding: "0 40px",
        position: "relative",
        margin: "0 auto",
      }}
      //   className="py-4 md:py-10 relative mx-auto"
    >
      <div
        style={{
          position: "relative",
          overflowX: "clip",
          width: "100%",
          margin: "0 40px",
        }}
        // className="relative overflow-x-clip md:mx-4 w-full"
      >
        {/* ---------- in large screens ---------- */}
        <div
          style={{
            width: `${items.length <= 3 ? "100" : (100 / 3) * items.length}%`,
            transform: `translateX(${-current * (100 / 3)}%)`,
            transition: "transform 0.5s ease",
            display: "flex",
            flexDirection: "row",
          }}
          //   className={`hidden md:flex flex-row`}
        >
          {items?.map((item, index) => {
            return (
              <div
                style={{
                  width: 100 / 3 + "%",
                  boxSizing: "border-box",
                  margin: "0 20px",
                  overflow: "auto",
                }}
                className="overflow-auto"
                key={index}
              >
                {item}
              </div>
            );
          })}
        </div>

        <div className="hidden md:block">
          <button
            disabled={current > (items?.length - 3) / 3}
            onClick={() => {
              console.log(current);

              if (current < items.length) {
                setCurrent(current + 1);
              } else {
                setCurrent(0);
              }
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
            }}
            className={`btn btn-circle absolute top-1/2 left-0`}
          >
            &#10094;
          </button>
          <button
            disabled={current === 0}
            onClick={() => {
              if (current > 0) {
                setCurrent(current - 1);
              } else {
                setCurrent(items?.length);
              }
            }}
            style={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
            }}
            className={`btn btn-circle absolute top-1/2 right-0`}
          >
            &#x276F;
          </button>
        </div>

        {/* ---------- in small screens ---------- */}
        {/* <div
          style={{
            width: `${100 * items.length}%`,
            transform: `translateX(${(-current * 100) / items.length}%)`,
            transition: "transform 0.5s ease",
          }}
          className={`flex md:hidden flex-row md:gap-3`}
        >
          {items?.map((item, index) => {
            return (
              <div className="w-[100%] overflow-auto" key={index}>
                {item}
              </div>
            );
          })}
        </div>

        <div className="md:hidden">
          <button
            disabled={current == items?.length - 1}
            onClick={() => {
              if (current < items.length) {
                setCurrent(current + 1);
              } else {
                setCurrent(0);
              }
            }}
            className={`btn btn-circle absolute top-1/2 left-0`}
          >
            &#10094;
          </button>
          <button
            disabled={current === 0}
            onClick={() => {
              if (current > 0) {
                setCurrent(current - 1);
              } else {
                setCurrent(items?.length);
              }
            }}
            className={`btn btn-circle absolute top-1/2 right-0`}
          >
            &#x276F;
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
