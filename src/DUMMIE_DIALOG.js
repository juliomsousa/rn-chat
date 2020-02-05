export default [
  {
    _id: 1,
    text: 'Hello developer! \nHow can I help you?',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    quickReplies: [
      {
        title: 'Subscribe newsletter',
        value: 'item_1',
      },
      {
        title: 'FAQ',
        value: 'item_2',
      },
      {
        title: 'Call me a supporter',
        value: 'item_3',
      },
    ]
  },
  {
    _id: 2,
    text: 'Hello',
    createdAt: new Date(),
    user: {
      _id: 0,
      name: 'Me',
      avatar: 'https://placeimg.com/140/140/any',
    },
  },
  {
    _id: 3,
    text: 'Let\'s chat',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
  },
  {
    _id: 3,
    text: 'Let\'s chat',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
  },
  {
    _id: 3,
    text: 'Let\'s chat',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
  },
].reverse();