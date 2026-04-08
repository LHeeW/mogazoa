import { useNavigate } from "react-router-dom";
import { loginSchema, type LoginFormValue } from "../schemas/login-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthPostLoginMutation } from "./mutations/useAuthMutation";
import { authKeys } from "../utils/auth-key";

export default function useLoginForm() {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValue>({ resolver: zodResolver(loginSchema) });

  const { mutate, isPending } = useAuthPostLoginMutation();

  const formDataSubmit = (data: LoginFormValue) => {
    mutate(data, {
      onSuccess: (data) => {
        localStorage.setItem(authKeys.ACCESS_TOKEN, data.accessToken);
        reset();
        navigate("/");
      },
      onError: (error) => alert(error.message),
    });
  };

  return { register, errors, isPending, formDataSubmit, handleSubmit };
}
