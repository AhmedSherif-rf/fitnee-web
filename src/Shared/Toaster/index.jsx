import toast from "react-hot-toast";
import { FaCheck, FaXmark } from "react-icons/fa6";

class Toaster {
  static success(message) {
    toast.success(message, {
      position: "top-right",
      icon: <FaCheck color="green" />,
      style: {
        borderRadius: "10px",
        background:
          "linear-gradient(90deg, #F6E709 -2.97%, #EDE809 21.19%, #D4EB09 61.98%, #ADF109 113.34%, #8EF609 148.08%)",
        color: "#333",
      },
    });
  }

  static error(message) {
    toast.error(message, {
      position: "top-right",
      icon: <FaXmark color="red" />,
      style: {
        borderRadius: "10px",
        background:
          "linear-gradient(90deg, #F6E709 -2.97%, #EDE809 21.19%, #D4EB09 61.98%, #ADF109 113.34%, #8EF609 148.08%)",
        color: "#333",
      },
    });
  }

  static info(message) {
    toast.info(message, { position: toast.POSITION.TOP_RIGHT });
  }

  static warning(message) {
    toast.warning(message, { position: toast.POSITION.TOP_RIGHT });
  }
}

export default Toaster;
