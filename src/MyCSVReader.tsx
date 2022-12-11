import React, { useState } from "react";
import { useCSVReader } from "react-papaparse";

interface formErrors {
  name?: string;
  email?: string;
  mobile?: string;
}

export const MyCSVReader = () => {
  //state to store data
  const [data, setData] = useState<string>("");

  const { CSVReader } = useCSVReader();

  return (
    <>
      <div className="form-control">
        <CSVReader
          onUploadAccepted={(results: any) => {
            setData(JSON.stringify(results.data));
            console.log("---------------------------");
            console.log(results.data);
            console.log("---------------------------");
          }}
          fi
        >
          {({ getRootProps, acceptedFile }: any) => (
            <>
              <div {...getRootProps()} className="dragDrop">
                <span>
                  <h5>Drop your .csv file OR browse</h5>
                  <button type="button">Browse</button>
                </span>
                <p>{acceptedFile && "Uploaded File:- " + acceptedFile.name}</p>
              </div>
            </>
          )}
        </CSVReader>
      </div>
      <hr />
      {/* Display Uploaded Data */}
      <div>
        <b>
          <u>Uploaded Data Result</u>
        </b>
      </div>
      <div className="result"> {data}</div>
    </>
  );
};
