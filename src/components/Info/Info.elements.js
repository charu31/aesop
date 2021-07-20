import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding-bottom: 160px;
  // border: 2px solid yellow;
  @media (min-width: 320px) and (max-width: 640px) {
    padding-bottom: 80px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    padding-bottom: 100px;
  }

`;

export const InfoRow = styled.div`
  // border: 2px solid red;
  color: #fff;
  display: flex;
  align-items: flex-start;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  @media (min-width: 320px) and (max-width: 1024px){
    flex-direction: column;
}
`;

export const InfoColumn = styled.div`
 
  // border: 2px solid aqua;
  color: #fff;
  flex: 1;
  max-width: 50%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  max-height: 100%;
  margin: auto;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
  }
  @media (min-width: 320px) and (max-width: 1024px){
    order: 2;
  }
`;

export const InfoColumnimg = styled.div`

  // border: 2px solid black;
  color: #fff;
  max-width: 60%;
  @media (min-width: 280px) and (max-width: 1024px){
    order: 1;
    max-width: 100%;
    margin-right: 10%;
    margin-bottom: 5%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  color: #fff;
  // border: 2px solid pink;
  padding-top: 0;
`;

export const ImgWrapper = styled.div`
  // border: 2px solid yellow;
  color: #fff;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  // max-width: ${({ newslider }) => (newslider ? "60%" : "100%")};
`;

export const TopLine = styled.h3`
  letter-spacing: 1.4px;
  font-size: 14px;
  color: #fff;
  line-height: 1.7;
  font-weight: 400;
  margin-bottom: 20px;
  
`;

export const Img = styled.img`
  padding-right: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  // max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  color: #333;
  font-size: 25px;
  line-height: 1.33;
  font-weight: 300;
  font-family: Zapf Humanist, serif !important;

  @media (min-width: 640px){
    font-size: 30px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 1.7;
  font-weight: 400;
  color: #333;

`;

export const Arrow = styled.p`
  // border: 2px solid yellow;
  color: white;
  font-weight: 10;
`;

export const Button = styled.button`

  width: 80%;
  font-size: 14px;
  z-index: 1;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  background: #fffef2;
  color: #333;
  white-space: nowrap;
  outline: none;
  padding: 19px 23px;
  border-color: rgba(51, 51, 51, 0.2);
  cursor: pointer;

  @media screen and (max-width: 420px) {
    width: 100%
  }


  &:hover {
    transition: all 0.3s ease-out;
    background-color: #333;
    color: white;
  }
`;

export const Container = styled.div`
  // border: 2px solid blue;
  color: #333;
  z-index: 1;
  max-width: 100%;

  @media screen and (max-width: 991px) {
    // padding-right: 30px;
    // padding-left: 30px;
  }
`;
