import React from "react";
import FooterCol from "./FooterCol";
import styled from "styled-components";

const FooterStyle = styled.div`
  
    background-color: #333;
    color: #fffef2 !important;
    border-bottom: 3px solid #d6d5cb;
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: auto 1fr
    padding: 35px 20px !important;


     @media (min-width: 320px){
        display: grid;
     grid-template-rows: auto 1fr;
     grid-template-columns: repeat(2,1fr);
     grid-column-gap: 35px;
     grid-row-gap: 35px;
     padding: 40px 34px;
     }

     @media (min-width: 1025px){

        // border: 2px solid yellow;
        grid-template-rows: auto 1fr;
        grid-template-columns: repeat(5,1fr);
        grid-column-gap: 40px;
        grid-row-gap: 40px;
        padding: 50px 40px;
        }

    .footer__col1{
        grid-column: 1/3;
    }

    .head_line{
        border-bottom: 1px solid #fffef2;
        margin: 16px 0;
    }
    .footer__col1__p{
      // border: 2px solid aqua;
        font-size: 14px;
        line-height: 2;
        color: #fffef2;
    }

    .check_text{
      // border: 2px solid white;
      display: flex; 
    }

    .check_icon{
       line-height: 2;
       -webkit-appearance: none;
       width: 13px;
       height: 13px;
       appearance: none;
     
       margin: 7px 0 0;
       flex: 0 0 13px;
       cursor: pointer;
       border: 2px solid white;
       color: #fffef2;
       background-clip: content-box;
       font-size: 14px;
       background-color: transparent;
    }

.footer__col1__title{
    color: #fffef2 !important;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
    line-height: 2;
}
.footer__col1__link{
  width: 100%;
  font-size: 14px;
  z-index: 1;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  color: white;
  border: 1px solid white;
  border-right: none;

  outline: none;
  padding: 10px 23px;
  margin-bottom: 10px;
  cursor: pointer;
   &:hover {
     transition: all 0.3s ease-out;
     background-color: #333;
     color: white;
   }
  }

  @media (min-width: 1025px){
    .footer__col1{
        grid-column: 2 span;
      }
    }
  }

`;

const Footer2 = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;

  @media (min-width: 1025px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  .footer2_content {
    color: #fffef2 !important;
    font-family: Suisse Regular, sans-serif;
  }
`;

function Footer() {
  return (
    <>
      <FooterStyle>
        <div className="footer__col1">
          <h1 className="footer__col1__link">Email address</h1>
          <div className="check_text">
            <input type="checkbox" id="f_text" className="check_icon" />
            <label htmlFor="f_text" className="footer__col1__p">
              Subscribe to receive communications from Aesop about our products
              and services. By subscribing, you confirm you have read and accept
              our
            </label>
          </div>
        </div>

        <FooterCol
          id="1"
          classs="false"
          heading="Orders and Support"
          links={[
            {
              id: 1,
              arrow: "yes",
              list: "Contact us",
            },
            {
              id: 1,
              arrow: "yes",
              list: "FAQs",
            },
            {
              id: 1,
              arrow: "yes",
              list: "Delivery and Returns",
            },
            {
              id: 1,
              arrow: "no",
              list: "Terms and conditions",
            },
          ]}
        />

        <FooterCol
          id="1"
          classs="false"
          heading="Services"
          links={[
            {
              id: 1,
              arrow: "no",
              list: "Live assisstance",
            },
            {
              id: 1,
              arrow: "no",
              list: "Corporate gifts",
            },
            {
              id: 1,
              arrow: "no",
              list: "Facial Appointments",
            },
          ]}
        />

        <FooterCol
          id="1"
          classs="false"
          heading="Location preferences"
          links={[
            {
              id: 1,
              arrow: "no",
              list: "Shipping: Hong Kong (S.A.R)",
            },
            {
              id: 1,
              arrow: "no",
              list: "Language: English",
            },
          ]}
        />

        <div className="footer__col1">
          <h1 className="footer__col1__title">Sustainability</h1>
          <div className="head_line"></div>
          <p className="footer__col1__p">
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation.
          </p>
        </div>

        <FooterCol
          id="1"
          classs="false"
          heading="About"
          links={[
            {
              id: 1,
              arrow: "no",
              list: "Our story",
            },
            {
              id: 1,
              arrow: "yes",
              list: "Foundation",
            },
            {
              id: 1,
              arrow: "yes",
              list: "Careers",
            },
            {
              id: 1,
              arrow: "yes",
              list: "Privacy policy",
            },
            {
              id: 1,
              arrow: "yes",
              list: "Accessibility",
            },
          ]}
        />

        <FooterCol
          id="1"
          classs="true"
          heading="Social Media"
          links={[
            {
              id: 1,
              arrow: "yes",
              list: "Instagram",
            },
            {
              id: 1,
              arrow: "yes",
              list: "Twitter",
            },
            {
              id: 1,
              arrow: "yes",
              list: "LinkedIn",
            },
            {
              id: 1,
              arrow: "no",
              list: "WeChat",
            },
            {
              id: 1,
              arrow: "yes",
              list: "Weibo",
            },
          ]}
        />
      </FooterStyle>
      <Footer2>
        <span className="footer2_content">&#169; Aesop</span>
      </Footer2>
    </>
  );
}

export default Footer;
