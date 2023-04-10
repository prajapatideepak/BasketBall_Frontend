import { api } from "./api";

export const matchApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateMatchDetails: build.mutation({
      query({ match_id, match_date, match_time, match_address }) {
        return {
          url: `match/update/${match_id}`,
          method: "PUT",
          body: {
            start_date: match_date,
            start_time: match_time,
            address: match_address,
          },
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: [{ type: "Tournaments", id: "LIST" }],
    }),
    getMatchList: build.query({
      query: ({ pageNo, status }) => `match/list/${status}&${pageNo}`,
    }),
  }),
});

export const { useUpdateMatchDetailsMutation, useGetMatchListQuery } = matchApi;
