import { useLocation, useNavigate } from 'react-router-dom'
import { Button, useI18n } from '../../shared'
import styles from './Header.module.scss'

export const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useI18n()

  const navItems = [
    { to: '/', label: t('header.products') },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.logo}>{t('header.logo')}</div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Button
            key={item.to}
            type="button"
            variant="secondary"
            isActive={location.pathname === item.to}
            onClick={() => navigate(item.to)}
          >
            {item.label}
          </Button>
        ))}
      </nav>
    </header>
  )
}
