import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root, Spinner } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import {Font} from 'expo';
import { Provider } from 'react-redux';
import store from './src/store';


import Home from './src/screens/Home';
import Youtube from './src/screens/Youtube';
import LikedVideo from './src/screens/LikedVideo';
import OpenVideo from './src/components/OpenVideo';
import SideBar from './src/screens/sidebar';


export default class App extends React.Component {

    state={font_loading: true}

    async componentWillMount() {

      await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
      this.setState({ font_loading: false });

      console.ignoredYellowBox = ['Setting a timer'];
    }

    render() {

      if(this.state.font_loading) return <View><Spinner /></View>;

      console.log('Start Run');

      const Drawer = DrawerNavigator(
        {
          Home: { screen: Home },
          Youtube: { screen: Youtube },
          LikedVideo: { screen: LikedVideo },
        },
        {
          initialRouteName: "Home",
          contentOptions: {
            activeTintColor: "#e91e63"
          },
          contentComponent: props => <SideBar {...props} />
        }
      );

      const AppNavigator = StackNavigator(
        {
          Drawer: { screen: Drawer },
          Home: { screen: Home },
          Youtube: { screen: Youtube },
          LikedVideo: { screen: LikedVideo },
          OpenVideo: { screen: OpenVideo },

        },
        {
          initialRouteName: "Drawer",
          headerMode: "none"
        }
      );

      return (
        <Provider store={store}>
          <AppNavigator />
        </Provider>

      );
    }
}
