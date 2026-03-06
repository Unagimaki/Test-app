import type { ProductItem } from '../../model/types'
import styles from './ProductCard.module.scss'

type ProductCardProps = {
  product: ProductItem
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.title}>{product.title}</h3>
        <span className={styles.code}>#{product.code}</span>
      </header>

      <p className={styles.manufacturer}>Manufacturer: {product.manufacturer}</p>
      <p className={styles.description}>{product.description}</p>

      <footer className={styles.footer}>
        <span className={styles.price}>Price: {product.price}</span>
        <span className={styles.stock}>Stock: {product.stock}</span>
      </footer>
    </article>
  )
}
