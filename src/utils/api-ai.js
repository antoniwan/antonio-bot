import { ApiAiClient, ApiAiStreamClient } from "api-ai-javascript";

const apiAiAccessToken = process.env.REACT_APP_API_AI_ACCESS_TOKEN;
const client = new ApiAiClient({
  accessToken: apiAiAccessToken,
  streamClientClass: ApiAiStreamClient
});

class ApiAi {
  constructor () {
    // Stub constructor
    console.log('api ai class initialized and constructed!');
  }
  test () {
    // Stub public prototype test method
    return client.textRequest('Hola!')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default ApiAi;
