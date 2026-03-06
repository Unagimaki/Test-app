import type { ComponentType } from 'react'
import { CompactProductsTemplate } from './CompactProductsTemplate'
import { DefaultProductsTemplate } from './DefaultProductsTemplate'
import type { ProductsPageTemplateProps, ProductsTemplateKey } from './types'

export const productsPageTemplates = {
  default: DefaultProductsTemplate,
  compact: CompactProductsTemplate,
} as const satisfies Record<ProductsTemplateKey, ComponentType<ProductsPageTemplateProps>>

export type { ProductsPageTemplateProps, ProductsTemplateKey } from './types'
