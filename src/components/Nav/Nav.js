import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './nav.scss';

export default class Nav extends Component {
	render() {
		return (
			<div className="hg-nav">
				<NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => console.log('onLeftClick')}>
					活动管理
				</NavBar>
			</div>
		);
	}
}
