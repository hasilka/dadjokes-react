import React, { useState } from 'react';
import './style.css';
import jokes from '.jokes';

export const Joke = (jokes) => {
  const [like, setLikes] = useState(0);
  const handlePlusClick = () => {
    setLikes(like + 1);
  };
  return (
    <div className="jokes">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={jokes.avatar} />
          <p className="user-name">{jokes.name}</p>
        </div>

        <p className="joke__text">{jokes.text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handlePlusClick}
        ></button>
        <span id="likes-up" class="likes-count likes-count--up">
          {jokes.likes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handlePlusClick}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {jokes.dislakes}
        </span>
      </div>
    </div>
  );
};
