import React from 'react'
import "./upload.css"

export default function Upload() {
    return (
        <div className="uploadForm">
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
             <div className="userUpdate">
            
            <form action="" className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Raison Sociale</label>
                        <input type="text" className="userUpdateInput" placeholder="Aashw123" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Code Fournissuer</label>
                        <input type="text" className="userUpdateInput" placeholder="Ashwitha" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Site/Web Portail Pro</label>
                        <input type="text" className="userUpdateInput" placeholder="email" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Note</label>
                        <input type="text" className="userUpdateInput" placeholder="DOB" />
                    </div>
                    
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        
                        
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="userUpdateButton">Supprimier le fournissiuer</button>
                </div>
            </form>
        </div>
        </div>
    )
}
