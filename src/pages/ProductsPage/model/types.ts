export type SearchScope = 'all' | 'title' | 'description' | 'manufacturer'

export type ProductsPageState = {
  page: number
  take: number
  searchScope: SearchScope
  searchDraft: string
  search: string
}
