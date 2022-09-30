import React from 'react';
import '../../src/scss/Content.scss';
import { CButton, CImage } from '@coreui/react';
import workingImage from '../images/illustration-working.svg';
import ShortLinkApi from '../api/ShortLinkApi';
class Content extends React.Component {
	render() {
		return (
			<div className='Content'>
				<div className='Head-content'>
					<div className='Text-content'>
						<h1>More than just shorter links</h1>
						<p>
							Build your branch's recognition and get detailed
							insights on how your links are performing
						</p>
						<CButton
							className='Get-started-btn button'
							color='secondary'
						>
							Get Started
						</CButton>
					</div>
					<CImage className='workingImage' fluid src={workingImage} />
				</div>

				<ShortLinkApi />
			</div>
		);
	}
}

export default Content;
