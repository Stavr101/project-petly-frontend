import { NavBtnLink } from "./UserNav.styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserNav = () => {
  return (
    <NavBtnLink to="/user">
      {" "}
      <AccountCircleIcon /> &nbsp; Account
    </NavBtnLink>
  );
};

export default UserNav;
