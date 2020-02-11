/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./bottomLeftItem.styles.scss";
import Attachment from "../../assets/svg/attachment.svg";

const BottomLeftItem = ({iconName, name, summary, note, time, attachment}) => {

    return (
     <div className="mainLeftArea">
     <div className="img" style={{backgroundImage:`url(${iconName})`}}></div>
     <div className="middleBottom">
     <p className="name">{name}</p>
     <p className="summary">{summary}</p>
     <p className="note">{note}</p>
     </div>
     <div className="rightBottom">
     <p className="time">{time}</p>
     {
         attachment ? <img src={Attachment} /> : null
     }
     </div>
     </div>
    );
};

export default BottomLeftItem;