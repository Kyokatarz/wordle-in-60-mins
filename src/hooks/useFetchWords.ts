import React from 'react'
import axios from 'axios'

const useFetchWords = () => {
  const [word, setWord] = React.useState('')
  const [error, setError] = React.useState('')

  console.log({ word })

  React.useEffect(() => {
    const getWords = async () => {
      try {
        const word = await axios.get(
          'https://wordsapiv1.p.rapidapi.com/words/?letters=5&random=true',
          {
            headers: {
              'X-Mashape-Key':
                'b1712aea8cmsh61933a383dfa48dp1e3d0bjsn49e2c2cdbe3b',
            },
          },
        )
        setWord(word.data.word)
      } catch (error) {
        setError('Error occurred while fetching words')
      }
    }
    getWords()
  }, [])

  return [word, error]
}

export default useFetchWords
