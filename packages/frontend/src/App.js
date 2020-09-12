import React from 'react';

import Amplify from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';

import awsconfig from './aws-exports';
import './styles.css';

Amplify.configure(awsconfig);

const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#F4A261',
  },
};

function App() {
  function handleComplete(error, confirmation) {
    if (error) {
      alert('Bot conversation failed');
      return null;
    }

    alert(`Success: ${JSON.stringify(confirmation, null, 2)}`);
    return 'Trip booked. Thank you! what would you like to do next?';
  }

  return (
    <main className="app">
      <header className="app-header">
        <a
          href="https://github.com/henry-ns/chatbot-gama"
          rel="noopener noreferrer"
          target="_blank"
        >
          About
        </a>
      </header>
      <ChatBot
        title="MountBot"
        theme={myTheme}
        botName="BookTrip_dev"
        welcomeMessage="Hello :), what can i help?"
        onComplete={handleComplete}
        clearOnComplete
        conversationModeOn={false}
      />
    </main>
  );
}

export default App;
