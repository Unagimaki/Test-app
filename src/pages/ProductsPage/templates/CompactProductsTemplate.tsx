import { ProductsList } from '../../../widgets/ProductsList/ProductsList'
import { ProductsToolbar } from '../../../widgets/ProductsToolbar/ProductsToolbar'
import type { ProductsPageTemplateProps } from './types'
import styles from './ProductsTemplates.module.scss'

export const CompactProductsTemplate = ({ toolbarProps, listProps }: ProductsPageTemplateProps) => {
  return (
    <section className={styles.compactLayout}>
      <div className={styles.compactToolbar}>
        <ProductsToolbar {...toolbarProps} />
      </div>

      <div className={styles.compactContent}>
        <ProductsList {...listProps} />
      </div>
    </section>
  )
}
