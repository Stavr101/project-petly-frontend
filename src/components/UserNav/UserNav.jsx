import { useAuth } from "hooks";
import { NavBtnLink } from "./UserNav.styled";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserNav = () => {

  const { user } = useAuth();

  return (
    <NavBtnLink to="/user"> <AccountCircleIcon /> &nbsp; {user.name} </NavBtnLink>
  );
};

export default UserNav;