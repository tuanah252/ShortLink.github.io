import React from 'react'
import '../footer/Footer.scss';
import { CButton } from '@coreui/react';
class footer1 extends React.Component {
    render() {
        return (
            <div className="footer1">
                <h2>Boost your links today</h2>
                <CButton className='Get-started-btn button' color="secondary">Get Started</CButton>
            </div>
        )
    }
}

export default footer1