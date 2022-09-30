import React from 'react';
import axios from 'axios';
import { CButton, CForm, CCol, CFormLabel, CFormInput } from '@coreui/react';
import '../../src/scss/Subcontent.scss';
class ShortLinkApi extends React.Component {
	state = {
		inputLink: [],
		rawLink: [],
		correctLink: false,
	};

	handleChange = (event) => {
		this.setState({
			inputLink: event.target.value,
		});
	};

	handleCopy(index) {
		var copyBtn = document.querySelector(`.${index}`);
		copyBtn.classList.add('link-submitted');
		copyBtn.innerHTML = 'Copied';
	}

	handleInput = () => {};
	async getLink(event) {
		try {
			event.preventDefault();
			let link = await this.state.inputLink;

			const res = await axios.get(
				'https://api.shrtco.de/v2/shorten?url=' + link
			);
			this.setState({
				// rawLink: res.data.result ? res.data.result : [],
				rawLink: res.data.result
					? [...this.state.rawLink, res.data.result]
					: [],
			});
			let subcontent = document.querySelector('.main-subcontent');
			subcontent.classList.add('main-subcontent-2');

			if (this.state.rawLink.length > 0) {
				const app = document.querySelector('.App');
				app.classList.add('color-change-to-white');
				const html = document.querySelector('html');
				html.classList.add('color-change-to-wghite');
				const body = document.querySelector('body');
				body.classList.add('color-change-to-white');
				const subcontent = document.querySelector('.Subcontent');
				subcontent.classList.add('color-change-to-main');
				const content = document.querySelector('.Content');
				content.classList.add('color-change-to-main');
			} else {
				let app = document.querySelector('.App');
				app.classList.add('color-change-to-main');
			}
			this.setState({
				inputLink: event.target.value,
				correctLink: false,
			});
		} catch {
			this.setState({
				correctLink: true,
			});
			return;
		}
	}

	render() {
		// eslint-disable-next-line no-unused-vars
		let { rawLink, inputLink, correctLink, copied } = this.state;

		return (
			<>
				<div className='Shorten-input'>
					<CForm className='row g-3'>
						<CCol xs='auto'>
							<CFormLabel
								htmlFor='inputPassword2'
								className='visually-hidden '
							>
								Shorten a link here..
							</CFormLabel>
							<CFormInput
								type='text'
								id='inputPassword2'
								className='link-input'
								placeholder='Shorten a link here..'
								value={this.state.inputLink}
								onChange={(event) => {
									this.handleChange(event);
								}}
							/>
							{correctLink === true ? (
								<p className='link-require'>
									Please add a link
								</p>
							) : (
								<p></p>
							)}
						</CCol>
						<CCol xs='auto'>
							<CButton
								className='mb-3 link-submit '
								onClick={(event) => this.getLink(event)}
							>
								Shorten it!
							</CButton>
						</CCol>
					</CForm>
				</div>

				{this.state.rawLink.length > 0 &&
					rawLink.map((item, index) => {
						return (
							<div className='link-container' key={item.code}>
								<div className='raw-link'>
									<p>{item.original_link}</p>
								</div>
								<div className='shorted'>
									<p className='link-output'>
										{item.short_link}
									</p>
									<CButton
										type='submit'
										className={`mb-3 copyBtn list${index}`}
										onClick={() => {
											navigator.clipboard.writeText(
												`http://${item.short_link}`
											);
											this.handleCopy(`list${index}`);
										}}
									>
										Copy
									</CButton>
								</div>
							</div>
						);
					})}
			</>
		);
	}
}

export default ShortLinkApi;
