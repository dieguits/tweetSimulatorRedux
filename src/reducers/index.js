import { combineReducers } from "redux";
import modalReducer from "./modalsReducers";
import validationsReducer from "./validationsReducer";
import tweetsReducer from './tweetReducer'

export default combineReducers({
	modals: modalReducer,
	validations: validationsReducer,
	tweets: tweetsReducer
});
