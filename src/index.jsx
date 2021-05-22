import React, { useState } from 'react';
import { render } from 'react-dom';
import { Jokes } from './Jokes';

const App = () => {
  const [listOfJokes, setListOfJokes] = useState([]);

  return (
    <>
      <div className="container">
        <main>
          <Jokes listOfJokes={listOfJokes} />
        </main>
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
