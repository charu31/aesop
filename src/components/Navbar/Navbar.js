import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setclick] = useState(false);
  const handleclick = () => setclick(!click);

  const closeMenu = () => setclick(false);

  return (
    <>
      <div className="topmost_main">
        <div className="topmost_text">
          <p className="topmost_textp">
            Enjoy complimentary carbon neutral shipping on orders over HKD 400
          </p>
          <div className="line"></div>
        </div>
      </div>

      <div className="navbar-top-cont">
        <nav className="navtag">
          <video autoPlay={true} loop id="background-video">
            <source src="/Videos/bgvideo.mp4" type="video/mp4" />
          </video>

          <div className="navbar-cont cont">
            <ul className="mainul_cont">
              <ul className="lnav-maincont">
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMenu}>
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMenu}>
                    Read
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMenu}>
                    Stores
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMenu}>
                    Search
                  </Link>
                </li>
              </ul>

              {/* lc */}
              <ul className="rnav-maincont">
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMenu}>
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMenu}>
                    Cart
                  </Link>
                </li>
              </ul>
            </ul>

            <div className="top_maintext">
              <div className="aesop_titlecont">
                <h1 className="aesop_title">Aesop</h1>
              </div>
              <div className="top_text">
                <h1 className="top_h1">Elsewhere here</h1>
                <p className="top_p">
                  Introducing Othertopias: three fragrances from elsewhere.
                </p>
                <button className="button">
                  Explore the collection
                  <span>
                    <FaArrowRight style={{ color: "white" }} />
                  </span>
                </button>
              </div>
            </div>

            {/* </ul> */}

            <ul className="ulmobile_nav">
              <ul className="lnav_mob">
                <li className="nav-item">
                  <Link className="navbar-logo nav-links">Aesop</Link>
                </li>
              </ul>

              <ul className="rnav_mob">
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMenu}>
                    Cart
                  </Link>
                </li>

                <li className="nav-item menu_icon" onClick={handleclick}>
                  {click ? <FaTimes /> : <HiOutlineMenuAlt4 />}
                </li>
              </ul>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
