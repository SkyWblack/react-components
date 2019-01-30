import React, { Component } from 'react';
import { Banner, Scroll } from '../';
import './choiceActivity.scss';

export default class ChoiceActivity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]
		};
	}

	ActivityList(list) {
		return (
			<div>
				<Banner params={{ src: require('../../static/circle.png'), title: '选择活动类型' }} />
				<div className="activityList">
					<ul>
						{list.map((item, index) => (
							<li key={index} className="item">
								{`这是活动${index+1}`}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="hg-choiceActivity container">
				<Scroll scrollList={this.ActivityList(this.state.list)} />
			</div>
		);
	}
}
