import React from "react";

export const line = (
  <svg width="700" height="10">
    <path d="M5 0 L695 0 Q700 0 700 5 Q700 10 695 10 L5 10 Q0 10 0 5 Q0 0 5 0"></path>
  </svg>
);

export const logo = (
  <svg width="100" height="100">
    <polyline stroke="black" fil="none" point="0,0">
      <animateTransform
        attributeName="transform"
        attributeType="xml"
        type="translate"
        from="0,0"
        to="0,100"
        dur="0.5s"
        repeatCount="indefinite"
      ></animateTransform>
      <animateTransform
        attributeName="transform"
        attributeType="xml"
        type="translate"
        from="0,100"
        to="100,100"
        dur="0.5s"
        repeatCount="indefinite"
      ></animateTransform>
      <animateTransform
        attributeName="transform"
        attributeType="xml"
        type="translate"
        from="100,100"
        to="100,0"
        dur="0.5s"
        repeatCount="indefinite"
      ></animateTransform>
      <animateTransform
        attributeName="transform"
        attributeType="xml"
        type="translate"
        from="100,0"
        to="0,0"
        dur="0.5s"
        repeatCount="indefinite"
      ></animateTransform>
    </polyline>
  </svg>
);
