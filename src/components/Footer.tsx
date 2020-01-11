import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import AddModal from "./AddModal";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <AddModal />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 30,
    position: "relative"
  }
});
