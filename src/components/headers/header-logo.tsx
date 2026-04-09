import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";

export default function HeaderLogo() {
  return (
    <Link to={"/"}>
      <img src={logoImage} alt="로고 이미지" width={112} height={18} />
    </Link>
  );
}
