## View all my projects at https://springpageportfolio.blogspot.com/


# youtube-favourites
an react native app


## Demo for app
- Youtube: https://www.youtube.com/watch?v=8vzB3ZuwRnc
- Expo: https://expo.io/@spring6166/favourite-youtube-and-weather

## About this app
- This is a simple app that fetch videos from youtube using youtube api, after user search. Then it list the videos and user can click and play it.
- User can also click like video, then the liked video will be save into the device storage. All the liked videos will be listed and displayed at the Liked Video Screen.
- If User not like video anymore, he can click unlike and the video will be remove from both screen and device storage.

## Introduce
This is a react native app that I built using expo. You can try to run my app by expo.
Here are some libraries I used in this app.
+ In this app, I use library youtube-api-search to make search request to Youtube API. I actually change a bit the library and add the 
param maxResults so I can get 10 results from Youtube. Default the library only return 5 results.
+ Use redux, react-redux to keep the state of the main array of videos.
+ Redux-thunk so I can make async request.
+ For theme, I use native base as well as react-navigation.
+ AsyncStorage to read and save data to device.
+ lodash to do some function like get Uniq array

