import React from 'react'

import Pdf from '../../docs/Stacked-menu.pdf'

const Menu = () => {

    return(
        <div>
            <object data={Pdf} type="application/pdf" style={{ width: '100vw', height: '100vh' }}>
                <iframe title='pdf-file' src={Pdf} style={{ width: '100vw', height: '100vh' }}>
                </iframe>
            </object>
        </div>
    )
}

export default Menu 