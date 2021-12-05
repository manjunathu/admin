import React from 'react'
import "./widjetLg.css"

export default function WidgetLg() {
     
    const Button =({type}) =>{
        return <button className={"widgetLgButton "+type}>{type}</button>;
    }

    return (
        <div className="widjetLg">
            <h3 className="widgetLgTitle">
                SAMPPA NORI
            </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">N du bon de commande</th>
                    <th className="widgetLgTh">Date de Commande</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Montant TTC en$</th>
                    <th className="widgetLgTh">Minimun de Commande</th>
                    <th className="widgetLgTh">Montant HT en$</th>
                </tr>
                <tr className="widjetLgTr">
                    <td className="widjetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNStYe1LPjbp6FEUZI4BWewc8M56OBYf2Wyg&usqp=CAU" alt="" className="widjetLgImg" />
                        <span className="widjetLgName">Manjunath</span>
                        </td>
                       
                        <td className="widjetLgDate">2 jun 2021</td>
                        <td className="widjetLgAmount">$$</td>
                    <td className="widjetLgStatus"><Button type="Approved"/></td>
                    <td className="widjetLgAmount">23$$</td>
                    <td className="widjetLgAmount">22$$</td>
                </tr>
              
                <tr className="widjetLgTr">
                    <td className="widjetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNStYe1LPjbp6FEUZI4BWewc8M56OBYf2Wyg&usqp=CAU" alt="" className="widjetLgImg" />
                        <span className="widjetLgName">Khalesi</span>
                        </td>
                       
                        <td className="widjetLgDate">2 jun 2021</td>
                        <td className="widjetLgAmount">$$</td>
                    <td className="widjetLgStatus"><Button type="Declined"/></td>
                    <td className="widjetLgAmount">44$$</td>
                    <td className="widjetLgAmount">22$$</td>
                </tr>
               
                <tr className="widjetLgTr">
                    <td className="widjetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNStYe1LPjbp6FEUZI4BWewc8M56OBYf2Wyg&usqp=CAU" alt="" className="widjetLgImg" />
                        <span className="widjetLgName">Lannister</span>
                        </td>
                       
                        <td className="widjetLgDate">2 jun 2021</td>
                        <td className="widjetLgAmount">$$</td>
                    <td className="widjetLgStatus"><Button type="Approved"/></td>
                    <td className="widjetLgAmount">23$$</td>
                    <td className="widjetLgAmount">22$$</td>
                </tr>
                
                <tr className="widjetLgTr">
                    <td className="widjetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNStYe1LPjbp6FEUZI4BWewc8M56OBYf2Wyg&usqp=CAU" alt="" className="widjetLgImg" />
                        <span className="widjetLgName">Gnadhiya</span>
                        </td>
                       
                        <td className="widjetLgDate">2 jun 2021</td>
                        <td className="widjetLgAmount">$$</td>
                    <td className="widjetLgStatus"><Button type="Declined"/></td>
                    <td className="widjetLgAmount">43$$</td>
                    <td className="widjetLgAmount">22$$</td>
                </tr>
            </table>
            
        </div>
    )
}
