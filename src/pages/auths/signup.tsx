import AuthForm from "../../components/auths/auth-form";
import AuthInput from "../../components/auths/auth-input";
import AuthButton from "../../components/auths/auth-button";
import { Link } from "react-router-dom";
import useSignupForm from "../../hooks/useSignupForm";

export default function SignupPage() {
  const { register, errors, isPending, formDataSubmit, handleSubmit } =
    useSignupForm();

  return (
    <AuthForm onSubmit={handleSubmit(formDataSubmit)}>
      <AuthInput
        label="이메일"
        type="email"
        id="email"
        placeholder="이메일 입력해주세요."
        error={errors.email?.message}
        {...register("email")}
      />
      <AuthInput
        label="닉네임"
        type="text"
        id="text"
        placeholder="닉네임을 입력해주세요."
        error={errors.nickname?.message}
        {...register("nickname")}
      />
      <AuthInput
        label="비밀번호"
        type="password"
        id="password"
        placeholder="비밀번호를 입력해주세요."
        error={errors.password?.message}
        {...register("password")}
      />

      <AuthInput
        label="비밀번호 확인"
        type="password"
        id="passwordConfirmation"
        placeholder="비밀번호 확인을 입력해주세요."
        error={errors.passwordConfirmation?.message}
        {...register("passwordConfirmation")}
      />

      <p className="flex gap-2 self-end text-sm text-gray-6e6e82">
        이미 계정이 있으신가요?
        <Link to="/login" className="text-white-f1f1f5">
          로그인
        </Link>
      </p>

      <AuthButton
        text={isPending ? "회원가입 중..." : "회원가입"}
        disabled={isPending}
      />
    </AuthForm>
  );
}
