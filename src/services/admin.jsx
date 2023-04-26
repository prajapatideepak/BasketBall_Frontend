import { api } from "./api";

export const adminApi = api.injectEndpoints({
  endpoints: (build) => ({

    tournamentsRequest: build.query({
      query: () => "admin/tournaments/requests",
      providesTags: (result, error)=>
        result?.tournaments.length > 0
        ? [
        ...result?.tournaments.map(({ id }) => ({
            type: "TournamentsRequest",
            id: id,
        })),
        { type: "TournamentsRequest", id: "LIST" },
        ]
        : [{ type: "TournamentsRequest", id: "LIST" }]
    }),

    approveTournament: build.mutation({
      query: (tournament_id) =>{
        return {
          url: `admin/tournament/approve/${tournament_id}`,
          method: "PUT",
          ContentType: "application/json",
        };
      },
      invalidatesTags: [{ type: "TournamentsRequest", id: "LIST" }],
    }),

    rejectTournament: build.mutation({
      query: (tournament_id) =>{
        return {
          url: `admin/tournament/cancel/${tournament_id}`,
          method: "PUT",
          ContentType: "application/json",
        };
      },
      invalidatesTags: [{ type: "TournamentsRequest", id: "LIST" }],
    }),
  }),
});

export const {
  useTournamentsRequestQuery,
  useApproveTournamentMutation,
  useRejectTournamentMutation,
} = adminApi;
