import type { ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";

interface NavItemProps extends ComponentPropsWithoutRef<typeof Link> {
  label: string;
}

interface HeaderNavProps {
  containerProps?: ComponentPropsWithoutRef<"div">;
  linkProps?: Omit<NavItemProps, "to" | "label">;
  onItemClick?: () => void;
}

const NAV_ITEMS = [
  { to: "/compare", label: "비교하기" },
  { to: "/myprofile", label: "내프로필" },
];

export default function HeaderNav({
  containerProps,
  linkProps,
  onItemClick,
}: HeaderNavProps) {
  return (
    <nav className={containerProps?.className || ""}>
      {NAV_ITEMS.map((it) => (
        <Link
          key={it.label}
          to={it.to}
          onClick={onItemClick}
          className={`text-white-f1f1f5 ${linkProps?.className || ""}`}
        >
          {it.label}
        </Link>
      ))}
    </nav>
  );
}