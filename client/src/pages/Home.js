import Navbar from "../components/Navbar";
import React, {useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadAction, getDocumentsAction } from "../store/action";
import generateQR from "../helpers/qrious";

function HomePage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const documents = useSelector((state) => state.documents);

  const tes = useSelector((state) => state.tes);
  const dispatch = useDispatch();


  useEffect(() => {
    if(documents.length == 0){
      dispatch(getDocumentsAction())
    }
}, [documents]);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const uploadHandle = (event) => {
    event.preventDefault();
    // console.log(selectedFile);
    dispatch(uploadAction(selectedFile));
    
  };
  return (
    <>
      <Navbar />

      <div className="table-container">
        <div className="Row">
          <input
            className="Column"
            type="file"
            name="file"
            accept=".pdf"
            id="myFile"
            onChange={changeHandler}
          />
          <button
            className="btn btn-primary upload-button Column"
            onClick={uploadHandle}
          >
            Upload PDF
          </button>
        </div>

        <table className="table table-bordered">
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
            {documents.map((doc,i)=>{
              return(
               <tr key={i}>
               <th className="no-column">{doc.id}</th>
               <td className="qr-image-column">
                 <img
                   className="qr-image"
                   src={generateQR(doc.url)}
                 ></img>
               </td>
               <td>{doc.name}</td>
               <td className="action-column">
                 <button className="btn btn-primary"> Download </button>
               </td>
             </tr>
              )
            })}
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
