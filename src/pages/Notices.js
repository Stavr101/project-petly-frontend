
import React from "react";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav";
// import AddNoticeButton from "components/AddNoticeButton/AddNoticeButton";
import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";

function NoticesPage() {
  return (
    <div>
      NoticesPage
    </div>
    <MainPageContainer>
      <h1>Find your favorite pet</h1>
      <NoticesSearch />
      <NoticesCategoriesNav />
      {/* <AddNoticeButton /> */}
    </MainPageContainer> 
  );
}

export default NoticesPage;

