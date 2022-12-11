import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyCSVReader } from "./MyCSVReader";
import { MyCSVDownloader } from "./MyCSVDownloader";

function App() {
  return (
    <div className="App">
      <p>
        Install package <code>npm i react-papaparse</code>
      </p>
      <p>
        <b>Upload</b>
      </p>
      <MyCSVReader />
      <hr />
      <p>
        <b>Download</b>
      </p>
      <MyCSVDownloader />
    </div>
  );
}

export default App;
