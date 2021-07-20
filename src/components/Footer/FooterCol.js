import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ColStyle = styled.div`
//  border: 2px solid blue;
 grid-column: 1 span;
 color: #fffef2 !important;
    

  .heading {
 
    color: #fffef2 !important;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
    line-height: 2
    font-family: Suisse Regular,sans-serif;
  }

  ul{
    text-decoration: none;
    list-style: none;
  }
  li {
    color: #fffef2 !important;
    margin-top: 0;
    margin-bottom: 0;

    font-size: 14px;
    line-height: 2.5;
    font-family: Suisse Regular,sans-serif !important;
    
  
  }
  a {
    color: #fffef2 !important;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
  }

  .head_line{
    border-bottom: 1px solid #fffef2;
    margin: 16px 0;

  }
`;

export default function FooterCol({
  heading = "Col Heading",
  links = [
    {
      type: "Link",
      title: "Home",
      path: "/home",
    },
    {
      type: "Link",
      title: "About",
      path: "/about",
    },
  ],
}) {
  return (
    <ColStyle>
      <h2 className="heading">{heading}</h2>
      <div className="head_line"></div>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.arrow === "yes" ? (
              <Link to={item.path} style={{ textDecoration: "none" }}>
                {item.list}
                <span>
                  <i class="fas fa-arrow-up"></i>
                </span>
              </Link>
            ) : (
              <Link to={item.path} style={{ textDecoration: "none" }}>
                {item.list}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}
