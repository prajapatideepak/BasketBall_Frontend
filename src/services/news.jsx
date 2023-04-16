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

        getNewsDetails: build.query({
            query: (id) => `news/details/${id}`,
        }),

        updateNewsDetails: build.mutation({
            query(body) {
                return {
                    url: 'news/update',
                    method: "PUT",
                    body: body,
                };
            },
        }),

        deleteNewsDetails: build.mutation({
            query(id) {
                return {
                    url: `news/delete/${id}`,
                    method: "delete",
                };
            },
        }),
    }),
});


export const {
    useGetAllNewsQuery,
    useGetNewsDetailsQuery,
    useRegisterNewsMutation,
    useUpdateNewsDetailsMutation,
    useDeleteNewsDetailsMutation
} = newsApi;
