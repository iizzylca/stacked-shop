import React from 'react'

import Pdf from '../../docs/Stacked-menu.pdf'

const Menu = () => {

    return(
        <div>
            <object className='pdf-wrap' data={Pdf} type="application/pdf" style={{ width: '100vw', height: '100vh' }}>
                <iframe className='pdf-file' title='pdf-file' src={Pdf} style={{ width: '100vw', height: '100vh' }}>
                </iframe>
            </object>
        </div>
    )
}

export default Menu 