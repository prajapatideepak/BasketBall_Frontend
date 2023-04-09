import { api } from "./api";

export const tournamentOrganizerApi = api.injectEndpoints({
  endpoints: (build) => ({
    isAuthOrganizer: build.query({
      query: (tournament_id) => `tournament/auth-organizer/${tournament_id}`,
    }),
    
    tournamentsOfOrganizer: build.query({
      query: () => "tournament/organizer",
      providesTags: (result, error)=>
        result?.tournaments.length > 0
        ? [
        ...result?.tournaments.map(({ id }) => ({
            type: "TournamentsOfOrganizer",
            id: id,
        })),
        { type: "TournamentsOfOrganizer", id: "LIST" },
        ]
        : [{ type: "TournamentsOfOrganizer", id: "LIST" }]
    }),

    disqualifyTeam: build.mutation({
        query: ({tournament_id, team_id})=>{
            return {
                url: `tournament/disqualify-team/${tournament_id}/${team_id}`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            }; 
        }
    }),

    createPools: build.mutation({
        query: ({tournament_id, total_groups, teams_per_group})=>{
            return {
                url: `tournament/create-groups/${tournament_id}`,
                method: "PUT",
                body:{
                    total_groups,
                    teams_per_group,
                },
                headers: {
                    "Content-Type": "application/json",
                },
            }; 
        }
    }),

    matchFormation: build.mutation({
        query: ({tournament_id, is_formation_by_group, formation_method, round_name, gender_type, age_type})=>{
            return {
                url: `tournament/match-formation/${tournament_id}`,
                method: "PUT",
                body:{
                    is_formation_by_group,
                    formation_method,
                    round_name,
                    gender_type, 
                    age_type
                },
                headers: {
                    "Content-Type": "application/json",
                },
            }; 
        }
    })
  }),
});

export const {
  useIsAuthOrganizerQuery,
  useTournamentsOfOrganizerQuery,
  useDisqualifyTeamMutation,
  useCreatePoolsMutation,
  useMatchFormationMutation
} = tournamentOrganizerApi;
