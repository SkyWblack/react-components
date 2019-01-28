import React, { Component } from 'react';
import './hgcard.scss';

export default class HGcard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: props.item
		};
	}

	render() {
		return (
			<div className="hg-card">
				<div className="card-above">
					<div className="card-above_left" />
					<div className="card-above_right">
						<div className="card-above_right_content">
							<h1>{this.state.item.title}</h1>
							<span>{this.state.item.actName}</span>
							<span>{this.state.item.time}</span>
							<span>{this.state.item.location}</span>
						</div>
					</div>
				</div>
				<div className="card-below" />
			</div>
		);
	}
}
