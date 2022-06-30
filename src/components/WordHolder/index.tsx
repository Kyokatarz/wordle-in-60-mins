import React, { CSSProperties } from 'react'
import LetterTile from './components/LetterTile'

type Props = {
  word: string
}

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
}

const WordHolder = ({ word }: Props) => {
  return (
    <div style={style}>
      {word.split('').map((letter) => (
        <LetterTile letter={letter} />
      ))}
    </div>
  )
}

export default React.memo(WordHolder)
