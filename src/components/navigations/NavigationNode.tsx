import styled from "@emotion/styled";
import * as React from "react";

interface Props {
  item: string;
  childItems: string[] | null;
  nodeLevel: number;
  display: boolean;
}

const NavigationNode = ({ item, childItems, nodeLevel, display }: Props) => {
  const [childNodesVisiblity, setChildNodesVisiblity] = React.useState(false);

  const NavigationNodeDiv = styled.div`
    padding: 16px 0 16px ${16 + nodeLevel * 8}px;
    ${1 < nodeLevel ? "color: #858585;" : ""}
    ${display ? "" : "display: none;"}
  `;
  return (
    <>
      <a href={`#${item.toLowerCase()}`}>
        <NavigationNodeDiv
          onClick={() => {
            setChildNodesVisiblity(prev => (prev ? false : true));
          }}
        >
          {item}
        </NavigationNodeDiv>
      </a>
      {childItems
        ? childItems.map((child, index) => (
            <NavigationNode key={index} item={child} nodeLevel={nodeLevel + 1} display={childNodesVisiblity} />
          ))
        : null}
    </>
  );
};

NavigationNode.defaultProps = {
  childItems: null,
  nodeLevel: 1,
  display: true
};

export default NavigationNode;
