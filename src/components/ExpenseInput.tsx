import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addExpense, deleteAllExpenses } from "./../../actions/expenseActions";
import { Input, Button } from "react-native-elements";

class ExpenseInput extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0
    };
  }

  _onAddExpense = () => {
    const { name, price } = this.state;
    this.props.addExpense({ name, price });
  };

  _handleNameChange = name => {
    this.setState({
      name
    });
  };

  _handlePriceChange = price => {
    this.setState({
      price
    });
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Input
            inputStyle={styles.input}
            placeholder="Expense Name"
            onChangeText={name => this._handleNameChange(name)}
            label="name"
          ></Input>
          <Input
            inputStyle={styles.input}
            placeholder="Expense Price"
            onChangeText={price => this._handlePriceChange(price)}
            label="price"
          ></Input>
          <Button title="add expense" onPress={this._onAddExpense}></Button>
        </View>
      </View>
    );
  }
}

export default connect(
  null,
  { addExpense, deleteAllExpenses }
)(ExpenseInput);

const styles = StyleSheet.create({
  wrapper: {
    flex: 6,
    alignSelf: "stretch"
  },
  container: {
    backgroundColor: "#D1D7DB"
  },
  input: {
    color: "#7f8fa6"
  }
});
