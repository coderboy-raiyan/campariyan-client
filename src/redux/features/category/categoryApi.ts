import baseApi from "@/redux/api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
    createCategory: builder.mutation({
      query: (body) => ({
        url: "/categories/create-category",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateCategoryMutation, useGetCategoriesQuery } = categoryApi;
