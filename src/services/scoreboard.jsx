import { api } from "./api";

export const scoreboardApi = api.injectEndpoints({
  endpoints: (build) => ({

    isAuthScorekeeper: build.query({
      query: ({match_id, token}) => `scoreboard/auth-scorekeeper/${match_id}/${token}`
    }),

    startMatch: build.mutation({
      query({match_id, token}) {
        return {
          url: `scoreboard/start-match/${match_id}/${token}`,
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    endMatch: build.mutation({
      query({match_id, token}) {
        return {
          url: `scoreboard/end-match/${match_id}/${token}`,
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    addTeamPoint: build.mutation({
      query: ({match_id, token, team_id, player_id, point_type})=>{
        return{
          url: `scoreboard/add-score/${match_id}/${token}`,
          method: "PUT",
          body:{
            team_id,
            player_id,
            point_type
          },
          headers: {
              "Content-Type": "application/json",
          },
        }
      }
    }),
    addPlayerFoul: build.mutation({
      query: ({match_id, token, player_id})=>{
        return{
          url: `scoreboard/player-foul/${match_id}/${token}`,
          method: "PUT",
          body:{
            player_id,
          },
          headers: {
              "Content-Type": "application/json",
          },
        }
      }
    }),
    addTeamFoul: build.mutation({
      query: ({match_id, token, team_id})=>{
        return{
          url: `scoreboard/team-foul/${match_id}/${token}`,
          method: "PUT",
          body:{
            team_id
          },
          headers: {
              "Content-Type": "application/json",
          },
        }
      }
    }),
    changeQuarter: build.mutation({
      query: ({match_id, token})=>{
        return{
          url: `scoreboard/change-quarter/${match_id}/${token}`,
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
        }
      }
    }),
    undoScore: build.mutation({
      query: ({match_id, token})=>{
        return{
          url: `scoreboard/undo-score/${match_id}/${token}`,
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
        }
      }
    }),
  }),
});

export const {
  useIsAuthScorekeeperQuery,
  useStartMatchMutation,
  useEndMatchMutation,
  useAddTeamPointMutation,
  useAddPlayerFoulMutation,
  useAddTeamFoulMutation,
  useChangeQuarterMutation,
  useUndoScoreMutation,
} = scoreboardApi;
