import React from 'react'
import Spinner from './ui-elements/spinner'
import Button from './ui-elements/button';

const { Default, Info, Success, Warning, Danger } = Button;

const App = () => {
  return (
    <div>
      <div>
        <h3>Spinner:</h3>
        <Spinner theme={{ speed: 1 }} />
      </div>
      <div>
        <h3>Buttons:</h3>
        <Default>Default</Default>
        <Success>Sucesso</Success>
        <Info>Info</Info>
        <Warning>Warning</Warning>
        <Danger>Danger</Danger>
      </div>

    </div>
  );
}

export default App
