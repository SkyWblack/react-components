import React, { Component } from 'react';
import { Nav } from '../../components';
import './meetingDetails.scss';

export default class MeetingDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Nav
					title="活动详情"
					back={() => {
						this.props.history.push('/');
					}}
				/>
			</div>
		);
	}
}
