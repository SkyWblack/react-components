import React, { Component } from 'react';
import { Card } from 'antd-mobile';
import HGcard from '../HGcard/HGcard';
import Scroll from '../Scroll/Scroll';
import './present.scss';

export default class Present extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		};
	}

	componentDidMount() {
		this.onRefresh();
	}

	onRefresh = () => {
		let obj = {
			title: '这是测试活动',
			actName: 'PK赛-HP',
			time: '2018-11-22 14:45:00',
			location: '上海市南京东路科技京城'
		};
		let arr = [];
		for (let i = 0; i < 3; i++) {
			arr.push(obj);
		}
		setTimeout(() => {
			this.setState({
				list: this.state.list.concat(arr)
			});
		}, 1000);
	};

	scrollListist(list) {
		return (
			<Card>
				<Card.Header title="今日活动" thumb={require('../../static/circle.png')} />
				<Card.Body>{list.map((item, index) => <HGcard key={index} item={item} />)}</Card.Body>
			</Card>
		);
	}

	render() {
		return (
			<div className="present" ref={(el) => (this.$el = el)}>
				<Scroll scrollList={this.scrollListist(this.state.list)} />
			</div>
		);
	}
}
