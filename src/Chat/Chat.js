import React from 'react'
import { View, StyleSheet, FlatList, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { Bubble } from './Bubbles';
import { InputBar } from './InputBar';
import DUMMIE_DIALOG from '../DUMMIE_DIALOG'


export default class Chat extends React.Component {
  state = {
    user: {
      _id: 0,
    },
    typingMessage: '',
    messages: DUMMIE_DIALOG,
  }

  onSend(newMsg) {
    this.setState(({ messages }) => ({
      messages: [this.createObjectMessage(newMsg), ...messages],
      typingMessage: '',
    }))
  }

  onSelectQuickReply(reply) {
    // alert(reply.title)
    this.onSend(reply.title)
  }

  createObjectMessage(message) {
    return {
      _id: Math.random() * 10,
      text: message,
      createdAt: new Date(),
      user: {
        _id: 0,
        name: 'Me',
        // avatar: 'https://placeimg.com/140/140/any',
      },
    };
  }

  handleSendButtonPress = () => {
    if (this.state.typingMessage.trim().length > 0) {
      this.onSend(this.state.typingMessage)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Chat messages */}
        <FlatList
          extraData={this.state}
          data={this.state.messages}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return this.state.user._id === item.user._id
              ? <Bubble text={item.text} avatar={'JM'} />
              : <Bubble
                text={item.text}
                avatar={'JM'}
                alignSide={'left'}
                onSelectQuickReply={quickReply => this.onSend(quickReply.title)}
                quickReplies={item.quickReplies}
              />
          }}
          inverted
        />

        {/* Message input */}
        <InputBar
          typingMessage={this.state.typingMessage}
          placeholder={'Type your message'}
          onChangeText={text => this.setState({ typingMessage: text })}
          onSend={this.handleSendButtonPress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  }
})