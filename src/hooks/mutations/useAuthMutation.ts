import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import type {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
} from "../../apis/auth/auth-api-types";
import { postLogin, postSignup } from "../../apis/auth/auth-api";

// POST auth/signup
export const useAuthPostSignupMutation = (
  options?: UseMutationOptions<SignupResponse, Error, SignupRequest>,
) => {
  return useMutation({
    mutationFn: postSignup,
    ...options,
  });
};

// POST auth/signin
export const useAuthPostLoginMutation = (
  options?: UseMutationOptions<LoginResponse, Error, LoginRequest>,
) => {
  return useMutation({
    mutationFn: postLogin,
    ...options,
  });
};
