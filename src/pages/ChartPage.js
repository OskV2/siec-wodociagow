import React from 'react'

import Card from "../components/Card/Card";
import WaterworksChart from "../components/WaterworksChart/WaterworksChart";

const ChartPage = () => {

  return (
    <div className="container">
      <div className="row">
        <Card className="col-12">
          <WaterworksChart />
        </Card>
      </div>
    </div>
  )
}

export default ChartPage