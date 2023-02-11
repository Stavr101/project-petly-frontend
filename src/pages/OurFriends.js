import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";
import { OurFriendsList } from "components/OurFriendsList/OurFriendsList";
import TitlePage from "components/TitlePage/TitlePage";
import { useTranslation } from 'react-i18next';

export default function OurFriends() {
  const { t } = useTranslation();
  return (
    <MainPageContainer>
      <TitlePage>{t("friends.friends")}</TitlePage>
      <OurFriendsList />
    </MainPageContainer>
  );
}
