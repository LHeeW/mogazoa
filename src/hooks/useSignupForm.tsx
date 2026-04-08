import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signupSchema, type SignupFormValue } from "../schemas/signip-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthPostSignupMutation } from "./mutations/useAuthMutation";

export default function useSignupForm() {
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValue>({ resolver: zodResolver(signupSchema) });

  const { mutate, isPending } = useAuthPostSignupMutation();

  const formDataSubmit = (data: SignupFormValue) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        navigate("/login");
      },
      onError: (error) => alert(error.message),
    });
  };

  return { register, errors, isPending, formDataSubmit, handleSubmit };
}
