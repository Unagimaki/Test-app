import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
    isLoading?: boolean
    isActive?: boolean
  }
>

export const Button = ({
  children,
  className,
  variant = 'primary',
  isLoading = false,
  isActive = false,
  disabled,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || isLoading

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={clsx(
        styles.button,
        styles[`button_${variant}`],
        {
          [styles.button_active]: isActive,
          [styles.button_loading]: isLoading,
        },
        className,
      )}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}
