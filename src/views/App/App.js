import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd-mobile';
import { Search, Nav, Present, Publish, ChoiceActivity } from '../../components';
import './app.scss';

import mapStateToProps from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: true,
			tabs: [ { title: '当前' }, { title: '发布' }, { title: '创建' }, { title: '审批' } ]
		};
	}
	componentDidMount() {
		// console.log(2);
	}

	onChange = (tab, index) => {
		//  当tab切换时，通知scroll组件 重新计算dom
		console.log(tab, index);
	};

	render() {
		console.log(this.props.count);

		return (
			<div className="app">
				<Nav title="活动管理" />
				<Search disabled={this.state.disabled} />
				<div className="hg-tab">
					<Tabs
						tabs={this.state.tabs}
						tabBarTextStyle={{ fontSize: '18px' }}
						tabBarUnderlineStyle={{ border: '2px #108ee9 solid' }}
						prerenderingSiblingsNumber={5}
						useOnPan={false}
						destroyInactiveTab={true}
						onChange={this.onChange}
					>
						{this.state.tabs.map((item, index) => {
							if (item.title === '当前') {
								return <Present key={index} />;
							} else if (item.title === '发布') {
								return <Publish key={index} />;
							} else if (item.title === '创建') {
								return <ChoiceActivity key={index} />;
							} else if (item.title === '审批') {
								return (
									<div
										key={index}
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											height: '100%',
											backgroundColor: '#fff'
										}}
									>
										审批
									</div>
								);
							}
						})}
					</Tabs>
				</div>
			</div>
		);
	}
}

export default (App = connect(mapStateToProps, mapDispatchToProps)(App));
