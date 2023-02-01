import { HeaderWrapper } from "./HeaderContainer.styled";

const HeaderContainer = ({children}) => {
    
    return (
        <HeaderWrapper>
            {children}
        </HeaderWrapper>
    );
}

export default HeaderContainer;