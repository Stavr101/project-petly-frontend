import { LogoBlack, LogoAccent, LogoLink } from "./Logo.styled";

const Logo = () => {
    return (
        <LogoLink aria-current="page" href="/">
            <LogoBlack>pe
            <LogoAccent>t</LogoAccent>
            ly</LogoBlack>
        </LogoLink>
        
    );
}

export default Logo;