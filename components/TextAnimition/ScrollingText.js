import React, { useRef, useEffect } from "react";
import { Text, View, Animated, Easing } from "react-native";
import { SubTitleStyle } from "../../styles/styles";

const ScrollingText = ({ text, duration = 20000 }) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.timing(translateX, {
        toValue: -200,
        duration,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => {
        translateX.setValue(0);
        animate();
      });
    };
    animate();
  }, [duration]);

  return (
    <View>
      <Animated.View
        style={{
          transform: [{ translateX }],
        }}
      >
        <Text style={SubTitleStyle}>{text}</Text>
      </Animated.View>
    </View>
  );
};

export default ScrollingText;
