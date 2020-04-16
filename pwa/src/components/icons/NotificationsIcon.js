import React, { Component } from 'react';

class NotificationsIcon extends Component {
	state = {};
	render() {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={this.props.className}
				viewBox="0 0 29 32.474"
			>
				<g id="notification-1827504" transform="translate(0 1)">
					<path
						id="Path_29"
						data-name="Path 29"
						d="M138.25,421.9a4.924,4.924,0,0,1-4.918-4.918.984.984,0,1,1,1.967,0,2.951,2.951,0,0,0,5.9,0,.984.984,0,1,1,1.967,0A4.924,4.924,0,0,1,138.25,421.9Zm0,0"
						transform="translate(-125.136 -390.427)"
						fill={this.props.color}
					/>
					<path
						id="Path_30"
						data-name="Path 30"
						d="M23.933,87.606H2.295A2.3,2.3,0,0,1,.8,83.566a.905.905,0,0,1,.1-.079,8.814,8.814,0,0,0,3.027-6.649V73.18A9.191,9.191,0,0,1,13.114,64a3.95,3.95,0,0,1,.647.039.983.983,0,1,1-.323,1.94,2.064,2.064,0,0,0-.324-.012A7.221,7.221,0,0,0,5.9,73.18v3.659a10.786,10.786,0,0,1-3.807,8.224c-.02.016-.037.03-.058.045a.325.325,0,0,0-.069.2.331.331,0,0,0,.328.328H23.933a.332.332,0,0,0,.328-.328.313.313,0,0,0-.071-.2c-.02-.014-.037-.029-.056-.045a10.783,10.783,0,0,1-3.807-8.224V75.409a.984.984,0,1,1,1.967,0v1.429a8.817,8.817,0,0,0,3.031,6.653.955.955,0,0,1,.1.076,2.294,2.294,0,0,1-1.492,4.038Zm0,0"
						transform="translate(0 -60.066)"
						fill={this.props.color}
					/>
					<path
						id="Path_31"
						data-name="Path 31"
						d="M262.557,13.114a6.557,6.557,0,1,1,6.557-6.557A6.564,6.564,0,0,1,262.557,13.114Zm0-11.147a4.6,4.6,0,0,0-4.59,4.59,5.134,5.134,0,0,0,.217,1.4,4.5,4.5,0,0,0,4.373,3.193,4.59,4.59,0,0,0,0-9.18Zm0,0"
						transform="translate(-240.263 0)"
						fill={this.props.bubbleColor}
					/>
					<circle
						id="Ellipse_23"
						data-name="Ellipse 23"
						cx="8"
						cy="8"
						r="8"
						transform="translate(13 -1)"
						fill={this.props.bubbleColor}
					/>
				</g>
			</svg>
		);
	}
}

export default NotificationsIcon;
