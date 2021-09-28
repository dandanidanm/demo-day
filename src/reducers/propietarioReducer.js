import { types } from "../types/types";

const initialState = {
    propietario: {},
  };
  
  export const propietarioReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.PropietarioData:
        return {
          ...state,
          propietario: {...action.payload}
        };
       
      default:
        return state;
    }
  };
  