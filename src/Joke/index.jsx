import React, { useState } from 'react';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likesUp, setLikesUp] = useState(likes);
  const [dislikesUp, setDislikesUp] = useState(dislikes);

  const handleLikeClick = () => {
    setLikesUp(likesUp + 1);
  };
  const handleDislikeClick = () => {
    setDislikesUp(dislikesUp + 1);
  };

  return (
    <div className={`joke ${likesUp > dislikesUp ? null : 'joke--not-funny'}`}>
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          className="btn-like btn-like--up"
          onClick={handleLikeClick}
        ></button>
        <span class="likes-count likes-count--up">{likesUp}</span>
        <button
          className="btn-like btn-like--down"
          onClick={handleDislikeClick}
        ></button>
        <span className="likes-count likes-count--down">{dislikesUp}</span>
      </div>
    </div>
  );
};
