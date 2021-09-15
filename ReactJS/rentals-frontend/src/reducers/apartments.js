import {
  UPDATE_APARTMENT,
  ADD_APARTMENT,
  DELETE_APARTMENT,
  CHANGE_APARTMENT,
} from "../actions/actionTypes";

export default function apartments(state = [], action) {
  switch (action.type) {
    case UPDATE_APARTMENT: {
      return action.apartments;
    }

    case ADD_APARTMENT: {
      console.log("from reducer", action);
      return [action.apartment, ...state];
    }
    case CHANGE_APARTMENT: {
      console.log(action);
      let index = state.findIndex((val) => val.id === action.apartment.id);
      state[index] = { ...state[index], ...action.apartment };
      return [...state];
    }
    case DELETE_APARTMENT: {
      return state.filter((val) => {
        return val.id !== action.id;
      });
    }
    default:
      return state;
  }
}
