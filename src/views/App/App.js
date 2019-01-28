import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import Search from '../../components/Search/Search';
import Nav from '../../components/Nav/Nav';
import Present from '../../components/Present/Present';
import Publish from '../../components/Publish/Publish';
import './app.scss';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: true,
			tabs: [ { title: '当前' }, { title: '发布' }, { title: '创建' }, { title: '审批' } ]
		};
	}

	render() {
		return (
			<div className="app">
				<Nav />
				<Search disabled={this.state.disabled} />
				<div className="hg-tab">
					<Tabs
						tabs={this.state.tabs}
						tabBarTextStyle={{ fontSize: '18px' }}
						tabBarUnderlineStyle={{ border: '2px #108ee9 solid' }}
					>
						{this.state.tabs.map((item, index) => {
							if (item.title === '当前') {
								return <Present key={index} />;
							} else if (item.title === '发布') {
								return <Publish key={index} />;
							} else if (item.title === '创建') {
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
										创建
									</div>
								);
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
