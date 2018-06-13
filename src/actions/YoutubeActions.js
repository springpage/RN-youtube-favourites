import { AsyncStorage } from 'react-native';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
const API_KEY ="AIzaSyC1AsnZDzJnadICvfQFAKrRLJjRfCGpOxo";

import{
  FETCH_VIDEOS,
  SAVE_LIKED_VIDEO,
  LOAD_LIKED_VIDEOS,
  REMOVE_LIKED_VIDEO
} from './types';


export const fetchVideos = (search_term) => async (dispatch) => {

  await YTSearch({key:API_KEY, term:search_term, maxResults:10},(videos) => {
    dispatch({type: FETCH_VIDEOS, payload: videos})
  });
}

let initialData = async () => {
  let videoArray=[], currentVideos='';

  try{
    currentVideos = await AsyncStorage.getItem('youtube_liked_videos');
    if (currentVideos){
      videoArray=JSON.parse(currentVideos);
    }
  }catch(e){
    console.log('error '+e);
  }

  return ({videoArray, currentVideos});
}


export const saveLikedVideo = (video) => async (dispatch) => {

  let {videoArray, currentVideos} = await initialData();
  videoArray = _.uniqBy(_.concat(videoArray, video), function(e){
    return e.id.videoId;
  });
  let newVideos = JSON.stringify(videoArray);
  await AsyncStorage.setItem('youtube_liked_videos', newVideos);
}

export const loadLikedVideos = () => async (dispatch) =>{
  let {videoArray, currentVideos} = await initialData();
  videoArray = _.uniqBy(videoArray, function(e){
    return e.id.videoId;
  });
  dispatch({type: LOAD_LIKED_VIDEOS, payload: videoArray});
}

export const removeLikedVideo = (video) => async (dispatch) => {
  let {videoArray, currentVideos} = await initialData();
  let videoUrl=video.id.videoId;
  videoArray=_.filter(videoArray, function(e){
    return e.id.videoId!=videoUrl;
  })
  let newVideos = JSON.stringify(videoArray);
  await AsyncStorage.setItem('youtube_liked_videos', newVideos);
  dispatch({type: REMOVE_LIKED_VIDEO, payload: videoArray});

}
