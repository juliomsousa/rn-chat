import React from 'react';
import {
  View,
  ViewPropTypes,
  StyleSheet,
  Text
} from 'react-native';

import { Avatar, Day, utils } from 'react-native-gifted-chat';

export default class Message extends React.Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {

    return(
        <Text {...this.props} >test</Text>
    )
  }
}