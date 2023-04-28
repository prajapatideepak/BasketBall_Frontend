import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000/",
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authentication', `${token}`)
      }
      return headers
    },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: [
    "User, Players, Teams, Tournaments, TournamentsOfOrganizer, TeamsRequest, TeamsOfManager , News , Gallery, TournamentsRequest, TournamentGallery",
  ],
  endpoints: () => ({}),
});
