import React from "react";
import LinearGradient from "react-native-linear-gradient";

const LinearGradientComponent = props => {
  return (
    <LinearGradient
      colors={["rgb(16, 193, 193)", "rgb(72, 68, 100)"]}
      style={props.slideStyle}
    >
      {props.children}
    </LinearGradient>
  );
};

export default LinearGradientComponent;
