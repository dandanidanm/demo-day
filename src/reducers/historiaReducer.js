import { types } from "../types/types";

const initialState = {
    historia: {},
  };
  
  export const historiaReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.historiaClinica:
        return {
          ...state,
          historia: [...action.payload]
        };
       
      default:
        return state;
    }
  };
  