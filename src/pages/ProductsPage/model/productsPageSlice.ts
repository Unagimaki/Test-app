import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ProductsPageState, SearchScope } from './types'

const initialState: ProductsPageState = {
  page: 1,
  take: 10,
  searchScope: 'all',
  searchDraft: '',
  search: '',
}

const productsPageSlice = createSlice({
  name: 'productsPage',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setTake: (state, action: PayloadAction<number>) => {
      state.take = action.payload
      state.page = 1
    },
    setSearchScope: (state, action: PayloadAction<SearchScope>) => {
      state.searchScope = action.payload
    },
    setSearchDraft: (state, action: PayloadAction<string>) => {
      state.searchDraft = action.payload
    },
    applySearch: (state) => {
      state.search = state.searchDraft.trim()
      state.page = 1
    },
  },
})

export const { setPage, setTake, setSearchScope, setSearchDraft, applySearch } = productsPageSlice.actions
export const productsPageReducer = productsPageSlice.reducer
