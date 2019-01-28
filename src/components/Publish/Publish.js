import React, { Component } from 'react';
import { SegmentedControl } from 'antd-mobile';
import Scroll from '../Scroll/Scroll';
import HGcard from '../HGcard/HGcard';
import './publish.scss';

export default class Publish extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabs: [ '未发布', '已发布' ],
			list: []
		};
	}

	componentDidMount() {
		this.onRefresh();
	}

	scrollListist = (list) => {
		return (
			<div>
				<SegmentedControl
					values={this.state.tabs}
					onChange={this.onChange}
					style={{
						height: '1.1rem',
						lineHeight: '1.1rem',
						border: 0,
						backgroundColor: '#efeff4',
						borderRadius: '0px',
						color: '#000'
					}}
				/>
				{list.map((item, index) => <HGcard key={index} item={item} />)}
			</div>
		);
	};

	onRefresh = () => {
		let obj = {
			title: '这是测试活动',
			actName: 'PK赛-HP',
			time: '2018-11-22 14:45:00',
			location: '上海市南京东路科技京城'
		};
		let arr = [];
		for (let i = 0; i < 10; i++) {
			arr.push(obj);
		}
		setTimeout(() => {
			this.setState({
				list: this.state.list.concat(arr)
			});
		}, 1000);
	};

	onChange = (e) => {
		console.log(e.nativeEvent.selectedSegmentIndex);
		console.log(e.nativeEvent.value);
	};

	render() {
		return (
			<div className="publish">
				<Scroll scrollList={this.scrollListist(this.state.list)} />
			</div>
		);
	}
}
