import React, { Component } from 'react';
import BScroll from 'better-scroll';
import './scroll.scss';
export default class Scroll extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.$el.firstChild.style.minHeight = `${this.$el.offsetHeight + 1}px`;
		this.scroll = new BScroll(this.$el);
		// 父组件触发子组件事件
		// console.log(this.props.onScrollRefresh);

		this.props.onScrollRefresh && this.props.onScrollRefresh(this);
	}

	onRefresh() {
		console.log(3333333);
		this.scroll.refresh();
	}

	render() {
		return (
			<div className="hg-scroll-warpper" ref={(el) => (this.$el = el)}>
				<div className="scroll-content">{this.props.scrollList}</div>
			</div>
		);
	}
}
