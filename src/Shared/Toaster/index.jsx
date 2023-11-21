import toast from "react-hot-toast";

class Toaster {
  static success(message) {
    toast.success(message, {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
  }

  static error(message) {
    toast.error(message, {
      position: "top-right",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
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
