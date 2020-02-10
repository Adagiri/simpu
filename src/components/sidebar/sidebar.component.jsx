import React from 'react';
import "./sidebar.styles.scss";
import { ReactComponent as Analytics } from "../../assets/svg/analytics.svg";
import { ReactComponent as Happy } from "../../assets/svg/happy.svg";
import { ReactComponent as Schedule } from "../../assets/svg/schedule.svg";
import { ReactComponent as Comment } from "../../assets/svg/comment.svg";

const SideBar = () => {
    return (
<div className="sidebar">
<div className="sidebar-main">
<Analytics className="analytics side"/>
<Happy className="happy side" />
<Schedule className="schedule side"/>
<Comment className="comment side" />
</div>
</div>
    );
};

export default SideBar