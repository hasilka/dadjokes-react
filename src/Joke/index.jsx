import React, { useState } from 'react';

export const Joke = (props) => {
  const [like, setLikes] = useState();
  const handlePlusClick = () => {
    setLikes(like + 1);
  };
  return (
    <div className={`joke`}>
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={joke.avatar} />
          <p className="user-name">{joke.name}</p>
        </div>

        <p className="joke__text">{joke.text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handlePlusClick}
        >
          {' '}
        </button>
        <span id="likes-up" class="likes-count likes-count--up">
          {joke.likes}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handlePlusClick}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {joke.dislake}
        </span>
      </div>
    </div>
  );
};
