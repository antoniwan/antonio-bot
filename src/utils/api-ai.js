import { ApiAiClient } from "./api-ai-client/ApiAiClient";

const apiAiAccessToken = process.env.REACT_APP_API_AI_ACCESS_TOKEN;
const client = new ApiAiClient({
  accessToken: apiAiAccessToken
});

class ApiAi {
  constructor() {
    // Stub constructor
    console.log("api ai class initialized and constructed!");
  }
  test() {
    // Stub public prototype test method
    return client
      .textRequest("Hola!")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  sendMessage(text) {
    console.log(`Send: ${text}`);
  }
}

export default ApiAi;

export const sendMessage = text => {
  return client
    .textRequest(text)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};
