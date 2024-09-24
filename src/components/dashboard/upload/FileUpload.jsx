import React, { useState, useRef } from "react";
import pdfImg from "./../../../assets/images/upload/pdf.png";
import cameraImg from "./../../../assets/images/upload/camera.png";
import circleImg from "./../../../assets/images/upload/circle.png";
import openImg from "./../../../assets/images/upload/open.png";

export default function FileUpload() {
  const [showUpload, setShowUpload] = useState(false);

  const pdfInputRef = useRef(null);
  const imgInputRef = useRef(null);

  const handleUploadClick = () => {
    setShowUpload((prev) => !prev);
  };

  const handlePdfClick = () => {
    pdfInputRef.current.click();
  };

  const handleImgClick = () => {
    imgInputRef.current.click();
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === "pdf") {
        console.log("Selected PDF file:", file);
      } else if (type === "image") {
        console.log("Selected image file:", file);
      }
    }
  };

  return (
    <div>
      <div
        className={`absolute border-t border-transparent border-l transition-all rounded-lg z-50 w-[5rem] min-h-[5rem] bottom-28 right-0 flex flex-col gap-y-[0px] items-center justify-end ${
          showUpload && " bg-[#31313105]"
        }`}
      >
        {showUpload && (
          <div className="">
            <img
              src={pdfImg}
              alt="pdf"
              className="cursor-pointer shadow-none"
              onClick={handlePdfClick}
            />
            <img
              src={cameraImg}
              alt="images"
              className="cursor-pointer shadow-none"
              onClick={handleImgClick}
            />
          </div>
        )}
        <div className="w-[60px] mb-5 drop-shadow flex items-center justify-center">
          {showUpload ? (
            <img
              src={circleImg}
              onClick={handleUploadClick}
              alt="circle"
              className="cursor-pointer shadow-none w-[50px] h-[50px]"
            />
          ) : (
            <img
              src={openImg}
              onClick={handleUploadClick}
              alt="circle"
              className="cursor-pointer shadow-none w-[50px] h-[50px]"
            />
          )}
        </div>
      </div>

      <input
        type="file"
        accept=".pdf"
        ref={pdfInputRef}
        onChange={(e) => handleFileChange(e, "pdf")}
        style={{ display: "none" }}
      />
      <input
        type="file"
        accept="image/*"
        ref={imgInputRef}
        onChange={(e) => handleFileChange(e, "image")}
        style={{ display: "none" }}
      />
    </div>
  );
}
