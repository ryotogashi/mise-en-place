import { css } from "@emotion/core";

import CardImage from "../assets/img-for-card.jpg";

export const GlobalStyle = css`
  body {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #e5e5e5;
  }

  hr {
    width: 10%;
    margin: 56px auto 32px auto;
    opacity: 0.3;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #323439;
  }
`;

// Sample Data

export const names = [
  "Ana Laura",
  "Anahi",
  "Andrea",
  "Ayumi",
  "Caro",
  "Cedric Balm",
  "Celeste",
  "Chad Demmer",
  "Elif Kurtcu",
  "Ellyn Hay",
  "Enuki Kvintradze",
  "Erika Kin",
  "Ryo Togashi",
  "Rei Togashi",
  "Riku Togashi"
];

export const cardData = {
  title: "Lorem ipsum dolor",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi porta lorem mollis aliquam.",
  cardImg: CardImage
};

export const slideshowData = [
  "https://picsum.photos/1200/1200/?image=804",
  "https://picsum.photos/1200/1200/?image=1005",
  "https://picsum.photos/1200/1200/?image=838"
];
