import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPosts } from '../../interfases/interfase.posts';

interface IQueryObj {
  skip: number;
  keyword: string;
}

export const articlesApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net',
  }),
  tagTypes: ['articles'],
  endpoints: builder => ({
    fetchArticles: builder.query<IPosts[], IQueryObj>({
      query: ({ skip = 0, keyword = '' }: IQueryObj) =>
        `/v3/articles?_limit=20&_start=${skip}&title_contains=${keyword}`,
      providesTags: ['articles'],
    }),
    fetchArticlesById: builder.query<IPosts, string>({
      query: (id: string) => `/v3/articles/${id}`,
      providesTags: ['articles'],
    }),
  }),
});

export const { useFetchArticlesQuery, useFetchArticlesByIdQuery } = articlesApi;
