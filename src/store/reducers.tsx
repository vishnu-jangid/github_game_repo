import { combineReducers } from "redux";
import game from './game/reducer'

const appReducer = combineReducers({ game });

export default (state: any, action: any) => {
  return appReducer(state, action);
};