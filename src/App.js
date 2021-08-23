import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import "./App.css";

import FullPage from "./containers/FullPage/FullPage";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <FullPage />
        </Layout>
      </div>
    );
  }
}

export default App;
