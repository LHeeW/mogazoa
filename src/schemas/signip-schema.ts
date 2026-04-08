import z from "zod";

export const signupSchema = z
  .object({
    email: z.string().email("올바른 이메일 형식이 아닙니다."),
    password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
    passwordConfirmation: z.string().min(8, "비밀번호 확인을 입력해주세요."),
    nickname: z.string().min(1, "닉네임을 입력해주세요."),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirmation"],
  });

export type SignupFormValue = z.infer<typeof signupSchema>;
