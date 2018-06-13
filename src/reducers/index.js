import {combineReducers} from 'redux';
import YoutubeReducer from './YoutubeReducer';

export default combineReducers({
  youtube:YoutubeReducer,
});
