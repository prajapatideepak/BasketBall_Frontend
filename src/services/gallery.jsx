import { api } from "./api";

export const galleryApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllGallery: build.query({
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
    }),
});


export const {
    useGetAllGalleryQuery,
    useRegisterGalleryMutation
} = galleryApi;