import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";
import { OurFriendsList } from "components/OurFriendsList/OurFriendsList";
import TitlePage from "components/TitlePage/TitlePage";

export default function OurFriends() {
  return (
    <MainPageContainer>
      <TitlePage> Our Friends</TitlePage>
      <OurFriendsList />
    </MainPageContainer>
  );
}
