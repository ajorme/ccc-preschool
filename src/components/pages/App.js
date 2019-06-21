import React, { Component } from "react";
import ImageCard from "../partials/ImageCard";
import HorizontalCard from "../partials/HorizontalCard.js";
import { routes } from "../../index.js";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container center">
          <h1 className="red-text text-lighten-2">
            Center Christian Church Preschool
          </h1>
          <div className="row">
            <ImageCard entryID="2Bvtf3HGRicaqU6cy2QsWI" />
            <HorizontalCard entryID="6BYXX4P0zY8w0MkgSciuKe" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
