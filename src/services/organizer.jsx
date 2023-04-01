import { api } from "./api";

export const organizerApi = api.injectEndpoints({
  endpoints: (build) => ({
    // tournamentsOfOrganizer: build.query({
    //   query: () => "TournamentsOfOrganizer",
    //   providesTags: (result) =>
    //     result.all_tournaments.length > 0
    //       ? [
    //           ...result.all_tournaments.map(({ tournament_id }) => ({
    //             type: "Tournaments",
    //             id: tournament_id,
    //           })),
    //           { type: "Tournaments", id: "LIST" },
    //         ]
    //       : [{ type: "Tournaments", id: "LIST" }],
    // }),
    teamsRequest: build.query({
      query: (tournament_id) => `tournament/teams-request/${tournament_id}`,
      providesTags: (result, error) => [
        result.teams.length > 0
            ? [
                ...result.teams.map((item) => ({
                    type: "TeamsRequest",
                    id: item.teams.id,
                })),
                { type: "TeamsRequest", id: "LIST" },
            ]
            : [{ type: "TeamsRequest", id: "LIST" }],
      ],
    }),
  }),
});

export const {
  useTeamsRequestQuery,
} = organizerApi;
