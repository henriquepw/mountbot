import React, { useState } from 'react';

import Chat from '../Chat';

import { ReactComponent as BotImg } from '../../assets/bot.svg';
import './styles.css';

function FloatChat({ onClick, onComplete }) {
  const [isOpened, setOpened] = useState(false);

  function handleOnClick() {
    if (onClick) {
      onClick();
    }

    setOpened(state => !state);
  }

  return (
    <div className="floatchat-container">
      <div className={`chat ${isOpened ? 'is-visible' : ''}`}>
        <Chat onComplete={onComplete} />
      </div>
      <button className="float-bottom" type="button" onClick={handleOnClick}>
        <BotImg />
      </button>
    </div>
  );
}

export default FloatChat;
