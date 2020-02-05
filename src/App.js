import React from 'react'
import { Platform, View, Image, Alert, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
// import { GiftedChat, Send, Avatar, Day } from 'react-native-gifted-chat'
// import emojiUtils from 'emoji-utils'

import Chat from './Chat/Chat'
// import SlackMessage from './SlackMessage'

// import Message from './CustomMessage'

export default class App extends React.Component {
  state = {
    messages: [
      
    ],
  }



  handleEmailPress(email, matchIndex /*: number*/) {
    alert(`send email to ${email}`);
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <Text style={styles.title}>Chat</Text>
        </View>


        <Chat
          messages={[]}
          onSendMessage={(sentMessage) => {}}
          
          typingMessage={null}
          onTypingMessage={null}

          // messageObjectMap={null}          

        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 48,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BDD',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})