import { types } from "../types/types";

const initialState = {
    patient: {},
  };
  
  export const patientReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.patientDataAdd:
        return {
          ...state,
          patient: { ...action.payload }
        };
  
      default:
        return state;
    }
  };
  