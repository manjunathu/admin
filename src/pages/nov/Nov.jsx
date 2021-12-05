import React from 'react'
import "./nov.css";

export default function Nov() {
    return (
        
        <div className="nov">
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
           <h1 className="newUserTitle">Nouvelle addresse</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>Id addresse</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className="newUserItem">
                    <label>Addresse</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="text" placeholder="mnjnthrr@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Code postal</label>
                    <input type="password" placeholder="passwaord" />
                </div>
                <div className="newUserItem">
                    <label>Ville</label>
                    <input type="text" placeholder="+919952715854" />
                </div>
                <div className="newUserItem">
                    <label>Pays</label>
                    <input type="text" placeholder="New York | USA" />
                </div>
               
                <button className="newUserButton">En register</button>
              
            </form>  
        </div>
    )
}
