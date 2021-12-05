import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../DummyData';
import {Link} from 'react-router-dom';



export default function UserList() {
 
      
    const[data,setData] = useState(userRows);
    const handleDelete=(id) =>{
        setData(data.filter((item) => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'PreNom',
          headerName: 'PreNom',
          width: 180,
          editable: true,
        },
        {
          field: 'Nom',
          headerName: 'Nom',
          width: 150,
          editable: true,
          renderCell:(params)=>{
              return(
             
                  
                  <div className="userListNom">
                      <img className="userListImg" src={params.row.avatar} alt=""/>
                  {params.row.username}
                  </div>
              )
          }
        },
        {
          field: 'Email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
            field: 'Telephone',
            headerName: 'Telephone',
            width: 150,
            editable: true,
          },
          {
            field: 'Poste',
            headerName: 'Poste',
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
                  <Link to={"/user/"+params.row.id}>
                  <button className="userListEdit">Edit</button>
                  </Link>
                  <DeleteOutline className="userListDelete"
                  onClick={() => handleDelete(params.row.id)}/>
                  </>
                  );
              },
          },
        
      ];
      
     
    return (
        <div className="userList">
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
        disableSelectionOnClick
      />
        </div>
    )
}
