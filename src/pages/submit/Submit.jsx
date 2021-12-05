import React from 'react'
import "./submit.css"
import { Publish } from '@material-ui/icons'

export default function Submit() {
    return (
        <div className="submitFomr">
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
                        <label>Produits lies a ce fournisseur</label>
                        <input type="text" className="userUpdateInput" placeholder="Aashw123" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Franco de commande</label>
                        <input type="text" className="userUpdateInput" placeholder="Ashwitha" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Condition Tarfires</label>
                        <input type="text" className="userUpdateInput" placeholder="email" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Mode de paimente</label>
                        <input type="text" className="userUpdateInput" placeholder="DOB" />
                    </div>
                    <div className="userUpdateItem">
                        <label>Delais de paimente</label>
                        <input type="text" className="userUpdateInput" placeholder="Add" />
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
