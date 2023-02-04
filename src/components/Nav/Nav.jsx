import React, { useState } from 'react';
import {
  PrimaryNav,
  SecondaryNav,
  NavLink,
  NavMenu,
  AuthMenu,
  MobileContainer,
  TabletContainer,
  StyledBurger,
  LanguageSwitch,
  LanguageBtn
} from "./Nav.styled";
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';
import { useAuth } from 'hooks';
import { useMediaQuery } from 'react-responsive';
import Modal from "components/ModalMenu/Modal/Modal";
// import { useTranslation } from 'react-i18next';

const Nav = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const { isLoggedIn } = useAuth();

  const [showModal, setShowModal] = useState(false);

  // const { t, i18n } = useTranslation();
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // }

  return (
    <>
      {
        isDesktop &&
    <>
        <PrimaryNav>
        <NavMenu>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/notices">Find pet</NavLink>
          <NavLink to="/friends">Our friends</NavLink>
        </NavMenu>
          </PrimaryNav>
          {/* <LanguageSwitch>
            <LanguageBtn onClick={() => changeLanguage("en")}>EN</LanguageBtn>
            <LanguageBtn onClick={() => changeLanguage("uk")}>UA</LanguageBtn>
          </LanguageSwitch> */}
      <SecondaryNav>
        {isLoggedIn ? <UserNav /> : <AuthMenu> <AuthNav /> </AuthMenu>}
      </SecondaryNav>
        </>
      }
      
      {isMobile && showModal && <Modal onClose={setShowModal}>
        <MobileContainer>
          <SecondaryNav>{isLoggedIn ? <UserNav /> : <AuthMenu> <AuthNav /> </AuthMenu>}</SecondaryNav>
          <PrimaryNav>
            <NavMenu>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/notices">Find pet</NavLink>
              <NavLink to="/friends">Our friends</NavLink>
            </NavMenu>
          </PrimaryNav>
        </MobileContainer>
      </Modal>}

      {isTablet && <SecondaryNav>{isLoggedIn ? <UserNav /> : <AuthMenu> <AuthNav /> </AuthMenu>}</SecondaryNav>}
      {isTablet && showModal && <Modal onClose={setShowModal}>
        <TabletContainer>
          <NavMenu>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/notices">Find pet</NavLink>
            <NavLink to="/friends">Our friends</NavLink>
          </NavMenu>
        </TabletContainer>
      </Modal>}
      
        <StyledBurger aria-label='menu' open={showModal} onClick={() => {
          setShowModal(current => !current);
          setShowModal(!showModal);
        }}>
          <div />
          <div />
          <div />
        </StyledBurger>

    </>
  );
};

export default Nav;
