import React, { CSSProperties } from 'react'

type Props = {
  letter: string
  isWrongPlace: boolean
  isRightPlace: boolean
  isNotInTheWord: boolean
}

type makeStylesType = (args: Partial<Props>) => CSSProperties

const makeStyles: makeStylesType = ({
  isNotInTheWord,
  isRightPlace,
  isWrongPlace,
}) => {
  let conditionalStyles: CSSProperties = {}

  switch (true) {
    case isNotInTheWord:
      conditionalStyles = {
        backgroundColor: 'grey',
      }
      break
    case isRightPlace:
      conditionalStyles = {
        backgroundColor: 'green',
      }
      break
    case isWrongPlace:
      conditionalStyles = {
        backgroundColor: 'orange',
      }
      break
    default:
      break
  }

  return {
    width: '20px',
    height: '20px',
    border: '1px solid black',
    padding: 5,
    ...conditionalStyles,
  }
}
const LetterTile = ({
  letter,
  isNotInTheWord,
  isRightPlace,
  isWrongPlace,
}: Props) => {
  return (
    <div style={makeStyles({ isRightPlace, isWrongPlace, isNotInTheWord })}>
      {letter}
    </div>
  )
}

export default LetterTile
