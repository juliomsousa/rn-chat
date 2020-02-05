import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const Bubble = (props) => {

  const {
    alignSide = 'right',
    text = '',
    avatar = '',
    quickReplies = [],
    onSelectQuickReply = null,
  } = props;

  const customStyle = (received, sent) => alignSide === 'left' ? received : sent;

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'flex-end',
        justifyContent: customStyle('flex-start', 'flex-end'),
      }}
    >
      {/* Avatar */}
      {alignSide === 'left' ? <Avatar avatar={avatar} /> : null}

      <View
        style={{
          padding: 10,
          marginHorizontal: 10,
          backgroundColor: customStyle('#DDD', '#5656F4'),
          borderColor: '#DDD',
          borderWidth: 1,
          borderRadius: 10,
          borderBottomLeftRadius: customStyle(0, null),
          borderBottomRightRadius: customStyle(null, 0),
        }}
      >
        <Text style={{ color: customStyle('#000', '#FFF') }} >{text}</Text>
        {
          quickReplies.length > 0
            ? <QuickReply
              quickReplies={quickReplies}
              onSelectQuickReply={onSelectQuickReply}
            />
            : null
        }

      </View>
    </View>
  )
}

const Avatar = (props) => (
  <View
    style={{
      height: 40,
      width: 40,
      borderRadius: 40 / 2,
      backgroundColor: '#DDD',
      borderWidth: 1,
      borderColor: '#DDD',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text>{props.avatar}</Text>
  </View>
)

const QuickReply = (props) => {

  const {
    quickReplies = [],
    onSelectQuickReply,
  } = props;

  return (
    <View
      style={{
        marginTop: 16,
      }}
    >
      {quickReplies.map(item => (
        <View
          style={{
            marginVertical: 2,
            padding: 5,
            borderRadius: 6,
            backgroundColor: '#FFF',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text onPress={() => onSelectQuickReply(item)} >{item.title}</Text>
        </View>
      ))}
    </View>
  )
}

export { Bubble }