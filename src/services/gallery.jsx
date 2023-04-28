import { api } from "./api";

export const galleryApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllGallery: build.query({
            query: ({pageNo, category}) => `gallery/${category}/${pageNo}` ,
        }),
        
        getAdminGallery: build.query({
            query: ({pageNo}) => `gallery/${pageNo}` ,
        }),
        
        registerGallery: build.mutation({
            query: (body) => {
                return {
                    url: "gallery/add",
                    method: "POST",
                    body: body,
                };
            },
        }),

        deleteGallery: build.mutation({
            query: (id) => {
                return {
                    url: `gallery/delete/${id}`,
                    method: "DELETE",
                };
            },
        })
    }),
});


export const {
    useGetAllGalleryQuery,
    useGetAdminGalleryQuery,
    useRegisterGalleryMutation,
    useDeleteGalleryMutation,
} = galleryApi;