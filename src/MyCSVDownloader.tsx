import React from "react";

import { usePapaParse } from "react-papaparse";
import { openFilePicker } from "./openFilePicker";

export const MyCSVDownloader = () => {
  const { jsonToCSV } = usePapaParse(); // use to convert json data to CSV

  //your json data
  const sampleJson = [
    { Name: "Madhv", Mobile: "1217672629", Email: "madhv@email.com" },
    { Name: "John", Mobile: "1268280104", Email: "john@email.com" },
    { Name: "Alex", Mobile: "1237060997", Email: "alex@email.com" },
  ];

  const handleJsonToCSV = () => {
    const results = jsonToCSV(sampleJson); // convert to csv

    //open file dialog
    openFilePicker(results).then((value) => {
      if (value !== undefined) {
        alert("File Saved");
      }
    });
  };

  return (
    <div>
      <div>
        <h5>Sample Json Data</h5>
        {JSON.stringify(sampleJson)}
      </div>
      <button onClick={() => handleJsonToCSV()}>Export</button>
    </div>
  );
};
