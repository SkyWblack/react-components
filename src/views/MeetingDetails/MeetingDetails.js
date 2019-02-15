import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Nav } from '../../components';
import './meetingDetails.scss';

export default class MeetingDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detailsItem: [
				{
					title: '会议名称',
					text: '活动5'
				},
				{
					title: '会议类型',
					text: 'PK赛-HP'
				},
				{
					title: '开始时间',
					text: '2019-02-24 13:43:00'
				},
				{
					title: '结束时间',
					text: '2019-02-24 13:43:00'
				},
				{
					title: '所属省区',
					text: '皖北省区'
				},
				{
					title: '门店',
					text: '合家福超市中心店'
				},
				{
					title: '会议场地',
					text: '安徽省-芜湖市-隔江区'
				},
				{
					title: '详细地址',
					text: '南京东新路23弄201室'
				}
			]
		};
	}

	render() {
		let { detailsItem } = this.state;
		return (
			<div className="hg-meetingDetails">
				<Nav
					title="活动详情"
					back={() => {
						this.props.history.push('/');
					}}
				/>
				<div className="meetingDetails-cover">
					<div className="warpper">
						<div className="meetingDetails-cover_img" />
						<div className="meetingDetails-cover_descriptions">
							<h1>隔壁老王</h1>
							<span>会议编号：181194343434</span>
							<span>创建时间：2019-02-15</span>
						</div>
					</div>
					<div className="meetingDetails-list">
						<List renderHeader={() => '基本信息'}>
							{detailsItem.map((item, index) => (
								<List.Item key={index} extra={item.text}>
									{item.title}
								</List.Item>
							))}
						</List>
						<List renderHeader={() => '会议介绍'}>
							<List.Item multipleLine wrap>
								这是测试活动这是测试活动这是测试活动这是测试活动这是测试活动这是测试活动这是测试活动这是测试活动
							</List.Item>
						</List>
					</div>
				</div>
			</div>
		);
	}
}
