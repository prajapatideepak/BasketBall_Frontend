import { api } from "./api";

export const teamApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTeamList: build.query({
      query: ({ pageNo, search }) =>
        `team/list/${pageNo}&${
          search == " " || search == "" ? "search" : search
        }`,
    }),
  }),
});

export const { useGetTeamListQuery } = teamApi;
