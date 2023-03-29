import { api } from "./api";

export const playerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllPlayers: build.query({
      query: () => "player",
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
  }),
});

export const {
  useGetAllPlayersQuery,
 } = playerApi;
