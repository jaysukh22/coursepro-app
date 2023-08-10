import axios from "axios";
import api from "./apiConfig";

export default class Requests {
  getUser(query) {
    return axios({
      method: "GET",
      url: `${api.user}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      params: query,
    });
  }
}
