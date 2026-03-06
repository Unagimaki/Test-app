import { useMemo, type SelectHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './NumberSelect.module.scss'

type NumberSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> & {
  min?: number
  max?: number
}

export const NumberSelect = ({
  min = 1,
  max = 10,
  className,
  ...props
}: NumberSelectProps) => {
  const options = useMemo(() => {
    const safeMin = Math.floor(min)
    const safeMax = Math.floor(max)
    const start = Math.min(safeMin, safeMax)
    const end = Math.max(safeMin, safeMax)

    return Array.from({ length: end - start + 1 }, (_, index) => start + index)
  }, [min, max])

  return (
    <select {...props} className={clsx(styles.select, className)}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}
