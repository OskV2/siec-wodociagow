import React from 'react'

import Hero from "../components/Hero/Hero";
import Card from '../components/Card/Card';
import WaterworksTable from '../components/WaterworksTable/WaterworksTable';

const TablePage = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="row">
          <Card className="col-12">
            <WaterworksTable />
          </Card>
        </div>
      </div>
    </>
  )
}

export default TablePage