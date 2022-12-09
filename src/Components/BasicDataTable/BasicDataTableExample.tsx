import React from 'react'
import DataTable from 'react-data-table-component'
import { columns, data } from './Data'

const ExpandedComponent = ({ data }:any) => {
return (
  <>
<pre>{JSON.stringify(data, null, 2)}</pre>
<p>Deepak singh</p>
<p>Chetan sir</p>
  </>

)
};

const BasicDataTableExample = () => {
  return (
    <>
     <h3>BasicDataTableExample</h3> 
     <DataTable
     columns={columns}
     data={data}
     selectableRows
     expandableRows
     expandableRowsComponent={ExpandedComponent}
     />
     </>

  )
}

export default BasicDataTableExample