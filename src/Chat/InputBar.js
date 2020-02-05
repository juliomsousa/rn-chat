import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const InputBar = (props) => {

  const {
    typingMessage = '',
    placeholder = '',
    onChangeText = null,
    onSend = null,
  } = props;

  return (
    <View style={styles.container} >
      <TextInput
        style={styles.textInput}
        value={typingMessage}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'#CCC'}
        multiline
      />
      <TouchableOpacity style={styles.sendButton} onPress={onSend}>
        <Image
          source={require('./send.png')}
          resizeMode={'cover'}
          style={styles.sendButtonImage}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#5656F4',
  },
  textInput: {
    flex: 1,
    minHeight: 34,
    maxHeight: 100,
    paddingVertical: 0,
    backgroundColor: '#5656F4',
    marginHorizontal: 10,
    color: '#FFF',
  },
  sendButton: {
    height: 38,
    minWidth: 38,
    borderRadius: 38 / 2,
    marginLeft: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  sendButtonImage: {
    height: 20,
    width: 20,
  }
})

export { InputBar };