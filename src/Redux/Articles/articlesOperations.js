import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articlesApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net',
  }),
  tagTypes: ['articles'],
  endpoints: builder => ({
    fetchArticles: builder.query({
      query: ({ skip = 0, keyword = '' }) =>
        `/v3/articles?_limit=20&_start=${skip}&title_contains=${keyword}`,

      providesTags: ['articles'],
    }),
    fetchArticlesById: builder.query({
      query: id => `/v3/articles/${id}`,
    }),
    providesTags: ['articles'],
  }),
});

export const { useFetchArticlesQuery, useFetchArticlesByIdQuery } = articlesApi;
