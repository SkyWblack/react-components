import React, { Component } from 'react';
import './banner.scss';

function HgImg(props) {
	let src = props.src ? <img src={props.src} alt="" /> : null;
	return src;
}

function HgList(props) {
	let list = props.list ? <div>{props.list}</div> : null;
	return list;
}

export default class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="hg-banner">
				<div className="banner-title">
					<HgImg src={this.props.params.src} />
					{this.props.params.title}
				</div>
				<div className="banner-content">
					<HgList list={this.props.params.list} />
				</div>
			</div>
		);
	}
}
