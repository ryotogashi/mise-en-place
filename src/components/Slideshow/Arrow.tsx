import * as React from "react";

interface Props {
  height: string;
  width: string;
}

export const LeftArrow = ({ height, width }: Props) => (
  <svg width={width} height={height} viewBox="0 0 50 80" xmlSpace="preserve">
    <polyline
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      points="45.63,75.8 0.375,38.087 45.63,0.375"
    />
  </svg>
);

LeftArrow.defaultProps = {
  height: "30px",
  width: "30px"
};

export const RightArrow = ({ height, width }: Props) => (
  <svg width={width} height={height} viewBox="0 0 50 80" xmlSpace="preserve">
    <polyline
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      points="0.375,0.375 45.63,38.087 0.375,75.8"
    />
  </svg>
);

RightArrow.defaultProps = {
  height: "30px",
  width: "30px"
};
