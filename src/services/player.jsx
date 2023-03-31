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
      query: ( player_id ) => `players/details/${player_id}`,
    }),

    registerPlayer: build.mutation({
      query(formData) {
        return {
          url: "player/registration",
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
      },
      invalidatesTags: [{ type: "Players", id: "LIST" }],
    }),
    updatePlayerDetails: build.mutation({
      query(player_id, formData) {
        return {
          url: `player/update/${player_id}`,
          method: "PUT",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
      },
      invalidatesTags: (result, error, { player_id }) =>
        result
          ? [
            { type: "Players", id: player_id },
            { type: "Players", id: "LIST" },
          ]
          : [{ type: "Players", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllPlayersQuery,
  useGetPlayerDetailsQuery,
  useRegisterPlayerMutation,
  useUpdatePlayerDetailsMutation,
} = playerApi;
