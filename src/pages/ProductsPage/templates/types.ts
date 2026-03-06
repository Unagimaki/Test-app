import type { ProductsListProps } from '../../../widgets/ProductsList/ProductsList'
import type { ProductsToolbarProps } from '../../../widgets/ProductsToolbar/ProductsToolbar'

export type ProductsTemplateKey = 'default' | 'compact'

export type ProductsPageTemplateProps = {
  toolbarProps: ProductsToolbarProps
  listProps: ProductsListProps
}
