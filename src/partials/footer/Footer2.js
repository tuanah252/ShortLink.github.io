import React from 'react';
import '../footer/Footer.scss';
import { CButton, CImage } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';
class footer2 extends React.Component {
	render() {
		return (
			<div className='footer2'>
				<div className='foot-content'>
					<CButton
						className='Shortly'
						color='secondary'
						variant='ghost'
					>
						Shortly
					</CButton>
					<div className='buttons'>
						<div className='Feature '>
							<CButton
								className='Near-shortly'
								color='light'
								variant='ghost'
							>
								Features
							</CButton>
							<div className='smlBtn'>
								<p className='bottom-text'>Link Shortening</p>
								<p className='bottom-text'>Branded Links</p>
								<p className='bottom-text'>Anylytics</p>
							</div>
						</div>

						<div className='Feature'>
							<CButton
								className='Near-shortly'
								color='light'
								variant='ghost'
							>
								Resources
							</CButton>
							<div className='smlBtn'>
								<p className='bottom-text'>Blog</p>
								<p className='bottom-text'>Developers</p>
								<p className='bottom-text'>Support</p>
							</div>
						</div>

						<div className='Feature'>
							<CButton
								className='Near-shortly'
								color='light'
								variant='ghost'
							>
								Company
							</CButton>
							<div className='smlBtn'>
								<p className='bottom-text'>About</p>
								<p className='bottom-text'>Our Team</p>
								<p className='bottom-text'>Careers</p>
								<p className='bottom-text'>Contact</p>
							</div>
						</div>
					</div>
					<div className='social-icons'>
						<CImage className='icons' fluid src={facebook} />
						<CImage className='icons' fluid src={twitter} />
						<CImage className='icons' fluid src={pinterest} />
						<CImage className='icons' fluid src={instagram} />
					</div>
				</div>
			</div>
		);
	}
}

export default footer2;
