import React from 'react';
import Joke from '../Joke';

export const Jokes = (props) => {
  return (
    <>
      <ul>
        {props.listOfJokes.map((joke) => {
          <Joke {...joke} key={joke.id} />;
        })}
      </ul>
    </>
  );
};
