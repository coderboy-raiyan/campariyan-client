import baseApi from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginCustomer: builder.mutation({
      query: (body) => ({
        url: "/auth/login-customer",
        method: "POST",
        body,
      }),
    }),
    registerCustomer: builder.mutation({
      query: (body) => ({
        url: "/auth/register-customer",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginCustomerMutation, useRegisterCustomerMutation } =
  authApi;
