import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../../models/models';

export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints: (build) => ({
    getPostById: build.query<IPost, number>({
      query: (id: number) => ({
        url: `/posts/${id}`,
      })
    })
  })
});

export const { useGetPostByIdQuery } = postApi;