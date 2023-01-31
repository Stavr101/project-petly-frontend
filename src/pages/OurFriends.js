import { MainPageContainerBlock } from "components/Container/MainPageContainer/MainPageContainer.styled";
import { OurFriendsList } from "components/OurFriendsList/OurFriendsList";
import TitlePage from "components/TitlePage/TitlePage";

export default function OurFriends() {
  return (
    <MainPageContainerBlock>
      <TitlePage> OurFriends</TitlePage>
      <OurFriendsList />
    </MainPageContainerBlock>
  );
}
