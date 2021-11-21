import React from "react";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import "./Logo.scoped.css";

const logoDiv = () => {
  return (
    <Aux>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 512 512"
      >
        <path
          className="cls-1"
          d="M235.984,444.958C140.458,434.957,66,354.174,66,256S140.47,77.03,236.007,67.039C236.022,72.458,236,445,236,445m0-377.963"
        />
        <path
          className="cls-1"
          d="M275.969,445.031v-169s165.654-.032,168.965-0.053a190.07,190.07,0,0,1-168.97,169.014"
        />
        <path
          className="cls-1"
          d="M445,236H276s-0.032-165.655-.053-168.966A190.068,190.068,0,0,1,444.96,236M276,67v0.049M364.742,236"
        />
        <path
          className="cls-2"
          d="M256,15 a175,175,0,1,1,0,482 a175,175,0,1,1,0,-482 "
        />
      </svg>
    </Aux>
  );
};

export default logoDiv;
