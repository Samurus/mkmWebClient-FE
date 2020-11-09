import React from 'react';
import StockService from "../services/StockService";

import { forwardRef } from 'react';
import TextField from '@material-ui/core/TextField';
//https://material-ui.com/components/material-icons/
import MaterialTable from "material-table";
import {AddBox,ArrowDownward,Check,ChevronLeft,ChevronRight,Clear,DeleteOutline,Edit,FilterList,FirstPage,LastPage,Remove,SaveAlt,Search,ViewColumn}  from '@material-ui/icons';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  SaveTwoToneIcon: forwardRef((props, ref) => <SaveTwoToneIcon {...props} ref={ref} />),
  TextField: forwardRef((props, ref) => <TextField {...props} ref={ref} />),
};

//https://github.com/effiongcharles/material-ui-table-crud-restapi
class StockComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            stock: [{"articleId": 361168434,"languageCode": "en","comment": "TEST","price": 6.48,"quantity": 1,"product": {"productId": 283553,"name": "TESTHangarback Walker","categoryId": 1,"categoryName": "TESTMagic Single","imageUrl": "TEST./img/items/1/ORI/283553.jpg","game": "MTG","expansionCollectionNumber": "229","rarity": "Rare","expansionName": "Magic Origins",}},],
            columns: [
                      {title: "id", field: "articleId", hidden: true},
                      {title: "p.name", field: "product.name", editable:'never'},
                      {title: "New Price", field: "price", editable: true, type: 'currency', cellStyle: {width: 150,minWidth: 150}},
                      {title: "Current Price", field: "articlePriceEntity.price", editable:'never', type: 'currency'},
                      {title: "comment", field: "comment", editable: true, initialEditValue: 'intial comment', defaultValue: "default comment", cellStyle: {width: 250,minWidth: 250},
                      render: rowData => {if (rowData.comment) return (<div style={{textAlign: 'left',width: 250}}>{rowData.comment}</div>)
                                          else return (<div style={{textAlign: 'left', opacity: 0.1, width: 250}}>{"comment"}</div>)
                                          }},
                      {title: "quantity", field: "quantity", editable: 'never', type: 'numeric'},
                      {title: "condition", field: "condition", editable:'never'},
                      {title: "p.expansionName", field: "product.expansionName", editable:'never'},
                      {title: "languageCode", field: "languageCode", editable:'never'},
                      {title: "foil", field: "foil", editable:'never', type: 'boolean'},
                      {title: "signed", field: "signed", editable:'never', type: 'boolean'},
                      {title: "altered", field: "altered", editable:'never', type: 'boolean'},
                      {title: "playset", field: "playset", editable:'never', type: 'boolean'},
                      {title: "p.imageUrl", field: "product.imageUrl", editable:'never'},
                      {title: "p.game", field: "product.game", editable:'never'},
                      {title: "p.expansionCollectionNumber", field: "product.expansionCollectionNumber", editable:'never'},
                      {title: "p.rarity", field: "product.rarity", editable:'never'},
                      {title: "p.productId", field: "product.productId", editable:'never'},
                      {title: "articleId", field: "articleId", editable: 'never'},
                      ],
            title: "My Stock",
      }
    }

      componentDidMount() {
            StockService.getStockInformation().then((response) => {
                console.log(response.data)
                this.setState({stock: response.data})
            });
        }
//currencySetting
  render() {
    return (
      <MaterialTable
        title={this.state.title}
        columns={this.state.columns}
        data={this.state.stock}
        icons={tableIcons}
        handleChange={this.handleChange}
        tableLayout='fixed'
        options={{
          pageSize: 8,
          exportButton: true,
          exportAllData: true,
          selection: true,
          filtering: true,
          headerStyle: {textAlign:'left'},
        }}
         actions={[
                {
                  tooltip: 'send selected to MKM',
                  icon: () => <SaveTwoToneIcon />,
                  onClick: (evt, data) => StockService.postArticles(data).then((response) => {
                                                          console.log(response.data)
                                                          this.setState({stock: response.data})
                                                      })
                }
              ]}
        cellEditable={{
          cellStyle: {padding: 0 },
          onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
            return new Promise((resolve, reject) => {
              setTimeout(resolve, 500);
              this.setState((prev) => {
                              rowData[columnDef.field] = newValue;
                              return {
                                ...prev,
                                stock: prev.stock
                              };
                            });
            });
          }
        }}
      />
    );
  }
}

  export default StockComponent
