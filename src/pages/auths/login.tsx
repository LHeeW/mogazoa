import AuthInput from "../../components/auths/auth-input";
import AuthForm from "../../components/auths/auth-form";
import AuthButton from "../../components/auths/auth-button";
import { Link } from "react-router-dom";
import useLoginForm from "../../hooks/useLoginForm";

export default function LoginPage() {
  const { register, errors, isPending, formDataSubmit, handleSubmit } =
    useLoginForm();

  return (
    <AuthForm onSubmit={handleSubmit(formDataSubmit)}>
      <AuthInput
        label="이메일"
        type="email"
        id="email"
        placeholder="이메일을 입력해주세요."
        error={errors.email?.message}
        {...register("email")}
      />
      <AuthInput
        label="비밀번호"
        type="password"
        id="password"
        placeholder="비밀번호를 입력해주세요."
        error={errors.password?.message}
        {...register("password")}
      />
      <p className="flex gap-2 self-end text-sm text-gray-6e6e82">
        아직 계정이 없으신가요?
        <Link to="/signup" className="text-white-f1f1f5">
          회원가입
        </Link>
      </p>
      <AuthButton
        text={isPending ? "로그인 중..." : "로그인"}
        disabled={isPending}
      />
    </AuthForm>
  );
}
