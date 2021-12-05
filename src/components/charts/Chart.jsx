import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Title } from '@material-ui/icons';

export default function Chart({title,data,dataKey,dataKey1,dataKey2,grid}) {
    
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <YAxis/>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd">

                    </Line>
                    <Line type="monotone" dataKey={dataKey1} stroke="#5550bd">

                    </Line>
                    <Line type="monotone" dataKey={dataKey2} stroke="#5550bd">

                    </Line>
                    <Tooltip/>
                    { grid && <CartesianGrid stroke="#e0dfdf "strokeDasharray ="5 5"/>}

                </LineChart>

            </ResponsiveContainer>
        </div>
    )
}
