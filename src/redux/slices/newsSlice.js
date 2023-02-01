import { createSlice } from "@reduxjs/toolkit";
// Slice
const NewsSlice = createSlice({
  name: "news",
  initialState: {
    NewsList: [],
    NewsItem: {},
  },
  reducers: {
    setNews: (state, action) => {
      console.log("hmm");
      console.log(action);
      state.NewsList = action.payload;
    },
    getNewsDetail: (state, action) => {
      state.user = null;
    },
  },
});

export const { setNews, getNewsDetail } = NewsSlice.actions;
export default NewsSlice.reducer;
