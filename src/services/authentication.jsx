import { api } from "./api";

export const authenticationApi = api.injectEndpoints({
  endpoints: (build) => ({

    signin: build.mutation({
      query: (data) => {
        return {
          url: "user/login",
          method: "POST",
          body: data,
          headers:{ 'Content-Type': 'application/json' }
        };
      },
      invalidatesTags: (result, error) => [{ type: 'User'}],
    }),

    signup: build.mutation({
      query: (data) => {
        return {
          url: "user/",
          method: "POST",
          body: data,
          headers:{ 'Content-Type': 'application/json' }
        };
      },
      invalidatesTags: [{ type: "User"}],
    }),
  }),
});

export const {
  useSigninMutation,
  useSignupMutation,
} = authenticationApi;
