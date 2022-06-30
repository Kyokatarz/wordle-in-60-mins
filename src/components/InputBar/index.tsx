import React, { CSSProperties, ReactText } from 'react'

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
}

type Props = {
  onSubmit: (value: string) => void
}

const InputBar = ({ onSubmit }: Props) => {
  const [value, setValue] = React.useState('')

  const onButtonClick = () => {
    onSubmit(value)
    setValue('')
  }

  const onValueChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length > 5) return
    setValue(e.target.value)
  }

  return (
    <div style={style}>
      <input type='text' value={value} onChange={onValueChange} />
      <button type='button' onClick={onButtonClick}>
        Submit
      </button>
    </div>
  )
}

export default InputBar
