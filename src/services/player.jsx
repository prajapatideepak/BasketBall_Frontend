import { api } from "./api";

export const playerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllPlayers: build.query({
      query: ({ pageNo, search }) =>
        `player/list/${pageNo}&${
          search == "" || search == "" ? "search" : search
        }`,

      providesTags: (result) =>
      result?.data.length > 0
        ? [
          ...result?.data.map((player) => ({
            type: "Players",
            id: player.id,
          })),
          { type: "Players", id: "LIST" },
        ]
        : [{ type: "Players", id: "LIST" }],
    }),

    getPlayerDetails: build.query({
      query: (player_id) => `player/details/${player_id}`,
      providesTags: (result, error) => {
        return [
          { type: "Players", id: result?.SinglePlayerDetails.id },
        ]
      },
    }),

    registerPlayer: build.mutation({
      query: (body) => {
        return {
          url: "player/registration",
          method: "POST",
          body: body,
        };
      },
    }),

    updatePlayerDetails: build.mutation({
      query(body) {
        return {
          url: 'player/update',
          method: "PUT",
          body: body,
        };
      },
      invalidatesTags: (result, error) => {
        return (
          result
            ? [
              { type: "Players", id: result.data.id },
              { type: "Players", id: "LIST" },
            ]
            : [{ type: "Players", id: "LIST" }]
        )
      }
    }),
    
    searchPlayerByNumbmer: build.query({
      query: ({ number }) => `player/search/${number}`,
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
