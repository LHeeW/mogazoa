import { initFetch } from "../init-fetch";
import type {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
} from "./auth-api-types";

// 회원가입
export async function postSignup(data: SignupRequest) {
  return await initFetch<SignupResponse>("/auth/signUp", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// 로그인
export async function postLogin(data: LoginRequest) {
  return await initFetch<LoginResponse>("/auth/signIn", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
