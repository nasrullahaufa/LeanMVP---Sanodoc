import Navbar from "../components/Navbar";
import React, { useState } from "react";

function HomePage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadHandle = (event) => {
      event.preventDefault();
      console.log(selectedFile)
  };
  return (
    <>
      <Navbar />

      <div className="table-container">
        <div class="Row">
          <input
            class="Column"
            type="file"
            name="file"
            accept=".pdf"
            onChange={changeHandler}
          />
          <button
            className="btn btn-primary upload-button Column"
            onClick={uploadHandle}
          >
            Upload PDF
          </button>
        </div>
   

        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col" className="no-column">
                No
              </th>
              <th className="qr-image-column" scope="col">
                QR Code
              </th>
              <th scope="col">Pdf</th>
              <th scope="col" className="action-column">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="no-column">1</th>
              <td className="qr-image-column">
                <img
                  className="qr-image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                ></img>
              </td>
              <td>pdf link</td>
              <td className="action-column">
                <button className="btn btn-primary"> Download </button>
              </td>
            </tr>
            <tr>
              <th className="no-column">1</th>
              <td className="qr-image-column">
                <img
                  className="qr-image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                ></img>
              </td>
              <td>pdf link</td>
              <td className="action-column">
                <button className="btn btn-primary"> Download </button>
              </td>
            </tr>
            <tr>
              <th className="no-column">1</th>
              <td className="qr-image-column">
                <img
                  className="qr-image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                ></img>
              </td>
              <td>pdf link</td>
              <td className="action-column">
                <button className="btn btn-primary"> Download </button>
              </td>
            </tr>
            <tr>
              <th className="no-column">1</th>
              <td className="qr-image-column">
                <img
                  className="qr-image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                ></img>
              </td>
              <td>pdf link</td>
              <td className="action-column">
                <button className="btn btn-primary"> Download </button>
              </td>
            </tr>
   
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HomePage;
