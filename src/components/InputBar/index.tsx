import React, { CSSProperties } from 'react'

const style: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
}

type Props = {
  onSubmit: (value: string) => void
}

const InputBar = ({ onSubmit }: Props) => {
  const [value, setValue] = React.useState('')

  const onButtonClick = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(value)
    setValue('')
  }

  const onValueChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length > 5) return
    setValue(e.target.value)
  }

  return (
    <form onSubmit={onButtonClick} style={style}>
      <input type='text' value={value} onChange={onValueChange} />
      <button type='submit' onClick={onButtonClick}>
        Submit
      </button>
    </form>
  )
}

export default InputBar
