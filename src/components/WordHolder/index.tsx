import React, { CSSProperties } from 'react'
import LetterTile from './components/LetterTile'

type Props = {
  word: string
  guessed: string
}

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
}

const WordHolder = ({ word, guessed }: Props) => {
  return (
    <div style={style}>
      {word.split('').map((letter, index) => {
        const isRightPlace = guessed[index] === letter
        const isNotInTheWord = !word.includes(letter)
        const isWrongPlace = word.includes(letter) && !isRightPlace

        return (
          <LetterTile
            letter={letter}
            isRightPlace={isRightPlace}
            isNotInTheWord={isNotInTheWord}
            isWrongPlace={isWrongPlace}
          />
        )
      })}
    </div>
  )
}

export default React.memo(WordHolder)
