import React from 'react'
import { Graph } from "react-d3-graph";

import WaterTreatment from "../../img/water-treatment.svg";
import WaterSource from "../../img/water-source.svg";
import WaterPipes from "../../img/pipes.svg";

// function for responsive graph width
const getDeviceWidth = () => {
  if (window.screen.width > 1400) {
    return 600
  } 
  if (window.screen.width > 1200) {
    return 510
  } 
  if (window.screen.width > 992) {
    return 420
  } 
  if (window.screen.width > 768) {
    return 660
  }
  if (window.screen.width > 576) {
    return 480
  } else {
    return 320
  }
}

const data = {
  nodes: [
    { id: "1", svg: WaterSource, size: 600 },        // 1 - Green Water Source
    { id: "2", svg: WaterTreatment, size: 600 },     // 2 - Big Water Treatment
    { id: "3", svg: WaterPipes, size: 600 },         // 3 - Transfer Station
    { id: "4", svg: WaterSource, size: 600 },        // 4 - Red Water Source
    { id: "5", svg: WaterTreatment, size: 600 },     // 5 - Small Water Treatment
  ],
  links: [
    { source: "1", target: "2", label: "opis" },
    { source: "1", target: "3", label: "opis" },
    { source: "3", target: "2", label: "opis" },
    { source: "3", target: "4", label: "opis" },
    { source: "4", target: "3", label: "opis" },
    { source: "4", target: "5", label: "opis" },
  ],
};

const myConfig = {
  directed: true,
  nodeHighlightBehavior: true,
  linkHighlightBehavior: true,
  width: getDeviceWidth(),
  node: {
    size: 450,
    highlightStrokeColor: "blue",
    symbolType: "circle",
    fontSize: 0,
    highlightFontSize: 0,
  },
  link: {
    fontSize: 16,
    renderLabel: true,
    labelPosition: "right",
    strokeWidth: 4,
    highlightColor: "lightpink",
  },
  d3: {
    linkLength: 200,
    linkStrength: 2,
  }
};

const WaterworksGraph = () => {

  const onClickGraph = () => {
    console.log(`Clicked the graph background`);
  };

  const onClickNode = (nodeId) => {
    console.log(`Clicked node ${nodeId}`);
  };

  const onRightClickNode = (event, nodeId) => {
    console.log(`Right clicked node ${nodeId}`);
  };

  const onMouseOverNode = (nodeId) => {
    console.log(`Mouse over node ${nodeId}`);
  };

  const onMouseOutNode = (nodeId) => {
    console.log(`Mouse out node ${nodeId}`);
  };

  const onClickLink = (source, target) => {
    console.log(`Clicked link between ${source} and ${target}`);
  };

  const onRightClickLink = (event, source, target) => {
    console.log(`Right clicked link between ${source} and ${target}`);
  };

  const onMouseOverLink = (source, target) => {
    console.log(`Mouse over in link between ${source} and ${target}`);
  };

  const onMouseOutLink = (source, target) => {
    console.log(`Mouse out link between ${source} and ${target}`);
  };

  return (
    <Graph
    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
    data={data}
    config={myConfig}
    onClickNode={onClickNode}
    onRightClickNode={onRightClickNode}
    onClickGraph={onClickGraph}
    onClickLink={onClickLink}
    onRightClickLink={onRightClickLink}
    onMouseOverNode={onMouseOverNode}
    onMouseOutNode={onMouseOutNode}
    onMouseOverLink={onMouseOverLink}
    onMouseOutLink={onMouseOutLink}
  />
  )
}

export default WaterworksGraph