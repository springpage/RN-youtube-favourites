import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Body,
  Left,
  Right,
  Icon,
  Text,
  Card,
  CardItem,
  List
} from 'native-base';
import styles from './styles';

class LikedVideo extends Component {
  componentWillMount() {
    this.props.loadLikedVideos();
  }

  removeLikedVideo(video) {
    this.props.removeLikedVideo(video);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Liked Videos</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <List
            dataArray={this.props.likedVideos}
            renderRow={video => {
              let videoTitle = video.snippet.title;
              let channelTitle = video.snippet.channelTitle;
              let thumbnailUrl = video.snippet.thumbnails.high.url;

              return (
                <Card style={styles.mb}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>{videoTitle}</Text>
                        <Text note>{channelTitle}</Text>
                      </Body>
                    </Left>
                  </CardItem>

                  <CardItem
                    cardBody
                    button
                    onPress={() =>
                      this.props.navigation.navigate('OpenVideo', { video })
                    }
                  >
                    <Image
                      style={{
                        resizeMode: 'cover',
                        width: null,
                        height: 200,
                        flex: 1
                      }}
                      source={{ uri: thumbnailUrl }}
                    />
                  </CardItem>
                  <CardItem style={{ paddingVertical: 0 }}>
                    <Left>
                      <Button
                        onPress={() => this.removeLikedVideo(video)}
                        transparent
                      >
                        <Icon active name="thumbs-down" />
                        <Text>Unlike this video</Text>
                      </Button>
                    </Left>
                  </CardItem>
                </Card>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { likedVideos: state.youtube.likedVideos };
}

export default connect(
  mapStateToProps,
  actions
)(LikedVideo);
