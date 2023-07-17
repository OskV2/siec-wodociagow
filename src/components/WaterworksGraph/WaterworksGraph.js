import React, { useState } from "react";
import { Graph } from "react-d3-graph";

import "./WaterworksGraph.scss";

import Modal from "../Modal/Modal";

//import images for nodes and modal
import WaterTreatment from "../../img/water-treatment.svg";
import WaterSource from "../../img/water-source.svg";
import WaterPipes from "../../img/pipes.svg";
import Error from "../../img/error.svg";
import Checkmark from "../../img/ok.svg";
import Close from "../../img/close.svg";

// function for responsive graph width
const getDeviceWidth = (multiplier) => {
  if (window.screen.width > 1400) {
    return 600 * multiplier;
  }
  if (window.screen.width > 1200) {
    return 510 * multiplier;
  }
  if (window.screen.width > 992) {
    return 420 * multiplier;
  }
  if (window.screen.width > 768) {
    return 660;
  }
  if (window.screen.width > 576) {
    return 480;
  } else {
    return 320;
  }
};

// data for graph and modal
const data = {
  nodes: [
    {
      id: "1", // 1 - Green Water Source
      svg: WaterSource,
      size: 600,
      device: {
        title: "Żródło zielone",
        type: "ŹRÓDŁO",
        date: "2021-05-22T23:50:21.817Z",
        state: "ERROR",
      },
    }, 
    {
      id: "2", // 2 - Big Water Treatment
      svg: WaterTreatment,
      size: 600,
      device: {
        title: "Oczyszczalnia wielka",
        type: "OCZYSZCZALNIA",
        date: "1999-07-11T23:20:21.817Z",
        state: "OK",
      },
    }, 
    {
      id: "3", // 3 - Transfer Station
      svg: WaterPipes,
      size: 600,
      device: {
        title: "Stacja przesyłowa",
        type: "STACJA",
        date: "2017-02-14T23:53:21.817Z",
        state: "OK",
      },
    }, 
    {
      id: "4", // 4 - Red Water Source
      svg: WaterSource,
      size: 600,
      device: {
        title: "Żródło czerwone",
        type: "ŹRÓDŁO",
        date: "2020-05-12T23:50:21.817Z",
        state: "ERROR",
      },
    }, 
    {
      id: "5", // 5 - Small Water Treatment
      svg: WaterTreatment,
      size: 600,
      device: {
        title: "Oczyszczalnia mała",
        type: "OCZYSZCZALNIA",
        date: "2002-12-12T23:50:21.817Z",
        state: "OK",
      },
    }, 
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

const WaterworksGraph = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [clickedNodeId, setClickedNodeId] = useState(null);

  // graph configuration
  const myConfig = {
    directed: true,
    nodeHighlightBehavior: true,
    linkHighlightBehavior: true,
    width: getDeviceWidth(props.multiplier), //here i use function for responsive graph width
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
    },
  };

  // click on node to open modal
  const onClickNode = (nodeId) => {
    setClickedNodeId(nodeId);
    setModalIsShown(true);
  };

  // click on background or on button to close modal
  const onCloseNode = (nodeId) => {
    setClickedNodeId(null);
    setModalIsShown(false);
  };

  //function for formatting date
  const formatDate = (dateString) => {
    const options = {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }

    const date = new Date(dateString);
    return date.toLocaleDateString("pl-PL", options);
  }

  // modal content depends on clicked node id
  const clickedNode = data.nodes.find((node) => node.id === clickedNodeId)?.device;
  const modalContent = (
    <Modal onClose={onCloseNode}>
      {clickedNode && (
        <>
          <span className="modal__content__type">{clickedNode.type}</span>
          <h2>{clickedNode.title}</h2>
          <p>Data utworzenia: {formatDate(clickedNode.date)}</p>
          <div className="d-flex flex-row align-items-center">
            <span>Status:</span>
            <img className="modal__content__state__img" src={clickedNode.state === 'OK' ? Checkmark : Error} alt="State of device" />
            <p className={'modal__content__state ' + (clickedNode.state === 'OK' ? 'modal__content__state--ok' : 'modal__content__state--error')}>{clickedNode.state}</p>
          </div>
        </>
      )}
      <img className="modal__content__close" onClick={onCloseNode} src={Close} alt="Close"/>
    </Modal>
  );

  return (
    <>
      <h2 className="graph__title">Struktura urządzeń</h2>
      {modalIsShown && modalContent}
      <Graph
        id="graph-id"
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
      />
    </>
  );
};

export default WaterworksGraph;
