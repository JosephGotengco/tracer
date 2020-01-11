import {
  ADD_EXPENSE,
  ADDING_EXPENSE,
  DELETING_EXPENSE,
  DELETE_ALL_EXPENSES
} from "../actions/types";

const initialState = {
  expenses: {
    "Aug 2019": {
      Food: 50,
      Random: 100
    }
  },
  date: "Aug 2019",
  name: "",
  price: ""
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_EXPENSE:
      return {
        ...state
      };
    case ADD_EXPENSE:
      const { date } = state;
      return {
        ...state,
        expenses: {
          ...state.expenses,
          [date]: {
            ...state.expenses[date],
            [action.payload.name]: action.payload.price
          }
        }
      };
    case DELETE_ALL_EXPENSES:
      return {
        ...state
      };
    case DELETING_EXPENSE:
      return {
        ...state
      };

    // Default
    default: {
      return state;
    }
  }
};

export default expenseReducer;
