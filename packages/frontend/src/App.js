import React, { Component } from 'react';

import Amplify from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';

import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

// Imported default theme can be customized by overloading attributes
const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#ff6600',
  },
};

function App() {
  function handleComplete(err, confirmation) {
    if (err) {
      alert('Bot conversation failed');
      return null;
    }

    alert(`Success: ${JSON.stringify(confirmation, null, 2)}`);
    return 'Trip booked. Thank you! what would you like to do next?';
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Chatbot&apos;s Dream-Team!</h1>
      </header>
      <ChatBot
        title="My Bot"
        theme={myTheme}
        botName="BookTrip_dev"
        welcomeMessage="Hello, what can i help?"
        onComplete={handleComplete}
        clearOnComplete
        conversationModeOn={false}
      />
    </div>
  );
}

export default App;
