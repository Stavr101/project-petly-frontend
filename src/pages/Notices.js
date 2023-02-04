import { useState } from 'react';
import { Outlet, useParams } from "react-router-dom";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesCategoriesList from "components/NoticesCategoriesList/NoticesCategoriesList";
import AddNoticeButton from "components/AddNoticeButton/AddNoticeButton";
import MainPageContainer from "components/Container/MainPageContainer/MainPageContainer";
import { Title } from "components/NoticesCategoriesNav/NoticesCategoriesNav.styled";

function NoticesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { categoryName } = useParams();

  console.log(categoryName)

  return (
    <MainPageContainer>
      <Title>Find your favorite pet</Title>
      <NoticesSearch setSearchQuery={setSearchQuery}/>
      <NoticesCategoriesNav />
      <NoticesCategoriesList category={categoryName}
        searchQuery={searchQuery}/>
      <AddNoticeButton />
      <Outlet />
    </MainPageContainer>
  );
}

export default NoticesPage;
