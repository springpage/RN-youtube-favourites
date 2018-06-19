import React, { Component } from 'react';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from 'native-base';

import styles from './styles';

class Home extends Component {
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
            <Title>Start</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Button disabled info full style={styles.mb15}>
            <Text>Open Drawer to Start</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Home;
