import { useFonts } from "expo-font";

import { useState, useEffect } from "react";

import axios from "axios";

import LoadingPage from "./pages/LoadingPage";
import MainPage from "./pages/MainPage";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.otf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.otf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.otf"),
  });

  const [data, setData] = useState({ cod: 500 });
  const [bgColor, setBgColor] = useState("#fff");

  const getWeather = async (lat, long) => {
    try {
      let api_call = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=d223d72ce260e9719c1aa55a155ffcf9`;
      const resp = await axios.get(api_call);
      setData(resp.data);

      let x = resp.data.weather[0].id;
  
      switch (true) {
        case x >= 200 && x <= 232:
          setBgColor("#707070");
          break;
        case x >= 300 && x <= 321:
          setBgColor("#d9d9d9");
          break;
        case x >= 500 && x <= 531:
          setBgColor("#007CBE");
          break;
        case x >= 600 && x <= 622:
          setBgColor("white");
          break;
        case x >= 701 && x <= 781:
          setBgColor("gray");
          break;
        case 800:
          setBgColor("#FDF2CD");
          break;
        case x >= 801 && x <= 804:
          console.log("ciao");
          setBgColor("#e9ecef");
          break;
        default:
          setBgColor("white");
          break;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getLogLat = async () => {
    try {
      //HIDE API KEY
      const resp = await axios.get(
        "https://api.ipgeolocation.io/ipgeo?apiKey=2d879b54fca84128900e20b8852be500"
      );
      getWeather(resp.data.latitude, resp.data.longitude);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLogLat();
  }, []);

  return (
    <>
      {data.cod === 500 ? (
        <>
          <LoadingPage />
        </>
      ) : (
        <>
          <MainPage props={{ info: data, color: bgColor}} />
        </>
      )}
    </>
  );
}