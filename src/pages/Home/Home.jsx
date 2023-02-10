import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";
import { MainPage, MainHeader, SectionHero, MainImageBlock } from "./Home.styled";

const Home = () => {

  const { t } = useTranslation();

  return (
    <MainPage>
      <SectionHero>
        <MainPageContainer>
          <MainHeader>{t("main.welcome")}</MainHeader>
        </MainPageContainer>
        <MainImageBlock></MainImageBlock>
      </SectionHero>
    </MainPage>
  );
}

export default Home;