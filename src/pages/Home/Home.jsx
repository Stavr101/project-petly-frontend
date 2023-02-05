import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";
import { MainHeader } from "./Home.styled";
import { MainImageBlock } from "./Home.styled";
import { SectionHero } from "./Home.styled";
import { useTranslation } from 'react-i18next';

const Home = () => {

  const { t } = useTranslation();

  return (
    <main>
      <SectionHero>
        <MainPageContainer>
          <MainHeader>{t("main.welcome")}</MainHeader>
        </MainPageContainer>
        <MainImageBlock></MainImageBlock>
      </SectionHero>
    </main>
  );
}

export default Home;