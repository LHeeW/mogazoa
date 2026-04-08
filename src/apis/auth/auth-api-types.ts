import type { components } from "../../types/api-types";

// 회원가입
export type SignupRequest = components["schemas"]["SignUpRequestBody"];
export type SignupResponse = components["schemas"]["SignUpResponse"];

// 로그인
export type LoginRequest = components["schemas"]["SignInRequestBody"];
export type LoginResponse = components["schemas"]["SignInResponse"];
