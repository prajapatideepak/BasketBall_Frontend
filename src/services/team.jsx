import { api } from "./api";

export const teamApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTeamList: build.query({
      query: ({ pageNo, search }) =>
        `team/list/${pageNo}&${
          search == "" || search == "" ? "search" : search
        }`,
    }),
    getTeamDetail: build.query({
      query: ({ teamId }) => `team/detail/${teamId}`,
    }),
    teamRegistration: build.mutation({
      query: (body) => ({
        url: "team/registration",
        method: "POST",
        body,
      }),
    }),
    teamUpdate: build.mutation({
      query: (body) => ({
        url: "team/update",
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useGetTeamListQuery,
  useGetTeamDetailQuery,
  useTeamRegistrationMutation,
  useTeamUpdateMutation,  
} = teamApi;
