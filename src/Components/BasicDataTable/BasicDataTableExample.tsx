import React from 'react'
import DataTable from 'react-data-table-component'
import DataTableBase from '../../Common/DataTableBase';
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
     <DataTableBase 
     columns={columns}
     data={data}
     selectableRows
     />
     </>

  )
}

export default BasicDataTableExample