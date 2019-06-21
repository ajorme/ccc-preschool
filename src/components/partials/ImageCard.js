import React, { Component } from "react";
import { getEntryString } from "../../server-controllers/contentful";
import Marked from "marked";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLink: "",
      message: "",
      title: ""
    };
  }

  componentDidMount() {
    fetch(getEntryString(this.props.entryID))
      .then(response => response.json())
      .then(myJson => {
        try {
          this.setState({
            imageLink: myJson.fields.imageLink,
            message: myJson.fields.message,
            title: myJson.fields.title
          });
        } catch (expection) {}
      });
  }

  static defaultProps = {
    cardColor: "grey darken-2",
    messageColor: "white",
    messageTextColor: "black-text",
    target: "_blank",
    titleTextColor: "black-text"
  };

  render() {
    const { imageLink, message, title } = this.state;
    const {
      cardColor,
      messageColor,
      messageTextColor,
      titleTextColor
    } = this.props;
    return (
      <div className="col s12 m6">
        <div className={`card ${cardColor}`}>
          <div className="card-image">
            <img src={imageLink} alt="" />
          </div>
          <div className={`card-content ${messageColor} ${messageTextColor}`}>
            <span className={`card-title ${titleTextColor}`}>{title}</span>
            <div dangerouslySetInnerHTML={{ __html: Marked.parse(message) }} />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
