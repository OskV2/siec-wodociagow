import React from 'react'

import Card from '../Card/Card'
import WaterworksChart from '../WaterworksChart/WaterworksChart'
import WaterworksGraph from '../WaterworksGraph/WaterworksGraph'
import WaterworksTable from '../WaterworksTable/WaterworksTable'

const Dashboard = () => {
  return (
    <div className="container">
        <div className="row">
          <Card className="col-12 col-lg-6">
            <WaterworksGraph multiplier="1" />
          </Card>
          <Card className="col-12 col-lg-6">
            <WaterworksChart />
          </Card>
        </div>
        <div className="row">
          <Card className="col-12">
            <WaterworksTable />
          </Card>
        </div>
    </div>
  )
}

export default Dashboard