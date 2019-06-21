import React, { Component } from "react";
import { getEntryString } from "../../server-controllers/contentful";
import Marked from "marked";

class HorizontalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
            message: myJson.fields.message,
            title: myJson.fields.title
          });
        } catch (expection) {}
      });
  }

  static defaultProps = {
    cardColor: "white",
    messageTextColor: "black-text",
    size: "col s12 m6"
  };

  render() {
    const { cardColor, messageTextColor, depth, size } = this.props;
    const { message, title } = this.state;
    return (
      <div>
        <div className={size}>
          <div className={`card ${cardColor} ${depth}`}>
            <div className={`card-content ${messageTextColor}`}>
              <span className="card-title">{title}</span>
              <div
                dangerouslySetInnerHTML={{ __html: Marked.parse(message) }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalCard;
