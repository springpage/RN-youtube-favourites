import React, { Component } from "react";
import { Image } from "react-native";
import {connect} from 'react-redux';
import * as actions from '../actions';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Text,
  Card,
  CardItem,
  List,

} from "native-base";
import styles from "./styles";



class Youtube extends Component {
  state={search_term:''}

  youtubeSearch(){
    const {search_term} = this.state;
    this.props.fetchVideos(search_term);
  }

  saveLikedVideo(video){
    let videoId=video.id.videoId;
    this.props.saveLikedVideo(video);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Youtube</Title>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <Item>
            <Input
              placeholder="Search"
              value={this.state.search_term}
              onChangeText={search_term => this.setState({search_term})}
            />

            <Button
              transparent
              onPress={this.youtubeSearch.bind(this)}
            >
              <Icon name="search" />
            </Button>
          </Item>

          <List
            dataArray={this.props.videos}
            renderRow={video =>
              {
                let videoTitle=video.snippet.title;
                let channelTitle=video.snippet.channelTitle;
                let thumbnailUrl=video.snippet.thumbnails.high.url;

                return(
                  <Card style={styles.mb}>
                    <CardItem>
                      <Left>

                        <Body>
                          <Text>{videoTitle}</Text>
                          <Text note>{channelTitle}</Text>
                        </Body>
                      </Left>
                    </CardItem>

                    <CardItem cardBody button onPress={() => this.props.navigation.navigate('OpenVideo',{video})}>
                      <Image
                        style={{
                          resizeMode: "cover",
                          width: null,
                          height: 200,
                          flex: 1
                        }}
                        source={{uri:thumbnailUrl}}
                      />
                    </CardItem>
                    <CardItem style={{ paddingVertical: 0 }}>
                      <Left>
                        <Button
                          onPress={() => this.saveLikedVideo(video)}
                          transparent
                        >
                          <Icon active name="thumbs-up" />
                          <Text>Like this video</Text>
                        </Button>
                      </Left>

                    </CardItem>
                  </Card>
                )
              }
            }
          />



        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state){
  return {videos: state.youtube.videos}
}

export default connect(mapStateToProps, actions)(Youtube);
