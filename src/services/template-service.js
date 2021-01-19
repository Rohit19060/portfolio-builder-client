import config from "../config";
import TokenService from "./token-service";

const TemplateService = {
  FormData(formData) {
    formData.token = TokenService.getAuthToken();
    return fetch(`${config.API_ENDPOINT}/templates/data`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  EditData(formData) {
    formData.token = TokenService.getAuthToken();
    return fetch(`${config.API_ENDPOINT}/templates/edit`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getEditData() {
    return fetch(
      `${
        config.API_ENDPOINT
      }/templates/edit?token=${TokenService.getAuthToken()}`
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};
export default TemplateService;
