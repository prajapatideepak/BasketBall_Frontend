import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateProfile: build.mutation({
      query: (data) => {
        return {
          url: "user/update-profile",
          method: "PUT",
          body: data,
          headers:{ 'Content-Type': 'application/json' }
        };
      },
      invalidatesTags:[{ type: 'User'}],
    }),
  }),
});

export const {
  useUpdateProfileMutation,
} = userApi;
