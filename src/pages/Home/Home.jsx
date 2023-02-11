import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";
import { MainPage, MainHeader, SectionHero, MainImageBlock } from "./Home.styled";
import { useTranslation } from 'react-i18next';

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