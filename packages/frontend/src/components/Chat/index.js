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
    <ChatBot
      title="MountBot"
      theme={myTheme}
      botName="BookTrip_dev"
      welcomeMessage="Hello :), what can i help?"
      onComplete={onComplete}
      clearOnComplete
      conversationModeOn={false}
    />
  );
}

export default Chat;
