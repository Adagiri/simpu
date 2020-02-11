/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./main.styles.scss";
import BottomLeftItem from "../bottomLeftComponentItem/bottomLeftItem.component";
import BottomMiddleItem from "../bottomMiddleComponentItem/bottomMiddleItem.component";
import bottomLeftData from "./bottomLeftData";
import bottomMiddleData from "./bottomMiddleData.js";
import Clock from "../../assets/png/32.png";
import Bin from "../../assets/png/32_2.png";
import File from "../../assets/png/32_3.png";
import More from "../../assets/png/more.png";
import Attachment from "../../assets/png/attachment@2x.png";
import Smiley from "../../assets/png/happy@2x.png";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bottomLeftData,
      bottomMiddleData,
      bottomRightData: null
    };
  }

  componentDidMount() {
    console.log(this.state.bottomLeftData);
  }

  render() {
    return (
      <div className="main">
        <div className="top">
          <span className="conversations">Conversations</span>
        </div>
        <div className="middle">
          <div className="middle-left">
            <div className="rectangled">
              {" "}
              <span style={{ color: "#6554c0" }} className="span">
                Open
              </span>
            </div>
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
            {this.state.bottomLeftData.map(({ id, ...restData }) => (
              <BottomLeftItem key={id} {...restData} />
            ))}
          </div>
          <div className="bottomMiddle">
            <p className="whatsapp-business">
              WhatsApp for Business: Don't forget to start your free trial
            </p>

            {this.state.bottomMiddleData.map(({ id, ...rest }) => (
              <BottomMiddleItem key={id} {...rest} />
            ))}

            <div className="text-area" type="text">
              <p>Type a message....</p>
              <img src={Attachment} className="attachments" />
            </div>
          </div>
          <div className="bottomRight">
            <p className="comments">Comments</p>
            <div className="comment-div">
              <div className="commentary">
                <img src={Smiley} />
                <div className="comment-rectangle">
                  <p className="comment-text">
                    Having a baby can be a nerve wracking experience for new
                    parents – not the nine months of pregnancy.
                  </p>
                </div>
              </div>
              <div className="commentary">
                <img src={Smiley} />
                <div className="comment-rectangle">
                  <p className="comment-text">
                    Having a baby can be a nerve wracking experience for new
                    parents – not the nine months of pregnancy.
                  </p>
                </div>
              </div>
              <div className="commentary">
                <img src={Smiley} />
                <div className="comment-rectangle">
                  <p className="comment-text">
                    Having a baby can be a nerve wracking experience for new
                    parents – not the nine months of pregnancy.
                  </p>
                </div>
              </div>
              <div className="commentary">
                <img src={Smiley} />
                <div className="comment-rectangle">
                  <p className="comment-text">
                    Having a baby can be a nerve wracking experience for new
                    parents – not the nine months of pregnancy.
                  </p>
                </div>
              </div>
              <div className="commentary">
                <img src={Smiley} />
                <div className="comment-rectangle">
                  <p className="comment-text">
                    Having a baby can be a nerve wracking experience for new
                    parents – not the nine months of pregnancy.
                  </p>
                </div>
              </div>
            </div>
            <div className="base">
              <img src={Smiley} />
              <div className="comment-rectangle">
                <p className="comment-text">Write your comment....</p>
                <div className="purple">
                  <i class="fas fa-paper-plane"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
