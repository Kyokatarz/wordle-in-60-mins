import React from 'react'

type Props = {
  word: string
}

const WordHolder = ({ word }: Props) => {
  return <div>{word}</div>
}

export default React.memo(WordHolder)
