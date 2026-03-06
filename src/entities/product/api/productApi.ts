import { baseApi } from "../../../shared/api/baseApi"
import type { ApiResponse } from "../../../shared/api/types"
import type { ProductResponse } from "../model/types"

type GetProductsParams = {
  page: number
  take: number
  search?: string
}

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, GetProductsParams>({
      query: ({ page, take, search }) => ({
        url: "v1/stock",
        params: {
          Skip: (page - 1) * take,
          Take: take,
          ...(search ? { Filter: search } : {}),
        },
      }),
      transformResponse: (response: ApiResponse<ProductResponse>) => {
        return response.result
      }
    }),
  }),
})

export const { useGetProductsQuery } = productApi
