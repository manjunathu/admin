import React, { useState } from 'react'
import "./productlist.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../DummyData';
import {Link} from 'react-router-dom';

export default function ProductList() {
    const[data,setData]=useState(productRows);
    const handleDelete=(id) =>{
        setData(data.filter((item) => item.id !== id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'TTC',
          headerName: 'TTC',
          width: 180,
          editable: true,
        },
        {
          field: 'Produits',
          headerName: 'Produits',
          width: 150,
          editable: true,
          renderCell:(params)=>{
              return(
                  <div className="ProduvtListItem">
                      <img className="productListImg" src={params.row.avatar} alt=""/>
                  {params.row.Produits}
                  </div>
              )
          }
        },
        {
          field: 'PUHT$',
          headerName: 'PUHT$',
          width: 200,
          editable: true,
        },
        {
            field: 'TVA',
            headerName: 'TVA',
            width: 150,
            editable: true,
          },
          {
            field: 'TVA_per',
            headerName: 'TVA_per',
            width: 150,
            editable: true,
          },
          {
              field:"action",
              headerName:"Action",
              width:150,
              renderCell:(params)=>{
                  return(
                  <>
                  <Link to={"/product/"+params.row.id}>
                  <button className="productListEdit">Edit</button>
                  </Link>
                  <DeleteOutline className="productListDelete"
                  onClick={() => handleDelete(params.row.id)}/>
                  </>
                  );
              },
          },
        
      ];
    return (
        <div className="productlist">
             <div className="billHeader">
                <div className="billHeaderRight">
                     <h3 className="widgetLgTitle">
                        SAMPPA NORI
                    </h3> 
                    </div>
                   < div className="billHeaderLeft">
                       <p>Generale</p>
                       <p>Compatibilite</p> 
                       <p>Coordonness</p>
                       <p>Contact</p>
                       <p>Tarrifs</p>
                       <p>Historique</p>
                       
                    </div>
                    
        
                    </div>
            
         <DataGrid
    rows={data}
    columns={columns}
    pageSize={13}
    checkboxSelection
    disableSelectionOnClick/>
            
        </div>
    )
}


 