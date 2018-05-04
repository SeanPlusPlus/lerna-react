import React from 'react';
import Message from './Message';

const Headline = () => React.createElement(
  'div',
  null,
  React.createElement(Message, null),
  React.createElement(
    'pre',
    null,
    'dude'
  )
);

export default Headline;