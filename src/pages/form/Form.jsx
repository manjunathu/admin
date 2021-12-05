import React from 'react'
import "./form.css"

export default function Form() {
    return (
        <div className="finalForm">
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
            
              <div className="newUser">
            
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>N de TVA INTRA</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className="newUserItem">
                    <label>Code comptable general</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className="newUserItem">
                    <label>Code comptable auxiliaire</label>
                    <input type="text" placeholder="mnjnthrr@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="passwaord" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+919952715854" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" />
                </div>
               
                <button className="newUserButton">Supprimier le fournissuer</button>
              
            </form>
            
        </div>
        </div>
    )
}
