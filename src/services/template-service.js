import config from "../config";
import TokenService from "./token-service";

const TemplateService = {
  FormData(formdata) {
    formdata.token = TokenService.getAuthToken();
    return fetch(`${config.API_ENDPOINT}/templates/data`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};
export default TemplateService;
