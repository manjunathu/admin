import "./product.css"
import {Link} from "react-router-dom";
import React from 'react';
import Chart from "../../components/charts/Chart";
import { Productdata } from "../../DummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Produits</h1>
                <Link to="/newproduct">
                <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={Productdata} dataKey="Samppa NORI" title="Charte Des Produits"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://media.ccmbg.com/tc/3489370841/889798/1603375725" alt="" className="productInfoImg" />
                        <span className="productName">SMP00015</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoKey">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sale:</span>
                            <span className="productInfoKey">10%</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Statut:</span>
                            <span className="productInfoKey">Active</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Historoque:</span>
                            <span className="productInfoKey">yes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={Productdata} dataKey="Samppa NORI" title="Charte Des Produits"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://media.ccmbg.com/tc/3489370841/889798/1603375725" alt="" className="productInfoImg" />
                        <span className="productName">SMP00015</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoKey">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sale:</span>
                            <span className="productInfoKey">10%</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Statut:</span>
                            <span className="productInfoKey">Active</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Historoque:</span>
                            <span className="productInfoKey">yes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={Productdata} dataKey="Samppa NORI" title="Charte Des Produits"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://media.ccmbg.com/tc/3489370841/889798/1603375725" alt="" className="productInfoImg" />
                        <span className="productName">SMP00015</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoKey">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sale:</span>
                            <span className="productInfoKey">10%</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Statut:</span>
                            <span className="productInfoKey">Active</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Historoque:</span>
                            <span className="productInfoKey">yes</span>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
