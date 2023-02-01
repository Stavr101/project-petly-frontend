import React, { useState } from 'react';
import { PrimaryNav, SecondaryNav, NavLink, NavMenu, AuthMenu } from "./Nav.styled";
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';
import { useAuth } from 'hooks';
import { useMediaQuery } from 'react-responsive';
import Menu from '@mui/icons-material/Menu';
import Modal from "components/ModalMenu/Modal/Modal";
import { BurgerBtn } from './Nav.styled';

const Nav = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const { isLoggedIn } = useAuth();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PrimaryNav showModal={showModal}>
        <NavMenu>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/notices">Find pet</NavLink>
          <NavLink to="/friends">Our friends</NavLink>
        </NavMenu>
      </PrimaryNav>

        <SecondaryNav>
        {isLoggedIn ?
          <UserNav /> :
          <AuthMenu>
            <AuthNav />
          </AuthMenu>
          }
        </SecondaryNav>

      {showModal && <Modal onClose={setShowModal}>
        <PrimaryNav>
        <NavMenu>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/notices">Find pet</NavLink>
          <NavLink to="/friends">Our friends</NavLink>
        </NavMenu>
      </PrimaryNav>
      </Modal>}
        <BurgerBtn onClick={() => setShowModal(current => !current)}> <Menu fontSize="large" /></BurgerBtn>
    </>
  )
}

export default Nav;
