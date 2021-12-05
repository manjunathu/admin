import { ArrowDownward ,LocationOn,Settings } from '@material-ui/icons'
import React from 'react'
import "./featuredInfo.css"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem1">
                <span className="featuredTitle">People</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">8.455</span>
                    <span className="featuredMoneyRate">
                      <Settings/>
                    </span>
                </div>
                <span className="featuredSub">Members Online</span>
            </div>
            <div className="featuredItem2">
                <span className="featuredTitle">People</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">9.823</span>
                    <span className="featuredMoneyRate">
                      <ArrowDownward/>
                    </span>
                </div>
                <span className="featuredSub">Members Online</span>
            </div>
            <div className="featuredItem3">
                <span className="featuredTitle">People</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">7.623</span>
                    <span className="featuredMoneyRate">
                      <Settings/>
                    </span>
                </div>
                <span className="featuredSub">Members Online</span>
            </div>
            <div className="featuredItem4">
                <span className="featuredTitle">People</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">9.999</span>
                    <span className="featuredMoneyRate">
                      <LocationOn/>
                    </span>
                </div>
                <span className="featuredSub">Members Online</span>
            </div>
        </div>
    )
}
