import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './nav.scss';

export default class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="hg-nav">
				<NavBar mode="light" icon={<Icon type="left" />} onLeftClick={this.props.back}>
					{this.props.title}
				</NavBar>
			</div>
		);
	}
}
