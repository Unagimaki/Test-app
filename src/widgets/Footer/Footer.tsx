import { useI18n } from '../../shared'
import styles from './Footer.module.scss'

export const Footer = () => {
  const { t } = useI18n()

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>{t('footer.logo')}</div>
      <span className={styles.caption}>{t('footer.caption')}</span>
    </footer>
  )
}
