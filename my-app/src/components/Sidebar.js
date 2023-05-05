import React from "react";
import css from "./css/Sidebar.module.css";


function SideBar() {
    return <div className = {css.sidebar}>
        <a href = "#." target= "_blank">My photos</a>
        <a href = "#." target= "_blank">My illustrations</a>
        <a href = "#." target= "_blank">My paintings</a>
    </div>
}

export default SideBar;
