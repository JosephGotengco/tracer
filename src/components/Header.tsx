import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import * as Font from "expo-font";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "RobotoMono-Regular": require("./../../assets/fonts/RobotoMono-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;

    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingHorizontal: 30
        }}
      >
        <Icon name="wallet" type="material-community" color="#fbc531" />
        {fontLoaded ? (
          <Text
            style={{
              marginLeft: 10,
              color: "#fbc531",
              fontSize: 24,
              fontFamily: "RobotoMono-Regular"
            }}
          >
            tracer
          </Text>
        ) : null}
      </View>
    );
  }
}
