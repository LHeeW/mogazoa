interface AuthFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export default function AuthForm({ children, ...props }: AuthFormProps) {
  return (
    <form
      noValidate
      {...props}
      className="mx-auto w-full max-w-[320px] min-h-screen flex flex-col gap-7.5  justify-center tablet:max-w-110 tablet:gap-10 desktop:max-w-160 desktop:gap-15"
    >
      {children}
    </form>
  );
}
