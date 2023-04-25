import { api } from "./api";

export const matchApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMatchScore: build.query({ 
      query: (match_id) => `match/score/${match_id}`
    }),

    updateMatchDetails: build.mutation({
      query({ tournament_id, match_id, match_date, match_time, match_address }) {
        return {
          url: `match/update/${tournament_id}/${match_id}`,
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

    updateMatchScorer: build.mutation({
      query: ({tournament_id, match_id, scorer_name, scorer_email, scorer_mobile}) =>{
        return {
          url: `match/add-update-scorekeeper/${tournament_id}/${match_id}`,
          method: "PUT",
          body: {
            scorekeeper_name: scorer_name, 
            scorekeeper_email: scorer_email, 
            scorekeeper_mobile: scorer_mobile
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      },
      invalidatesTags: [{ type: "Tournaments", id: "LIST" }],
    }),

    deleteMatch: build.mutation({
      query({match_id, tournament_id}) {
        return {
          url: `match/delete/${tournament_id}/${match_id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: [{ type: "Tournaments", id: "LIST" }],
    }),

    getMatchDetail: build.query({
      query: (matchId) => `match/${matchId}`,
    }),

    getMatchList: build.query({
      query: ({ pageNo, status }) => `match/list/${status}&${pageNo}`,
    }),
    getMatches: build.query({
      query: () => "match/matches",
    })
  }),
});

export const {
  useGetMatchScoreQuery,
  useUpdateMatchDetailsMutation,
  useUpdateMatchScorerMutation,
  useDeleteMatchMutation,
  useGetMatchDetailQuery,
  useGetMatchListQuery,
  useGetMatchesQuery
} = matchApi;
