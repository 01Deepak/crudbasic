import React from 'react'
import { ArrowDownward, CheckBox} from '@mui/icons-material'
import DataTable, { TableProps } from 'react-data-table-component'

const sortIcon = <ArrowDownward/>
const selectProps= {indeterminate:(isIndeterminate:Boolean) => isIndeterminate}

const DataTableBase = (props: any) => {
  return (
    <DataTable 
    pagination
    selectableRowsComponent={CheckBox}
    selectableRowsComponentProps= {selectProps}
    sortIcon={sortIcon}
    dense
    {...props}
    />
  )
}

export default DataTableBase