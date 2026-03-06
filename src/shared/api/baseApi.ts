import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { env } from "../config/env"

const base64 = btoa(`${env.apiUsername}:${env.apiPassword}`)

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: env.apiBaseUrl,

    prepareHeaders: (headers) => {
      headers.set("Authorization", `Basic ${base64}`)
      return headers
    },
  }),

  endpoints: () => ({}),
})
