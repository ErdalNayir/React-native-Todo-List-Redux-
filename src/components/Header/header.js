import React from "react";
import { Animated, Dimensions } from "react-native";
import styles from "./headerStyle";

function Header({ onAnimate }) {
  const HEADER_EXPANDED_HEIGHT = 100;
  const HEADER_COLLAPSED_HEIGHT = 60;

  const TITLE_EXPANDED_HEIGHT = 32;
  const TITLE_COLLAPSED_HEIGHT = 24;

  const headerHeight = onAnimate.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: "clamp",
  });

  const headerPosition = onAnimate.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [true, false],
    extrapolate: "clamp",
  });

  const headerTitleSize = onAnimate.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [TITLE_EXPANDED_HEIGHT, TITLE_COLLAPSED_HEIGHT],
    extrapolate: "clamp",
  });

  const headerTitleWeight = onAnimate.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: ["500", "900"],
    extrapolate: "clamp",
  });

  const imageOpacity = onAnimate.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [0.5, 0],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.Header,
        {
          height: headerHeight,
          elevation: 1,
        },
      ]}>
      <Animated.Text
        style={[
          styles.headerText,

          {
            color: "#000000",
            fontSize: headerTitleSize,
            fontWeight: headerTitleWeight,
            textAlignVertical: headerPosition ? "bottom" : "center",
          },
        ]}>
        To-do List
      </Animated.Text>
    </Animated.View>
  );
}

export default Header;
