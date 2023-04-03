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
    acceptTeamRequest: build.mutation({
        query(tournament_id, team_id){
            return {
                url: `tournament/accept/${tournament_id}`,
                method: "PUT",
                body: { team_id },
                headers:{ 'Content-Type': 'application/json' }
            };
        },
        invalidatesTags: [{ type: "TournamentsOfOrganizer", id: "LIST" }],
    }),

    rejectTeamRequest: build.mutation({
        query(tournament_id, team_id, reject_reason){
            return {
                url: `tournament/accept/${tournament_id}`,
                method: "PUT",
                body: { 
                    team_id, 
                    reject_reason 
                },
                headers:{ 'Content-Type': 'application/json' }
            };
        },
        invalidatesTags: [{ type: "TournamentsOfOrganizer", id: "LIST" }],
    }),

    startTournament: build.mutation({
        query(tournament_id){
            return {
                url: `tournament/start/${tournament_id}`,
                method: "PUT",
            };
        },
        invalidatesTags: [{ type: "Tournaments", id: "LIST" }],
    }),

    startRegistration: build.mutation({
        query(tournament_id){
            return {
                url: `tournament/start-registration/${tournament_id}`,
                method: "PUT",
            };
        },
        invalidatesTags: [{ type: "Tournaments", id: "LIST" }],
    }),

    endRegistration: build.mutation({
        query(tournament_id){
            return {
                url: `tournament/close-registration/${tournament_id}`,
                method: "PUT",
            };
        },
        invalidatesTags: [{ type: "Tournaments", id: "LIST" }],
    }),
    
    endTournament: build.mutation({
        query(tournament_id){
            return {
                url: `tournament/end/${tournament_id}`,
                method: "PUT",
            };
        },
        invalidatesTags: [{ type: "Tournaments", id: "LIST" }],
    }),
  }),
});

export const {
  useTeamsRequestQuery,
  useAcceptTeamRequestMutation,
  useRejectTeamRequestMutation,
  useStartTournamentMutation,
  useEndTournamentMutation,
  useStartRegistrationMutation,
  useEndRegistrationMutation,
} = organizerApi;
