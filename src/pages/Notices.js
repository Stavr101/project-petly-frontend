import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesCategoriesList from "components/NoticesCategoriesList/NoticesCategoriesList";
import testPets from "components/NoticesCategoriesList/testList.json";
import AddNoticeButton from "components/AddNoticeButton/AddNoticeButton";
import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";

function NoticesPage() {
  return (
    <MainPageContainer>
      <h1>Find your favorite pet</h1>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList userPets={testPets} />
      <AddNoticeButton />
    </MainPageContainer>
  );
}

export default NoticesPage;
