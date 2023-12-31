import React from "react";

import WaterworksGraph from "../components/WaterworksGraph/WaterworksGraph";
import Card from "../components/Card/Card";

const GraphPage = () => {
  return (
    <div className="container">
      <div className="row">
        <Card className="col-12">
          <WaterworksGraph multiplier="2"/>
        </Card>
      </div>
    </div>
  );
};

export default GraphPage;
