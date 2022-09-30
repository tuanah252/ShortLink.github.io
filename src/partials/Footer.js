import React from 'react'
import '../../src/scss/Footer.scss';
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';


class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Footer1 />
                <Footer2 />
            </div>
        )
    }

}


export default Footer