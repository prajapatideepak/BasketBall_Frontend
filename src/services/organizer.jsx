import { api } from "./api";

export const organizerApi = api.injectEndpoints({
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

    tournamentSchedule: build.query({
        query: (tournament_id) => `tournament/schedule/${tournament_id}`,
    }),

    teamsRequest: build.query({
        query: (tournament_id) => `tournament/teams-request/${tournament_id}`,
        providesTags: (result, error) => [
            result.teams.length > 0
                ? [
                    ...result.teams.map((item) => ({
                        type: "TeamsRequest",
                        id: item.teams.id,
                    })),
                    { type: "TeamsRequest", id: "LIST" },
                ]
                : [{ type: "TeamsRequest", id: "LIST" }],
        ],
    }),
    acceptTeamRequest: build.mutation({
        query({tournament_id, team_id}){
            return {
                url: `tournament/teams-request/accept/${tournament_id}`,
                method: "PUT",
                body: { team_id },
                headers:{ 'Content-Type': 'application/json' }
            };
        },
        invalidatesTags: [{ type: "TournamentsOfOrganizer", id: "LIST" }],
    }),

    rejectTeamRequest: build.mutation({
        query({tournament_id, team_id, reject_reason}){
            return {
                url: `tournament/teams-request/reject/${tournament_id}`,
                method: "PUT",
                body: { 
                    team_id, 
                    reject_reason 
                },
                headers:{ 'Content-Type': 'application/json' }
            };
        },
        invalidatesTags: [{ type: "TournamentsOfOrganizer", id: "LIST" }],
    }),

    startTournament: build.mutation({
        query(tournament_id){
            return {
                url: `tournament/start/${tournament_id}`,
                method: "PUT",
            };
        },
        invalidatesTags: [{ type: "Tournaments", id: "LIST" }],
    }),

    startRegistration: build.mutation({
        query(tournament_id){
            return {
                url: `tournament/start-registration/${tournament_id}`,
                method: "PUT",
            };
        },
        invalidatesTags: [{ type: "Tournaments", id: "LIST" }],
    }),

    endRegistration: build.mutation({
        query(tournament_id){
            return {
                url: `tournament/close-registration/${tournament_id}`,
                method: "PUT",
            };
        },
        invalidatesTags: [{ type: "Tournaments", id: "LIST" }],
    }),
    
    endTournament: build.mutation({
        query(tournament_id){
            return {
                url: `tournament/end/${tournament_id}`,
                method: "PUT",
            };
        },
        invalidatesTags: [{ type: "Tournaments", id: "LIST" }],
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

    requalifyTeam: build.mutation({
        query: ({tournament_id, team_id})=>{
            return {
                url: `tournament/requalify-team/${tournament_id}/${team_id}`,
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
    useTournamentsOfOrganizerQuery,
    useTeamsRequestQuery,
    useTournamentScheduleQuery,
    useAcceptTeamRequestMutation,
    useRejectTeamRequestMutation,
    useStartTournamentMutation,
    useEndTournamentMutation,
    useStartRegistrationMutation,
    useEndRegistrationMutation,
    useIsAuthOrganizerQuery,
    useDisqualifyTeamMutation,
    useRequalifyTeamMutation,
    useCreatePoolsMutation,
    useMatchFormationMutation
} = organizerApi;
