import axios from "axios";

const http = axios.create({
    baseURL: "https://sos.kokoropie.site/api",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
  });

  export default http
