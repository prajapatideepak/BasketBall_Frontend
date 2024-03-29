import { api } from "./api";

export const tournamentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllTournaments: build.query({
      query: () => "tournament",
      providesTags: (result) =>
        result?.all_tournaments.length > 0
          ? [
            ...result?.all_tournaments.map(({ id }) => ({
              type: "Tournaments",
              id: id,
            })),
            { type: "Tournaments", id: "LIST" },
          ]
          : [{ type: "Tournaments", id: "LIST" }],
    }),
    getTournamentDetails: build.query({
      query: (tournament_id) => `tournament/details/${tournament_id}`,
      providesTags: (result, error) => {
        return [
          { type: "Tournaments", id: result?.tournamentDetails.id },
        ]
      },
    }),
    registerTournament: build.mutation({
      query(formData) {
        return {
          url: "tournament/registration",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: [{ type: "Tournaments", id: "LIST" }],
    }),
    updateTournamentDetails: build.mutation({
      query({tournament_id, formData}) {
        return {
          url: `tournament/update/${tournament_id}`,
          method: "PUT",
          body: formData,
        };
      },
      invalidatesTags: (result, error, { tournament_id }) =>
        result
          ? [
            { type: "Tournaments", id: tournament_id },
            { type: "Tournaments", id: "LIST" },
          ]
          : [{ type: "Tournaments", id: "LIST" }],
    }),

    deleteTournamentDetails: build.mutation({
      query(tournament_id) {
        return {
          url: `tournament/delete/${tournament_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Tournaments", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllTournamentsQuery,
  useGetTournamentDetailsQuery,
  useRegisterTournamentMutation,
  useUpdateTournamentDetailsMutation,
  useDeleteTournamentDetailsMutation,
} = tournamentApi;
