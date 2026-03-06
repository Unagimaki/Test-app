import { Button, Input, NumberSelect, useI18n } from '../../shared'
import type { SearchScope } from '../../pages/ProductsPage/model/types'
import styles from './ProductsToolbar.module.scss'

export type ProductsToolbarProps = {
  searchValue: string
  take: number
  searchScope: SearchScope
  onSearchValueChange: (value: string) => void
  onTakeChange: (value: number) => void
  onSearchScopeChange: (value: SearchScope) => void
  onSearchClick: () => void
}

export const ProductsToolbar = ({
  searchValue,
  take,
  searchScope,
  onSearchValueChange,
  onTakeChange,
  onSearchScopeChange,
  onSearchClick,
}: ProductsToolbarProps) => {
  const { t } = useI18n()

  return (
    <section className={styles.container}>
      <Button type="button" className={styles.searchButton} onClick={onSearchClick}>
        {t('toolbar.searchButton')}
      </Button>

      <div className={styles.inputs}>
        <div className={styles.searchField}>
          <label htmlFor="products-search-input" className={styles.label}>
            {t('toolbar.searchLabel')}
          </label>
          <Input
            id="products-search-input"
            placeholder={t('toolbar.searchPlaceholder')}
            value={searchValue}
            onChange={(event) => onSearchValueChange(event.target.value)}
          />
        </div>

        <div className={styles.scopeField}>
          <label htmlFor="products-search-scope-select" className={styles.label}>
            {t('toolbar.scopeLabel')}
          </label>
          <select
            id="products-search-scope-select"
            className={styles.scopeSelect}
            value={searchScope}
            onChange={(event) => onSearchScopeChange(event.target.value as SearchScope)}
          >
            <option value="all">{t('toolbar.scopeAll')}</option>
            <option value="title">{t('toolbar.scopeTitle')}</option>
            <option value="description">{t('toolbar.scopeDescription')}</option>
            <option value="manufacturer">{t('toolbar.scopeManufacturer')}</option>
          </select>
        </div>

        <div className={styles.countField}>
          <label htmlFor="products-count-select" className={styles.label}>
            {t('toolbar.takeLabel')}
          </label>
          <NumberSelect
            id="products-count-select"
            aria-label={t('toolbar.takeAria')}
            min={1}
            max={10}
            value={take}
            onChange={(event) => onTakeChange(Number(event.target.value))}
          />
        </div>
      </div>
    </section>
  )
}
