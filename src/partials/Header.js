import React from 'react';
import { CButton } from '@coreui/react';
import '../../src/scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
	render() {
		return (
			<header className='App-header'>
				<div className='Main-btn'>
					<CButton
						className='Shortly'
						color='secondary'
						variant='ghost'
					>
						Shortly
					</CButton>
					<CButton
						className='Near-shortly hidden'
						color='secondary'
						variant='ghost'
					>
						Features
					</CButton>
					<CButton
						className='Near-shortly hidden'
						color='secondary'
						variant='ghost'
					>
						Pricing
					</CButton>
					<CButton
						className='Near-shortly hidden'
						color='secondary'
						variant='ghost'
					>
						Resources
					</CButton>
				</div>
				<div className='Sign-btn'>
					<CButton
						className='Near-shortly hidden'
						color='secondary'
						variant='ghost'
					>
						Login
					</CButton>
					<CButton className='Sign-up hidden' color='primary'>
						Sign Up
					</CButton>
				</div>
			</header>
		);
	}
}

export default Header;
