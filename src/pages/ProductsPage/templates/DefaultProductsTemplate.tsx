import { ProductsList } from '../../../widgets/ProductsList/ProductsList'
import { ProductsToolbar } from '../../../widgets/ProductsToolbar/ProductsToolbar'
import type { ProductsPageTemplateProps } from './types'
import styles from './ProductsTemplates.module.scss'

export const DefaultProductsTemplate = ({ toolbarProps, listProps }: ProductsPageTemplateProps) => {
  return (
    <section className={styles.defaultLayout}>
      <ProductsToolbar {...toolbarProps} />
      <ProductsList {...listProps} />
    </section>
  )
}
