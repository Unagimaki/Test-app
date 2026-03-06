import type { InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Input.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean
}

export const Input = ({ className, hasError = false, disabled, ...props }: InputProps) => {
  return (
    <input
      {...props}
      disabled={disabled}
      className={clsx(styles.input, { [styles.input_error]: hasError }, className)}
    />
  )
}
