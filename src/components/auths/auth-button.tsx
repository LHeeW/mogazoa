interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function AuthButton({ text, ...props }: AuthButtonProps) {
  return (
    <button
      type="submit"
      className="w-full py-4 rounded-lg bg-gradient text-white-f1f1f5"
      {...props}
    >
      {text}
    </button>
  );
}
