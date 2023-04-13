import { api } from "./api";

export const newsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllNews: build.query({
            query: () => "news",
        }),

        registerNews: build.mutation({
            query: (body) => {
                return {
                    url: "news/add",
                    method: "POST",
                    body: body,
                };
            },
        }),
    }),
});


export const {
    useGetAllNewsQuery,
    useRegisterNewsMutation,
} = newsApi;
