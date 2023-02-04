import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";
import { MainHeader } from "./Home.styled";
import { MainImageBlock } from "./Home.styled";
import { SectionHero } from "./Home.styled";

const Home = () => {
  return (
    <main>
      <SectionHero>
        {/* <MainPageContainer> */}
          <MainHeader>Take good care of your small pets</MainHeader>
        {/* </MainPageContainer> */}
        <MainImageBlock></MainImageBlock>
      </SectionHero>
    </main>
  );
}

export default Home;