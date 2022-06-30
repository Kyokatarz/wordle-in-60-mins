import React from 'react'
import './App.css'
import InputBar from './components/InputBar'
import WordHolder from './components/WordHolder'
import useFetchWords from './hooks/useFetchWords'

function App() {
  const [value, setValue] = React.useState('')
  const [submitHistory, setSubmitHistory] = React.useState<string[]>([])

  const [word] = useFetchWords()

  const onSubmit = (value: string) => {
    setSubmitHistory([...submitHistory, value])
    setValue('')
  }

  return (
    <div className='App'>
      <InputBar value={value} onSubmit={onSubmit} />
      <WordHolder word={word} />
    </div>
  )
}

export default React.memo(App)
