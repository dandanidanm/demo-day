import { types } from "../types/types";

const initialState = {
  auth: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        imagen: action.payload.photoURL
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};
