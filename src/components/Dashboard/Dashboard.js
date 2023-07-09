import React from 'react'

import Card from '../Card/Card'
import Chart from '../Chart/Chart'
import Graph from '../Graph/Graph'
import Table from '../Table/Table'

const Dashboard = () => {
  return (
    <div className="container">
        <div className="row">
          <Card className="col-12 col-lg-6">
            <Graph />
          </Card>
          <Card className="col-12 col-lg-6">
            <Chart />
          </Card>
        </div>
        <div className="row">
          <Card className="col-12">
            <Table />
          </Card>
        </div>
    </div>
  )
}

export default Dashboard