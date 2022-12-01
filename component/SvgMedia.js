import React from "react";
import Svg, { Circle, Rect } from "react-native-svg";

import {
  Cloud,
  CloudDrizzle,
  Snowflake,
  CloudFog,
  CloudLightning,
} from "lucide-react-native";

const SvgMedia = ({ props }) => {
  console.log(props);
  return (
    <>
      {props.code === 800 ? (
        <>
          <Svg height="380" width="380" viewBox="0 0 100 100">
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
          <CloudLightning fill="#023e8a" size={380} stroke={"#023e8a"} />
        </>
      ) : props.code >= 300 && props.code <= 321 ? (
        <>
          <CloudDrizzle fill="#023e8a" size={380} stroke="#023e8a" />
        </>
      ) : props.code >= 500 && props.code <= 531 ? (
        <></>
      ) : props.code >= 600 && props.code <= 622 ? (
        <>
          <Snowflake fill="#e5e5e5" size={380} stroke="#e5e5e5" />
        </>
      ) : props.code >= 701 && props.code <= 781 ? (
        <>
          <CloudFog fill="#adb5bd" size={380} stroke="#adb5bd" />
        </>
      ) : props.code >= 801 && props.code <= 804 ? (
        <>
          <Cloud fill="#8d99ae" size={380} stroke="#8d99ae" />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SvgMedia;
