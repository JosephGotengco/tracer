import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import * as Font from "expo-font";

class ExpenseInput extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Raleway-Regular": require("./../../assets/fonts/Raleway-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    const { expenses, date } = this.props;
    return (
      <View style={styles.wrapper}>
        {fontLoaded ? (
          <View>
            <Text style={styles.text}>Expenses for: {date}</Text>
            {Object.keys(expenses[date]).map(key => {
              return (
                <View key={key} style={styles.expense}>
                  <View style={styles.expenseTitle}>
                    <Text style={styles.text}>{key}</Text>
                  </View>
                  <View style={styles.eexpensePrice}>
                    <Text style={styles.text}>$ {expenses[date][key]}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenseReducer.expenses,
    date: state.expenseReducer.date,
    name: state.expenseReducer.name,
    price: state.expenseReducer.price
  };
};

export default connect(mapStateToProps)(ExpenseInput);

const styles = StyleSheet.create({
  wrapper: {
    flex: 8,
    alignSelf: "stretch",
    marginHorizontal: 30,
    marginVertical: 20
  },
  text: {
    color: "#7f8fa6",
    fontFamily: "Raleway-Regular"
  },
  expense: {
    padding: 10,
    flexDirection: "row",
    borderBottomColor: "#7f8fa6",
    borderBottomWidth: 1
  },
  expenseTitle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  expensePrice: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
