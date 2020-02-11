/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./main.styles.scss";
import BottomLeftItem from "../bottomLeftComponentItem/bottomLeftItem.component"
import bottomLeftData from "./bottomLeftData";
import Clock from "../../assets/png/32.png";
import Bin from "../../assets/png/32_2.png";
import File from "../../assets/png/32_3.png";
import More from "../../assets/png/more.png";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bottomLeftData,
      bottomMiddleData: null,
      bottomRightData: null
    };
  }

  componentDidMount() {
    console.log(this.state.bottomLeftData)
  }

  render() {
    return (
      <div className="main">
        <div className="top">
          <span className="conversations">Conversations</span>
        </div>
        <div className="middle">
          <div className="middle-left">
          <div className="rectangled">  <span style={{ color: "#6554c0" }} className="span">
          Open
        </span></div>
            <span className="span b">Archieved</span>
            <span className="span a">Snoozed</span>
            <span className="span a">Trash</span>
          </div>
          <div className="middle-right">
            <div className="middle-right-left">
              <img src={Clock} />
              <img src={Bin} />
              <img src={File} />
              <img src={More} />
            </div>
            <div className="middle-right-right">
              <div className="rectangle">
                <span className="assign">Assign</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottomLeft">
          {
            this.state.bottomLeftData.map(({id, ...restData}) => <BottomLeftItem key={id} {...restData} />)
          }
          
          </div>
          <div className="bottomMiddle">bottomMiddle</div>
          <div className="bottomRight">bottomRight</div>
        </div>
      </div>
    );
  }
}

export default Main;
