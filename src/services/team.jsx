import { api } from "./api";

export const teamApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTeamList: build.query({
      query: ({ pageNo, search }) =>
        `team/list/${pageNo}&${
          search == " " || search == "" ? "search" : search
        }`,   
    }),
    getTeamDetail: build.query({
      query: ({ teamId }) => `team/detail/${teamId}`,
    }),
  }),
});

export const { useGetTeamListQuery, useGetTeamDetailQuery } = teamApi;
