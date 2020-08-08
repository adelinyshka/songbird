import { combineReducers } from 'redux';
import songbirdReducer from './index';

export default combineReducers({
	songbird: songbirdReducer,
});
