/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";

import ControlPanel from "../../Components/ControlPanel/ControlPanel";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Portfolio = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='PDF-container'>
      <ControlPanel
        pageNumber={pageNumber}
        numPages={numPages}
        setPageNumber={setPageNumber}
      />
      <Document
        file='/assets/docs/Rimoldi_Santiago_PostPro_ArchViz.pdf'
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default Portfolio;
