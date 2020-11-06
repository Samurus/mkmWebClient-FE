import React from 'react';
import Table from 'react-bootstrap/Table'
import StockService from "../services/StockService";
import {Container} from "react-bootstrap";

import { forwardRef } from 'react';
import Grid from '@material-ui/core/Grid'

import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';

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
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

//https://github.com/effiongcharles/material-ui-table-crud-restapi
class StockComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            stock: [{"articleId": 361168434,"languageCode": "en","comment": "TEST","price": 6.48,"quantity": 1,"product": {"productId": 283553,"name": "TESTHangarback Walker","categoryId": 1,"categoryName": "TESTMagic Single","imageUrl": "TEST./img/items/1/ORI/283553.jpg","game": "MTG","expansionCollectionNumber": "229","rarity": "Rare","expansionName": "Magic Origins",}},],
            columns: [
                      {title: "id", field: "articleId", hidden: true},
                      {title: "articleId", field: "articleId", editable: false},
                      {title: "recommendedPrice", field: "price", editable: true, initialEditValue: 'initial edit value'},
                      {title: "currentPrice", field: "articlePriceEntity.price", editable: false},
                      {title: "comment", field: "comment", editable: false},
                      {title: "quantity", field: "quantity", editable: false},
                      {title: "condition", field: "condition", editable: false},
                      {title: "p.name", field: "product.name", editable: false},
                      {title: "p.expansionName", field: "product.expansionName", editable: false},
                      {title: "languageCode", field: "languageCode", editable: false},
                      {title: "foil", field: "foil", editable: false},
                      {title: "signed", field: "signed", editable: false},
                      {title: "altered", field: "altered", editable: false},
                      {title: "playset", field: "playset", editable: false},
                      {title: "p.imageUrl", field: "product.imageUrl", editable: false},
                      {title: "p.game", field: "product.game", editable: false},
                      {title: "p.expansionCollectionNumber", field: "product.expansionCollectionNumber", editable: false},
                      {title: "p.rarity", field: "product.rarity", editable: false},
                      {title: "productId", field: "productId", editable: false},
                      ],
                      title: "My Stock",
      }
    }

    componentDidMount() {
        StockService.getStockInformation().then((response) => {
            this.setState({stock: response.data})
        });
    }

    render() {
        return (
        <MaterialTable
         title={this.state.title}
         columns={this.state.columns}
         data={this.state.stock}
         icons={tableIcons}
             handleChange={this.handleChange}
           options={{
                 exportButton: true,
                 exportAllData: true
               }}

//         cellEditable={{
//                 onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
//                   return new Promise((resolve, reject) => {
////                    const data = this.state.rows;
////                    const index = this.state.stock.indexOf(oldValue);
////                    this.state.stock[index] = newValue;
//
//                     setTimeout(resolve, 1000);
//                   });
//                 }
//               }}
        />
        )
    }
}

export default StockComponent