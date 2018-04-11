import axios from "axios";

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const axiosInstance = axios.create({
  baseURL: WEATHER_API_URL,
  params: {
    APPID: "49a013b322b50761d39dc1fb36896635"
  }
});
class Weather {
  constructor() {
    // Stub constructor
    console.log("Weather helper class initialized and constructed!");
  }
  test() {
    // Stub public prototype test method
    return "testing";
  }
  sendMessage(text) {
    console.log(`Send: ${text}`);
  }
}

export default Weather;

export const getWeather = location => {
  try {
    const response = axiosInstance.get(
      `${WEATHER_API_URL}/weather?q=${location}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const test = () => {
  const w = new Weather();
  w.test();
};
