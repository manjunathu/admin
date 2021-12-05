import React from "react"
import "./sidebar.css"
import {LineStyle,TrendingUp,HorizontalSplit,AttachMoney, LocalOffer, ListAlt, ArrowRight,Poll } from "@material-ui/icons";
import SpeedIcon from '@material-ui/icons/Speed';
import { Link } from "react-router-dom";


 function sidebar() {
    return (
        <div className="sidebar">
          <div className="sideBarWrapper">
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle"><SpeedIcon className="sidebarIcon"/>DASHBOARD</h3>
                  <h3 className="sidebarTitle"><HorizontalSplit className="sidebarIcon"/>Produits</h3>
                  <ul className="sidebarList">
                  <Link to="/" className="link"> 
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Home
                      </li>
                      </Link>
                      
                      <Link to="/products" className="link"> 
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Liste Des Produits
                      </li>
                      </Link>
                     <Link to="/bill" className="link">
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Liste Des Marques
                      </li>
                      </Link>
                      
                  </ul>
              </div>
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle"><AttachMoney className="sidebarIcon"/>Ventes</h3>
                  <ul className="sidebarList">
                      <Link to="/users" className="link">
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Clients
                      </li>
                      </Link>
                      <Link to="/submit " className="link">
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Commandes
                      </li>
                      </Link>
                      <Link to="/nov" className="link">
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Factures
                      </li>
                      </Link>
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Avoirs
                      </li>
                      
                  </ul>
              </div>
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle"> <LocalOffer className="sidebarIcon"/>Achats</h3>
                  <ul className="sidebarList">
                      <Link to="product/%201" className="link">
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Liste Des Fournisseurs
                      </li>
                      </Link>
                      <Link to="/submit" className="link">
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Commandes
                      </li>
                      </Link>
                      <Link to ="/form" className="link">
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Approvisioniment
                      </li>
                      </Link>
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Inventaire
                      </li>
                      
                  </ul>
              </div>
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle"> <ListAlt className="sidebarIcon"/>Comptabilite</h3>
                  <ul className="sidebarList">
                      <Link to="/upload" className="link">
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Exports Factures Clients
                      </li>
                      </Link>
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Exports Commandes Fournisseurs
                      </li>
                  </ul>
              </div>
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle"> <Poll className="sidebarIcon"/>Reporting</h3>
                  <ul className="sidebarList">
                      <Link to="/" className="link">
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                          Ventes
                      </li>
                      </Link>
                      <li className="sidebarListItem">
                          <ArrowRight className="sidebarIcon"/>
                           Achats
                      </li>
                  </ul>
              </div>
          </div>
        </div>
    )
}


export default sidebar