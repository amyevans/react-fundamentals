// Basic Forms
// http://localhost:3000/isolated/exercise/07.tsx

import * as React from 'react';
import { useState } from 'react';
import { getRandomUsername } from '../utils';

interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

function UsernameForm({
  onSubmitUsername,
}: {
  onSubmitUsername: (username: string) => void
}) {
  const handleSubmit = (event: React.FormEvent<UsernameFormElement>) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    onSubmitUsername(formElements.usernameInput.value)
  };
  const handleChange = (event) => {
    setUsername(event.currentTarget.value);
  };
  const handleRandom = () => {
    setUsername(getRandomUsername());
  };

  const [username, setUsername] = React.useState('');

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput" value={username} onChange={handleChange} />
      </div>
      <button onClick={handleRandom}>Random</button>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username: string) =>
    alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export {App}
