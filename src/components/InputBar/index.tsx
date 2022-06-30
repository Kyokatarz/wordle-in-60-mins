import React, { CSSProperties } from 'react'

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
}

type Props = {
  value: string
  onSubmit: (value: string) => void
}

const InputBar = ({ value, onSubmit }: Props) => {
  return (
    <div style={style}>
      <input type='text' />
      <button type='button'>Submit</button>
    </div>
  )
}

export default InputBar
