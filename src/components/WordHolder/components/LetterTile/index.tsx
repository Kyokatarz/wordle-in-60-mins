import React, { CSSProperties } from 'react'

type Props = {
  letter: string
}

const style: CSSProperties = {
  width: '20px',
  height: '20px',
  border: '1px solid black',
  padding: 5,
}
const LetterTile = ({ letter }: Props) => {
  return <div style={style}>{letter}</div>
}

export default LetterTile
