import React from 'react';
import { employees } from '../Data/employees';
import DataGrid, { Export,Column, ColumnChooser, ColumnFixing } from 'devextreme-react/data-grid';
function Service() {

    const calculateCellValue =  (data)=> {
        return [data.TitleOfCourtesy, data.FullName].join(' ');
      }
    
  return (
    <div>
      <DataGrid
        id="gridContainer"
        dataSource={employees}
        keyExpr="EmployeeID"
        allowColumnReordering={true}
        allowColumnResizing={true}
        columnAutoWidth={true}
        showBorders={true}
      >
        
        <ColumnChooser enabled={true} />
        <ColumnFixing enabled={true} />
        <Column
          caption="Employee"
          width={230}
          fixed={true}
          calculateCellValue={calculateCellValue}
        />
        <Column
          dataField="BirthDate"
          dataType="date"
        />
        <Column
          dataField="HireDate"
          dataType="date"
        />
        <Column
          dataField="Position"
          alignment="right"
        />
        <Column
          dataField="Address"
          width={230}
        />
        <Column dataField="City" />
        <Column dataField="Photo"  cellRender={cellRender}/>
        <Column
          dataField="Zipcode"
          visible={false}
        />
        <Column dataField="HomePhone" />
        
      </DataGrid>
    </div>
  )
}

function cellRender(data) {
    return <img src={data.value} style={{width:'30px'}} />;
}
 


export default Service
