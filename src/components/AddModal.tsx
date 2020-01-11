import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Icon } from "react-native-elements";
import ExpenseInput from "./ExpenseInput";
import * as Font from "expo-font";

export default class ModalTester extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  state = {
    isModalVisible: false,
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "RobotoMono-Regular": require("./../../assets/fonts/RobotoMono-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const { fontLoaded } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.addWrapper}>
          <Icon
            name="plus"
            type="antdesign"
            iconStyle={styles.iconStyle}
            onPress={this.toggleModal}
            underlayColor="#56CCF2"
            size={32}
          />
        </View>
        <Modal
          isVisible={this.state.isModalVisible}
          backdropTransitionOutTiming={0}
          style={{ margin: 0 }}
        >
          <View style={styles.container}>
            <View style={styles.optionsRow}>
              <Icon
                name="close"
                type="antdesign"
                containerStyle={styles.close}
                iconStyle={styles.iconStyle}
                onPress={this.toggleModal}
                underlayColor="#D1D7DB"
                size={32}
              />
              <Icon
                name="check"
                type="antdesign"
                containerStyle={styles.submit}
                iconStyle={styles.iconStyle}
                onPress={this.toggleModal}
                underlayColor="#D1D7DB"
                size={32}
              />
            </View>
            <View style={styles.titleRow}>
              {fontLoaded ? <Text style={styles.title}>expenses</Text> : null}
            </View>
            <ExpenseInput />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addWrapper: {
    backgroundColor: "#56CCF2",
    padding: 10,
    borderRadius: 50
  },
  iconStyle: {
    color: "white"
  },
  container: {
    marginTop: 50,
    padding: 20,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#D1D7DB",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  optionsRow: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  close: {
    flex: 1,
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  submit: {
    flex: 1,
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  titleRow: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row"
  },
  title: {
    fontSize: 24,
    fontFamily: "RobotoMono-Regular",
    color: "#fbc531"
  }
});
