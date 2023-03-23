import { createSlice } from "@reduxjs/toolkit";
// Slice
const TournamentSlice = createSlice({
  name: "Team",
  initialState: {
    tournamentList: [],
    tournamentTeamsList: [],
    tournamentDetails: {},
    tournamentForm: {
      tournamentInfo: {
        logo: "",
        tournament_name: "",
        address: "",
        start_date: "",
        end_date: "",
        gender_types: [],
        age_categories: [],
        level: "",
        prize: "",
        about_tournament: "",
      },
      RefereeList: [],
      SponsorList: [],
    },
    Notification: [],
  },
  reducers: {
    getTournaments: (state, action) => {
        state.tournamentList = action.payload
    },
    setTournamentForm: (state, action) => {
      state.tournamentForm = action.payload;
    },
    setTournamentDetails: (state, action) => {
      state.tournamentDetails = action.payload;
    },
  },
});

export const { setTeamForm } = TournamentSlice.actions;
export default TournamentSlice.reducer;
