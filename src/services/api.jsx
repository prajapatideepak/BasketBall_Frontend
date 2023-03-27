import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000/",
  //   prepareHeaders: (headers, { getState }) => {
  //     // By default, if we have a token in the store, let's use that for authenticated requests
  //     const token = (getState()).auth.token
  //     if (token) {
  //       headers.set('authentication', `Bearer ${token}`)
  //     }
  //     return headers
  //   },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: [
    "User, Players, Teams, Tournaments, TournamentsOfOrganizer, TeamsOfManager",
  ],
  endpoints: () => ({}),
});
