import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../app/store/store'
import { env } from '../../shared/config/env'
import { applySearch, setPage, setSearchDraft, setSearchScope, setTake } from './model/productsPageSlice'
import { productsPageTemplates } from './templates'

export const ProductsPage = () => {
  const dispatch = useDispatch()
  const { page, take, searchScope, searchDraft, search } = useSelector(
    (state: RootState) => state.productsPage,
  )

  const Template = productsPageTemplates[env.productsTemplate] ?? productsPageTemplates.default
console.log('template:', env.productsTemplate)
  
  return (
    <Template
      toolbarProps={{
        searchValue: searchDraft,
        take,
        searchScope,
        onSearchValueChange: (value) => dispatch(setSearchDraft(value)),
        onTakeChange: (value) => dispatch(setTake(value)),
        onSearchScopeChange: (value) => dispatch(setSearchScope(value)),
        onSearchClick: () => dispatch(applySearch()),
      }}
      listProps={{
        page,
        take,
        search,
        searchScope,
        onPageChange: (nextPage) => dispatch(setPage(nextPage)),
      }}
    />
  )
}
