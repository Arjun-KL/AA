import {createStore,applyMiddleware,compose} from 'redux';
import { EmpReducer } from './EmpReducer';
import { combineReducers } from 'redux'
import { DepartmentReducer } from './DeptReducer';
import thunk from 'redux-thunk';
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    employees: EmpReducer,
    departments: DepartmentReducer
  });

//const store= createStore(EmpReducer,composeEnhancers(applyMiddleware(thunk)));

const store= createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
export default store;