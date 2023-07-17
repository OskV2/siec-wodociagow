import React from 'react'

import Card from '../components/Card/Card';
import WaterworksTable from '../components/WaterworksTable/WaterworksTable';

const TablePage = () => {
  return (
    <div className="container">
      <div className="row">
        <Card className="col-12">
          <WaterworksTable />
        </Card>
      </div>
    </div>
  )
}

export default TablePage