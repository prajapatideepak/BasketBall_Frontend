import { api } from "./api";

export const playerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllPlayers: build.query({
      query: () => "players",
      providesTags: (result) =>
        result.all_players.length > 0
          ? [
              ...result.all_players.map(({ player_id }) => ({
                type: "Players",
                id: player_id,
              })),
              { type: "Players", id: "LIST" },
            ]
          : [{ type: "Players", id: "LIST" }],
    }),

    getPlayerDetails: build.query({
      query: (player_id) => `players/details/${player_id}`,
    }),

    registerPlayer: build.mutation({
      query: (body) => {
        return {
          url: "players/registration",
          method: "POST",
          body: body,
        };
      },
    }),
    updatePlayerDetails: build.mutation({
      query(body) {
        return {
          url: `player/update/${player_id}`,
          method: "PUT",
          body: body,
        };
      },
    }),
    searchPlayerByNumbmer: build.query({
      query: ({ number }) => `players/search/${number}`,
    }),
  }),
});

export const {
  useGetAllPlayersQuery,
  useGetPlayerDetailsQuery,
  useRegisterPlayerMutation,
  useUpdatePlayerDetailsMutation,
  useSearchPlayerByNumbmerQuery,
} = playerApi;
