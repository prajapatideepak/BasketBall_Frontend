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
    getuserTeams: build.query({
      query: ({ userId }) => `team/user/${userId}`,
    }),
    teamRegistration: build.mutation({
      query: (body) => ({
        url: "team/registration",
        method: "POST",
        body,
      }),
    }),
    teamtoTournament: build.mutation({
      query: (body) => ({
        url: "team/tournament/register",
        method: "POST",
        body,
      }),
    }),
    teamUpdate: build.mutation({
      query: ({ body, team_id }) => ({
        url: `team/update/${team_id}`,
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
  useGetuserTeamsQuery,
  useTeamtoTournamentMutation,
} = teamApi;
