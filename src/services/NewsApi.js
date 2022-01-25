import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_NEWS_API_URL;

const cryptoNewsHeader = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
  "x-rapidapi-key": process.env.REACT_APP_NEWS_RAPIDAPI_KEY,
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeader });

export const cryptoNewApi = createApi({
  reducerPath: "cryptoNewApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewApi;