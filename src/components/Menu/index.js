import React, { useState } from 'react';
import Loader from './Loader';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Test() {
    const [scale, setScale] = useState(1.0);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setIsLoading(false);
    }

    return (
        <div className='pdf-main'>
        <Loader isLoading={isLoading} />
        <section id="pdf-section" className="d-flex flex-column align-items-center w-100">
            <ControlPanel
                scale={scale}
                setScale={setScale}
                numPages={numPages}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                file="/assets/docs/Stacked-menu-first.pdf"
            />
            <Document
                className='pdf'
                file="/assets/docs/Stacked-menu-first.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
            <Page pageNumber={pageNumber} scale={scale} />
            </Document>
        </section>
        </div>
    );
}