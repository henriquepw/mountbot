import React from 'react';

import { ChatBot, AmplifyTheme } from 'aws-amplify-react';

const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#F4A261',
  },
};

function Chat({ onComplete }) {
  return (
    <>
      <iframe
        src="https://d1ynr93g6z78ed.cloudfront.net/index.html"
        width="500px"
        height="500px"
      ></iframe>
    </>
  );
}

export default Chat;
