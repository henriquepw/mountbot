import React from 'react';

import Chat from '../components/Chat';

function Home() {
  function handleComplete(error, confirmation) {
    if (error) {
      console.warn('Bot conversation failed');
      return null;
    }

    console.log(`Success: ${JSON.stringify(confirmation, null, 2)}`);
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
      <Chat onComplete={handleComplete} />
    </main>
  );
}

export default Home;
