import React from 'react'
import logo from './logo.svg'
import './App.css'
import useFetchWords from './hooks/useFetchWords'
import WordHolder from './components/WordHolder'

function App() {
  const [word] = useFetchWords()

  console.log('Render')

  return (
    <div className='App'>
      <WordHolder word={word} />
    </div>
  )
}

export default React.memo(App)
