export type ProductResponse = {
    totalItems: number
    items: ProductItem[]
}

export type ProductItem = {
    code: string
    title: string
    manufacturer: string
    description: string
    price: string
    stock: number
}