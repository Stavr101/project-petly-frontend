import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";
import { MainPage, MainHeader, SectionHero, MainImageBlock } from "./Home.styled";

const Home = () => {
  return (
    <MainPage>
      <SectionHero>
        <MainPageContainer>
          <MainHeader>Take good care of your small pets</MainHeader>
        </MainPageContainer>
        <MainImageBlock></MainImageBlock>
      </SectionHero>
    </MainPage>
  );
}

export default Home;