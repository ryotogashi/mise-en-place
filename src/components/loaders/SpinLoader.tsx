import styled from "@emotion/styled";
import * as React from "react";
import { secondary, white } from "../../constants/colors";

interface Props {
  size: string;
  color: string;
  coverColor: string;
}

const SpinLoader = ({ size, color, coverColor }: Props) => {
  const Spinner = styled.div`
    border: 16px solid ${coverColor};
    border-top: 16px solid ${color};
    border-radius: 50%;
    width: ${size};
    height: ${size};
    animation: spin 2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
  return <Spinner />;
};

SpinLoader.defaultProps = {
  size: "70px",
  color: secondary,
  coverColor: white
};

export default SpinLoader;
