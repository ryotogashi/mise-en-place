import { css } from "@emotion/core";

import CardImage from "./assets/img-for-card.jpg";

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

export const siteNavData: [string, string[]][] = [
  [
    "Buttons",
    [
      "Basic Button",
      "Flat Button",
      "Icon Button",
      "Square Icon Button",
      "Material Button",
      "Toggle Button"
    ]
  ],
  [
    "Inputs",
    [
      "Basic Text Input",
      "Date Text Input",
      "Password Text Input",
      "Underline Text Input",
      "Radio Buttons",
      "Custom Radio Buttons"
    ]
  ],
  ["Cards", ["Basic Card", "Picture Covered Card"]],
  ["Lists", ["Normal List", "Card List"]],
  ["Navigations", ["Side Navigation", "Top Navigation"]],
  ["Slideshows", ["Normal Slideshow"]],
  ["Composite Component", ["Example list usage"]]
];

// Sample Data

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

export const radioData = ["radioData1", "radioData2", "radioData3"];

export const navigationItems: [string, string[] | null][] = [
  ["item 1", null],
  ["item 2", ["item 2 child 1", "item 2 child 2", "item 2 child 3"]],
  ["item 3", null],
  ["item 4", ["item 4 child 1", "item 4 child 2", "item 4 child 3"]]
];

export const navigationItems2 = ["item 1", "item 2", "item 3", "item 4"];
