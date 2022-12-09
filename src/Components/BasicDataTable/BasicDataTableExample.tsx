import React from 'react'
import DataTable from 'react-data-table-component'
import { columns, data } from './Data'

const BasicDataTableExample = () => {
  return (
    <>
     <h3>BasicDataTableExample</h3> 
     <DataTable
     columns={columns}
     data={data}
     selectableRows
     />
     </>

  )
}

export default BasicDataTableExample