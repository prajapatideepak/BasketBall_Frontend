import { api } from "./api";

export const playerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllPlayers: build.query({
      query: () => "players",
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
  }),
});

export const {
  useGetAllPlayersQuery,
  useGetPlayerDetailsQuery,
  useRegisterPlayerMutation,
  useUpdatePlayerDetailsMutation,
} = playerApi;
