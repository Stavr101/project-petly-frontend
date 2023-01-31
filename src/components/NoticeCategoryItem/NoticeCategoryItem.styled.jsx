import styled from "styled-components"

export const ItemNoticesImgDiv = styled.div`
min-width: 280px;
max-width: 300px;
`

export const ItemNoticesTitle = styled.h2`
font-weight: 700;
font-size: 28px;
line-height: 38px;
letter-spacing: -0.01em;
color: #111111;
`

/* export const ItemNoticesP = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 22px;
display: flex;
align-items: center;
text-align: center;
color: #111111;
` */

export const ItemNoticesSpan = styled.span`
text-align: center;
`

export const ItemNoticesLi = styled.li`
max-width: 280px;
margin-top: 32px;
`
export const ItemNoticesUlList = styled.ul`
margin-top: 20px;
`

export const ItemButtonNotices = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

export const ItemButtonNoticesLearnMore = styled.button`
padding: 8px 28px;
margin-top: 20px;
font-weight: 500;
color: #F59256;
font-size: 14px;
line-height: 1.35;
letter-spacing: 0.04em;
background: #ffffff;
border: 2px solid #f59256;
border-radius: 40px;

@media only screen and (min-width: 768px) {
  padding: 10px 28px;
  font-size: 20px;
line-height: 1.2;
}

&.active {
  color: #FFFFFF;
  background: #F59256;
}

&:hover {
  color: #FFFFFF;
  background: #F59256;
}
`

export const ItemNoticesListLi = styled.li`
 margin-top: 8px;
`

export const ItemButtonNoticesDelete = styled.button`
color: #FF6101;
padding: 8px 28px;
margin-top: 12px;
font-weight: 500;
font-size: 16px;
line-height: 1.35;
letter-spacing: 0.04em;
background: #ffffff;
border: 2px solid #FF6101;
border-radius: 40px;

@media only screen and (min-width: 768px) {
  padding: 10px 28px;
  font-size: 20px;
line-height: 1.2;
}

&.active {
  color: #FFFFFF;
  background: #F59256;
}

&:hover {
  color: #FFFFFF;
  background: #F59256;
}
`