import { IPicture, IComment } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://wry-sly-yogurt.glitch.me' }),
  endpoints: (builder) => ({
    getPictures: builder.query<IPicture[], null>({
      query: () => '/photos',
    }),
    getPicture: builder.query<IPicture, string>({
      query: (photoId) => `/photos/${photoId}`,
    }),
    updatePicture: builder.mutation<null, { id: string; comments: IComment[] }>(
      {
        query: ({ id, comments }) => ({
          url: `/photos/${id}`,
          method: 'PATCH',
          body: {
            comments: comments,
          },
        }),
      }
    ),
  }),
});

export const {
  useGetPicturesQuery,
  useGetPictureQuery,
  useUpdatePictureMutation,
} = apiSlice;
