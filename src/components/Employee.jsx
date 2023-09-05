import React from 'react'
import 'devextreme/dist/css/dx.light.css';

import {DataGrid, Column} from 'devextreme-react/data-grid';
import {employees} from '../Data/employees';

function Employee() {
  return (
    <div>
       <DataGrid dataSource={employees}
                keyExpr="EmployeeID"
                allowColumnReordering={true}
                columnAutoWidth={true}//resize col
                >

                <Column dataField="EmployeeID"></Column>
                <Column dataField="FullName"></Column>
                <Column dataField="Position"></Column>
                <Column dataField="BirthDate" dataType="date"></Column>
                <Column dataField="HireDate" dataType="date"></Column>
                <Column dataField="City"/>
                <Column dataField="Country"></Column>
                <Column dataField="Address"/>
                <Column dataField="HomePhone"/>
                <Column dataField="PostalCode"/>


            </DataGrid>
    </div>
  )
}

export default Employee
