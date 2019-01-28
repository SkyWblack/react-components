import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import './search.scss';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="hg-search">
				<SearchBar disabled={this.props.disabled} placeholder="搜索活动" />
			</div>
		);
	}
}
