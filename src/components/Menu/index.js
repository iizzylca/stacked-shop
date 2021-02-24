import React from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import filePDF from '../../docs/Stacked-menu.pdf'

function Menu() {
    return (
        <div className="Menu">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
                <div id="pdfviewer">
                    <Viewer fileUrl={filePDF} /> 
                </div>
            </Worker>
        </div>
    );
    }
    
export default React.memo(Menu);