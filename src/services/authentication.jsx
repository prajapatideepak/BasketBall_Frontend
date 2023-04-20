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
    
    googleLogin: build.mutation({
      query: (access_token) => {
        return {
          url: "user/google-login",
          method: "POST",
          body: {access_token},
          headers:{ 'Content-Type': 'application/json' }
        };
      },
      invalidatesTags: [{ type: "User"}],
    }),

    verifyAccount: build.query({
      query: ({user_id, token}) => {
        return{
          url: `user/verify-account/${user_id}/${token}`,
          method: 'GET'
        }
      }
    }),

    resendVerificationLink: build.mutation({
      query: () => 'user/resend-verification-link'
    })
  }),
});

export const {
  useSigninMutation,
  useSignupMutation,
  useGoogleLoginMutation,
  useVerifyAccountQuery,
  useResendVerificationLinkMutation
} = authenticationApi;
