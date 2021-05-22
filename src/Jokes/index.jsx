import React from 'react';

import { Joke } from '../Joke';

export const Jokes = (props) => {
  return (
    <>
      <ul>
        {props.listOfJokes.map((Joke) => (
          <Joke
            key={joke.id}
            id={joke.id}
            avatar={joke.avatar}
            name={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislakes={joke.dislakes}
          ></Joke>
        ))}
      </ul>
    </>
  );
};
