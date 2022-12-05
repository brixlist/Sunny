import React from "react";
import Svg, { Circle, Rect } from "react-native-svg";

import {
  Cloud,
  CloudDrizzle,
  Snowflake,
  CloudFog,
  CloudLightning,
  CloudSunRain
} from "lucide-react-native";

const SvgMedia = ({ props }) => {
  //console.log(props);
  return (
    <>
      {props.code === 800 ? (
        <>
          <Svg height={props.size} width={props.size} viewBox="0 0 100 100">
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="#F7D15D"
              strokeWidth="2.5"
              fill="#F7D15D"
            />
          </Svg>
        </>
      ) : props.code >= 200 && props.code <= 232 ? (
        <>
          <CloudLightning stroke={"#023e8a"} size={props.size} />
        </>
      ) : props.code >= 300 && props.code <= 321 ? (
        <>
          <CloudDrizzle size={props.size} stroke="#023e8a" />
        </>
      ) : props.code >= 500 && props.code <= 504 ? (
        <><CloudSunRain size={props.size} stroke="#ffa400" /></> //backgroud-color: #CAF0F8
      ) : props.code === 511 ? (
        <><Snowflake fill="#e5e5e5" size={props.size} stroke="#e5e5e5" /></>
      ) : props.code >= 520 && props.code <= 531 ? (
        <><CloudDrizzle size={props.size} stroke="#023e8a" /></> //stesso bg di >= 300 && <= 321
      ) : props.code >= 600 && props.code <= 622 ? (
        <>
          <Snowflake size={props.size} stroke="#e5e5e5" />
        </>
      ) : props.code >= 701 && props.code <= 781 ? (
        <>
          <CloudFog size={props.size} stroke="#adb5bd" />
        </>
      ) : props.code >= 801 && props.code <= 804 ? (
        <>
          <Cloud fill="#8d99ae" size={props.size} stroke="#8d99ae" />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SvgMedia;
