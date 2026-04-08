import VisibleIcon from "../../assets/icons/icon_visible.svg?react";
import InvisibleIcon from "../../assets/icons/icon_invisible.svg?react";
import { useState } from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function AuthInput({
  label,
  error,
  type,
  ...props
}: AuthInputProps) {
  const [isVisible, setisVisible] = useState(false);
  const currentType = type === "password" && isVisible ? "text" : type;

  const handleVisibleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setisVisible((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col gap-2.5">
      {label && (
        <label htmlFor={props.id} className="text-sm text-white-f1f1f5">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={currentType}
          className="w-full py-4.5 pl-5 pr-10 border-black-353542 rounded-lg focus:outline-main-blue bg-black-252530 text-sm text-white-f1f1f5 placeholder:text-gray-6e6e82 placeholder:text-sm"
          maxLength={40}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={handleVisibleToggle}
            className="absolute top-1/2 right-3 -translate-y-1/2 w-6 h-6 text-gray-6e6e82"
          >
            {isVisible ? <VisibleIcon /> : <InvisibleIcon />}
          </button>
        )}
      </div>
      {error && <span className="pl-1 text-sm text-gray-6e6e82">{error}</span>}
    </div>
  );
}
