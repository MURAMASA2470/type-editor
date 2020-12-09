import React, { useState } from 'react'
import '../assets/css/app.css'

const App: React.FC = (): JSX.Element => {

  const [ sentence, setSentence ] = useState('')

  const handleInput = (e: React.SyntheticEvent<EventTarget>): void => {
    // console.log((e.target as HTMLElement).innerText)
    setSentence((e.target as HTMLElement).innerText)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if(e.key === 'Enter') {
      e.preventDefault()
      setSentence('<br>' + sentence)
      console.log(document.getSelection()?.anchorOffset)
    }
  }

  return (
    <>
    <div
        contentEditable
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className="sentence"
    >
      {sentence}
    </div>
    </>
  )
}

export default App
