import React from 'react';
import '../../src/scss/Subcontent.scss';
import { CImage } from '@coreui/react';
import recognitionIcon from '../images/icon-brand-recognition.svg';
import detailed from '../images/icon-detailed-records.svg';
import customizable from '../images/icon-fully-customizable.svg';

class Subcontent extends React.Component {
    render() {
        return (
            <div className="Subcontent">
                <div className="main-subcontent">
                    <div className='Content-footer'>
                        <h3>Advanced Statistics</h3>
                        <p>Track how your links are performing across the web with our advance statistics dashboard.</p>
                    </div>
                    <div className="below-main-subcontent">
                        <div className='Sub-box Sub-box-1'>
                            <div className='Round-img'>
                                <CImage className="recognitionIcon" fluid src={recognitionIcon} />
                            </div>
                            <div className='Sub-text'>
                                <h4>Brand recognition</h4>
                                <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                            </div>
                        </div>
                        <div className='Sub-box Sub-box-2'>
                            <div className='Round-img'>
                                <CImage className="detailed" fluid src={detailed} />
                            </div>
                            <div className='Sub-text'>
                                <h4>Detailed Records</h4>
                                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                            </div>
                        </div>
                        <div className='Sub-box Sub-box-3'>
                            <div className='Round-img'>
                                <CImage className="customizable" fluid src={customizable} />
                            </div>
                            <div className='Sub-text'>
                                <h4>Fully Customizable</h4>
                                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                            </div>
                        </div>
                        <div className="line"></div>
                    </div>
                </div>

            </div>

        );
    }
}


export default Subcontent;
