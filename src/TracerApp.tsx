import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import Header from "./components/Header";
import ExpenseInput from "./components/ExpenseInput";
import ExpenseList from "./components/ExpenseList";
import Footer from "./components/Footer";

class TracerApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ExpenseList />
        <Footer />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.expenses
  };
}
  
export default connect(mapStateToProps)(TracerApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#f5f6fa",
    paddingTop: 20
  }
});
