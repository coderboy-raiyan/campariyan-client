import baseApi from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (body) => ({
        url: "/products/create-product",
        method: "POST",
        body,
      }),
    }),
    getProducts: builder.query({
      query: () => "/products",
    }),
    getSingleProduct: builder.query({
      query: (id: string) => `/products/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
} = productApi;
export default productApi;
