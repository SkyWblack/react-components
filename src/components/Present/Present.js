import React, { Component } from 'react';
import { HGcard, Scroll, Banner } from '../';
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

	onAddItem = () => {
		this.scroll && this.scroll.onRefresh();
	};

	onRefresh = () => {
		let obj = {
			title: '这是测试活动',
			actName: 'PK赛-HP',
			time: '2018-11-22 14:45:00',
			location: '上海市南京东路科技京城'
		};
		let arr = [];
		for (let i = 0; i < 13; i++) {
			arr.push(obj);
		}
		this.setState({
			list: this.state.list.concat(arr)
		});
	};

	onApplyThis = (ref) => {
		this.scroll = ref;
	};

	scrollListist(list) {
		let $list = list.map((item, index) => <HGcard key={index} item={item} />);
		return (
			<div>
				{/* <div style={{ height: '50px', background: '#000' }} onClick={this.onAddItem} /> */}
				<Banner params={{ src: require('../../static/circle.png'), title: '今日活动', list: $list }} />
			</div>
		);
	}

	render() {
		return (
			<div className="hg-present container">
				<Scroll scrollList={this.scrollListist(this.state.list)} onScrollRefresh={this.onApplyThis} />
			</div>
		);
	}
}
