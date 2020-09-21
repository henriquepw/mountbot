import React, { useState } from 'react';



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
      <iframe
        src="https://d1ynr93g6z78ed.cloudfront.net/index.html"
        width="500px"
        height="500px"
      ></iframe> 
      </div>
      <button className="float-bottom" type="button" onClick={handleOnClick}>
        <BotImg />
      </button>
    </div>
  );
}

export default FloatChat;
