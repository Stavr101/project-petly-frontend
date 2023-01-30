import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav";
// import NoticesCategoriesList from "components/NoticesCategoriesList/NoticesCategoriesList";
// import AddNoticeButton from "components/AddNoticeButton/AddNoticeButton";
import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";

function NoticesPage() {
  return (
    <MainPageContainer>
      <h1>Find your favorite pet</h1>
      <NoticesSearch />
      <NoticesCategoriesNav />
      {/* <NoticesCategoriesList /> */}
      {/* <AddNoticeButton /> */}
    </MainPageContainer>
  );
}

export default NoticesPage;
