import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "../assets/animation/404Animation.json";
import { Link } from "react-router-dom";
import useTitle from "../useTitle";

const style = {
  loop: true,
  autoplay: true,
  height: 300,
};

const ErrorScreen = () => {
  useTitle("Pagina non Trovata");
  return (
    <Wrapper>
      <h3>pagina non trovata</h3>
      <Lottie style={style} animationData={animationData} />
      <Link to='/' className='btn btn-primary'>
        torna in home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  display: --ms-grid;
  display: --moz-grid;
  display: --webkit-grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
  }
  .btn {
    border-radius: 22px;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;
