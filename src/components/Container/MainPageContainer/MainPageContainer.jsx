import { MainPageContainerBlock } from "./MainPageContainer.styled";

const MainPageContainer = ({children}) => {
    return (
        <MainPageContainerBlock>{children}</MainPageContainerBlock>
    );
}

export default MainPageContainer;