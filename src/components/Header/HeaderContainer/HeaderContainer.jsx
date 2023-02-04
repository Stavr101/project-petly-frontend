import { HeaderWrapper } from "./HeaderContainer.styled";
import Header from "../Header/Header";
import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";

const HeaderContainer = () => {
  return (
    <MainPageContainer>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    </MainPageContainer>
  );
};

export default HeaderContainer;
