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
	}

	render() {
		return (
			<div className="scroll-warpper" ref={(el) => (this.$el = el)}>
				<div className="scroll-content">{this.props.scrollList}</div>
			</div>
		);
	}
}
