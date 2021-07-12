// Basic Forms
// http://localhost:3000/isolated/exercise/07.tsx

import * as React from 'react'

function UsernameForm({
  onSubmitUsername,
}: {
  onSubmitUsername: (username: string) => void
}) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements as typeof event.currentTarget.elements & {
      usernameInput: HTMLInputElement
    }
    onSubmitUsername(formElements.usernameInput.value)
  };

  const inputEl = React.useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput" ref={inputEl} />
      </div>
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
