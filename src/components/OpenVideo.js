import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class OpenVideo extends Component {
  render() {
    let video = this.props.navigation.getParam('video');
    videoUrl=`https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <WebView
        source={{uri: videoUrl}}
      />
    );
  }
}
