import { useEffect, useRef } from 'react'
import { ProductCard, useGetProductsQuery } from '../../entities/product'
import type { ProductItem } from '../../entities/product'
import { Button, useI18n, useToast } from '../../shared'
import type { SearchScope } from '../../pages/ProductsPage/model/types'
import styles from './ProductsList.module.scss'

export type ProductsListProps = {
  page: number
  take: number
  search: string
  searchScope: SearchScope
  onPageChange: (page: number) => void
}

const getVisiblePages = (currentPage: number, totalPages: number) => {
  const start = Math.max(1, currentPage - 2)
  const end = Math.min(totalPages, start + 4)
  const adjustedStart = Math.max(1, end - 4)

  return Array.from({ length: end - adjustedStart + 1 }, (_, index) => adjustedStart + index)
}

export const ProductsList = ({ page, take, search, searchScope, onPageChange }: ProductsListProps) => {
  const { t } = useI18n()
  const { showToast } = useToast()
  const lastErrorToastAtRef = useRef(0)

  const { data, isLoading, isFetching, isError, refetch } = useGetProductsQuery(
    {
      page,
      take,
      search,
    },
    {
      refetchOnMountOrArgChange: true,
    },
  )

  useEffect(() => {
    if (!isError || isFetching) {
      return
    }

    const now = Date.now()

    if (now - lastErrorToastAtRef.current > 4000) {
      showToast({
        type: 'error',
        message: t('productsList.retryToast'),
      })
      lastErrorToastAtRef.current = now
    }

    const retryId = window.setTimeout(() => {
      void refetch()
    }, 1200)

    return () => {
      window.clearTimeout(retryId)
    }
  }, [isError, isFetching, refetch, showToast, t])

  if (isLoading || isFetching) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.loader} aria-label={t('productsList.loadingAria')} />
      </div>
    )
  }

  if (isError && !data) {
    return <div className={styles.errorText}>{t('productsList.retryInline')}</div>
  }

  const normalizedSearch = search.trim().toLowerCase()
  const items = data?.items ?? []
  const totalItems = data?.totalItems ?? 0
  const totalPages = Math.max(1, Math.ceil(totalItems / take))
  const visiblePages = getVisiblePages(page, totalPages)

  const filteredItems =
    !normalizedSearch || searchScope === 'all'
      ? items
      : items.filter((product) => {
          const byScope: Record<Exclude<SearchScope, 'all'>, string> = {
            title: product.title,
            description: product.description,
            manufacturer: product.manufacturer,
          }

          return byScope[searchScope].toLowerCase().includes(normalizedSearch)
        })

  return (
    <div>
      <div className={styles.product_title}>{t('productsList.loadedCount', { count: filteredItems.length })}</div>
      <div className={styles.products_list}>
        {filteredItems.map((product: ProductItem) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>

      <div className={styles.pagination}>
        <Button type="button" variant="secondary" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
          {t('productsList.prev')}
        </Button>

        <div className={styles.pages}>
          {visiblePages.map((pageNumber) => (
            <Button
              key={pageNumber}
              type="button"
              variant="secondary"
              isActive={pageNumber === page}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </Button>
          ))}
        </div>

        <Button
          type="button"
          variant="secondary"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          {t('productsList.next')}
        </Button>
      </div>

      <div className={styles.pageInfo}>
        {t('productsList.pageInfo', {
          page,
          totalPages,
          totalItems,
        })}
      </div>
    </div>
  )
}
