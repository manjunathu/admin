import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import Chart from '../../components/charts/Chart'
import { Userdata } from '../../DummyData'
import WidgetSm from '../../components/widgetsSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
    return (
        <div className="home">
        <FeaturedInfo/>
        <Chart data={Userdata} title="Traffic" grid dataKey="Active User" dataKey1="pv" dataKey2="amt"/>
        <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>

        </div>
            
        </div>
    )
}
