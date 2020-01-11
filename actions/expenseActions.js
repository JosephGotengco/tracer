import { ADDING_EXPENSE, ADD_EXPENSE, DELETE_ALL_EXPENSES } from "./types";

export const addExpense = expense => (dispatch, getState) => {
  // dispatch({ type: ADDING_EXPENSE });
  const { name, price } = expense;
  dispatch({ type: ADD_EXPENSE, payload: { name, price } });
};

export const deleteExpense = name => dispatch => {
  // implement
};

export const deleteAllExpenses = () => dispatch => {
  dispatch({ type: DELETE_ALL_EXPENSES });
};
