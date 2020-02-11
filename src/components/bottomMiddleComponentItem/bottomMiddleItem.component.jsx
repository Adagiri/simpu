/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./bottomMiddleItem.styles.scss";

const BottomMiddleItem = ({ name, Icon, reply, paragraph, time, mark , color }) => {
  return (
    <div className="middleMain">
      <div className="middleMainTop">
        <p className="middleName">{name}</p>
        <div>
        {reply ? (
            <p className="topReply">
              <img className="mark6" src={Icon} />
              {reply}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="middleMainMiddle">
        <div className={` ${color ? "extranee": ""} midleRectangle`}
        >
          <p>{paragraph}</p>
        </div>
      </div>
      <p className="mTime">
        {time}
        {mark ? <i className="fas fa-check-double"></i> : ""}
      </p>
    </div>
  );
};

export default BottomMiddleItem;
