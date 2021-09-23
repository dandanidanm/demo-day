import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
  } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";
import { patientReducer } from "../reducers/patientReducer"
import { userReducer } from "../reducers/userReducer";
import { historiaReducer } from "../reducers/historiaReducer";
import { propietarioReducer } from "../reducers/propietarioReducer";

  
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  
  const reducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    user: userReducer,
    historia: historiaReducer,
    propietario: propietarioReducer,
    patient: patientReducer,
  });
  
  export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  