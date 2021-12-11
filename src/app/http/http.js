import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://3.139.146.137/fwd/v1"
    : "http://3.139.146.137/fwd/v1";

const Http = axios.create({
  baseURL,
  timeout: 30000,
  timeoutErrorMessage: "Request Timeout",
});

Http.interceptors.request.use(
  function (config) {
    // const state = store?.getState();
    // const token = state?.user?.token;
    const token = false;
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    if (process.env.NODE_ENV === "development") {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

Http.interceptors.response.use(
  function (response) {
    if (process.env.NODE_ENV === "development") {
      console.log("SUC Resp: ", response.data);
    }

    return response;
  },
  function (error) {
    if (error.response) {
      if (process.env.NODE_ENV === "development") {
        console.log("ERR Resp: ", error.response);
      }
      return Promise.reject(error.response);
    }

    if (process.env.NODE_ENV === "development") {
      console.log("Err: ", error);
    }

    return Promise.reject(error);
  }
);

export default Http;