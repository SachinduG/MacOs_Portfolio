import React from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "../components/WindowControls";
import { Download } from "lucide-react";
import { Document, pdfjs, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="files/SachinduPathirawasamCV.pdf"
          download
          className="cursor-pinter"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <Document file="files/SachinduPathirawasamCV.pdf">
        <Page pageNumber={1} 
            renderTextLayer
            renderAnnotationLayer 
        />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
