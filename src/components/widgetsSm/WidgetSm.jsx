import { Visibility } from '@material-ui/icons';
import React from 'react'
import "./widjetSm.css";

export default function WidgetSm() {
    return (
        <div className="widjetSm">
         <span className="widgetSmTitle">Liste Des Fornissuers</span>
         <ul className="widgetSmList">
             <li className="widgetSmListItem">
                 <img src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg" alt="" className="widgetSmImg" />
                 <div className="widjetSmUser">
                 <span className="widgetSmUserName">Anna Kller</span>
                 <span className="widgetSmUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmButton">
                 <Visibility className="widgetSmIcon"/>
                 Display
             </button>
             </li>  
             <li className="widgetSmListItem">
                 <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmImg" />
                 <div className="widjetSmUser">
                 <span className="widgetSmUserName">Manjunath R</span>
                 <span className="widgetSmUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmButton">
                 <Visibility className="widgetSmIcon"/>
                 Display
             </button>
             </li> 
             <li className="widgetSmListItem">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg" alt="" className="widgetSmImg" />
                 <div className="widjetSmUser">
                 <span className="widgetSmUserName">Manjunath R</span>
                 <span className="widgetSmUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmButton">
                 <Visibility className="widgetSmIcon"/>
                 Display
             </button>
             </li> 
             <li className="widgetSmListItem">
                 <img src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg" alt="" className="widgetSmImg" />
                 <div className="widjetSmUser">
                 <span className="widgetSmUserName">Manjunath R</span>
                 <span className="widgetSmUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmButton">
                 <Visibility className="widgetSmIcon"/>
                 Display
             </button>
             </li> 
             <li className="widgetSmListItem">
                 <img src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg" alt="" className="widgetSmImg" />
                 <div className="widjetSmUser">
                 <span className="widgetSmUserName">Manjunath R</span>
                 <span className="widgetSmUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmButton">
                 <Visibility className="widgetSmIcon"/>
                 Display
             </button>
             </li> 
         </ul>
        </div>
    )
}
