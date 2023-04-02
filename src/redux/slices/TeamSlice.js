import { createSlice } from "@reduxjs/toolkit";
// Slice
const TeamSlice = createSlice({
  name: "Team",
  initialState: {
    TeamList: [],
    TeamTournamentList: [],
    TeamDetail: {},
    TeamForm: {
      TeamInfo: {
        team_name: "",
        team_logo: "",
        about_team: "",
        coach_name: "",
        coach_mobile: "",
        asst_coach_name: "",
        asst_coach_mobile: "",
        captain: "",
      },
      PlayerList: [],
    },
    Notification: [],
  },
  reducers: {
    setTeamForm: (state, action) => {
      state.TeamForm = action.payload;
    },
  },
});

export const { setTeamForm } = TeamSlice.actions;
export default TeamSlice.reducer;
