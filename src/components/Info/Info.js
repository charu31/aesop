import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Slider3 from "../Slider3/Slider3";
import slider3data from "../Slider3/Slider3data";
import "../../App.css";

import {
  InfoSec,
  Container,
  InfoRow,
  InfoColumn,
  InfoColumnimg,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Button,
  ImgWrapper,
  Img,
  Arrow,
} from "./Info.elements";

function Info({
  topLine,
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
  start,
  newslider,
}) {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>

                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>

                <Link to="/sign-up" style={{ textDecoration: "none" }}>
                  <Button>
                    {buttonLabel}
                    <Arrow>
                      <FaArrowRight style={{ color: "#333" }} />
                    </Arrow>
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>

            {newslider ? (
              <InfoColumnimg>
                <ImgWrapper start={start}>
                  <Slider3 slider3data={slider3data} />
                </ImgWrapper>
              </InfoColumnimg>
            ) : (
              <InfoColumnimg>
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
              </InfoColumnimg>
            )}
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Info;
