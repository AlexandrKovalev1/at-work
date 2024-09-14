import { Typography } from '../typography'
import s from './text-field.module.scss'
import { ChangeEvent, ComponentProps, useState } from 'react'
import { CrossIcon } from '../../assets/icons/CrossIcon.tsx'

type Props = {
  label?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string
  onClearInput?: () => void
  errorMessage?: string
} & Omit<ComponentProps<'input'>, 'type'>

export const TextField = ({
  label,
  value,
  onChange,
  onClearInput,
  errorMessage,
  ...props
}: Props) => {
  const [text, setText] = useState('')

  const displayClearButton = (onClearInput && value) || (value === undefined && text)

  const inputValue = value !== undefined ? value : text

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    } else {
      setText(e.currentTarget.value)
    }
  }

  const onCrossIconHandler = () => {
    if (onClearInput) {
      onClearInput()
    } else {
      setText('')
    }
  }
  return (
    <div className={s.wrapper}>
      {label && (
        <Typography as={'label'} variant={'text1-semibold'}>
          {label}
        </Typography>
      )}
      <div className={s.inputWrapper}>
        <input
          type="text"
          className={`${s.input} ${errorMessage && s.error}`}
          {...props}
          onChange={onChangeHandler}
          value={inputValue}
        />
        {displayClearButton && <CrossIcon className={s.icon} onClick={onCrossIconHandler} />}
      </div>
      {errorMessage && (
        <Typography as={'small'} variant={'caption'} className={s.error}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}
