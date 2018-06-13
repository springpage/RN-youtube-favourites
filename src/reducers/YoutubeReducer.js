import{
  FETCH_VIDEOS,
  LOAD_LIKED_VIDEOS,
  REMOVE_LIKED_VIDEO
} from '../actions/types';

const INITIAL_STATE ={videos:[], likedVideos:[]};

export default (state=INITIAL_STATE, action) =>{
  switch(action.type){
    case FETCH_VIDEOS:
      return {...state, videos:action.payload};
    case LOAD_LIKED_VIDEOS:
      return {...state, likedVideos:action.payload};
    case REMOVE_LIKED_VIDEO:
      return {...state, likedVideos:action.payload};
    default:
      return state;
  }
};
