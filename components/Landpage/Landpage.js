

import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';


class Landpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "ID", field: "id" },
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }],
      rowData: [
        {id:"1", make: "Toyota", model: "Celica", price: 35000 },
        { id: "2", make: "Ford", model: "Mondeo", price: 32000 },
        { id: "3", make: "Porsche", model: "Boxter", price: 72000 }],
      defaultColDef: {
        editable: true,
       
      },
    
    };
  }

  onButtonClick=()=>{
   const selectedNodes=this.gridApi.getSelectedNodes();
   const selectData= selectedNodes.map(node=>node.data)
    console.log(selectData,'s')
  }
  onButtonClickDelete = async() => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectData = selectedNodes.map(node => node.data)
    const selectedID =selectData.map(data=>data.id)

    // console.log(parseInt(selectedID))
    
    const arrayCopy = this.state.rowData.filter((row) => row.id != parseInt(selectedID) );
    this.setState({ rowData: arrayCopy });
    
  }
  render() {
    
    return (
      <div
        className="ag-theme-alpine"
        style={{
          height: '450px',
          width: '100%',
        }}
      >
        <button onClick={this.onButtonClick}>CLICK</button>
        <button onClick={this.onButtonClickDelete}>delete</button>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          onGridReady={params=>this.gridApi=params.api}
          rowSelection="multiple"
          defaultColDef={this.state.defaultColDef}

        ></AgGridReact>
      </div>
    );
  }
}

// Landpage.getInitialProps = async () => {
//   const res = await axios.delete('https://jsonplaceholder.typicode.com/posts');
//   const users =  res.data;
//   console.log(users,'hi')
//   return { users };
// };

export default Landpage;
