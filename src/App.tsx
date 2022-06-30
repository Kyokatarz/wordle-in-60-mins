import React from 'react'
import './App.css'
import InputBar from './components/InputBar'
import WordHolder from './components/WordHolder'
import useFetchWords from './hooks/useFetchWords'

function App() {
  const [guessHistory, setGuessHistory] = React.useState<string[]>([])

  const [word] = useFetchWords()

  const onSubmit = (value: string) => {
    setGuessHistory([...guessHistory, value])
  }

  return (
    <div className='App'>
      <InputBar onSubmit={onSubmit} />
      {guessHistory.map((guessed) => (
        <WordHolder word={word} guessed={guessed} />
      ))}
    </div>
  )
}

export default React.memo(App)
