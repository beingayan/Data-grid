import React,{useState} from 'react'
import DataGrid from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];
const resizingModes = ['nextColumn', 'widget'];
const columnResizingModeLabel = { 'aria-label': 'Column Resizing Mode' };
import orders from '../Data/order';

function CompanyDetail() {
    const[mode,setMode]=useState(resizingModes[0]);

    const changeResizingMode = (data) =>{
        setMode(data.value);
      }
    
  return (
    <div>
       <DataGrid id="orders"
          dataSource={orders}
          keyExpr="ID"
          showBorders={true}
          allowColumnResizing={true}
          columnResizingMode={mode}
          columnMinWidth={50}
          columnAutoWidth={true}
          defaultColumns={columns}
        >
        </DataGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Column resizing mode:&nbsp;</span>
            <SelectBox items={resizingModes}
              value={mode}
              inputAttr={columnResizingModeLabel}
              width={250}
              onValueChanged={changeResizingMode} />
          </div>
        </div>
    </div>
  )
}

export default CompanyDetail
