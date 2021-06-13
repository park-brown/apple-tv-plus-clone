import React from 'react';
import { Link, List, ListItem } from '@material-ui/core';
import { AppleDirectoryColumn, ColumnTitle } from './Footer';
const ShopAndLearnList = [
	'Mac',
	'iPad',
	'iphone',
	'Watch',
	'TV',
	'Music',
	'AirPods',
	'HomePod',
	'iPod touch',
	'Air Tag',
	'Accessories',
	'Gift Cards'
];
const ServiceList = [
	'Apple Music',
	'Apple TV+',
	'Apple Fitness+',
	'Apple News+',
	'Apple Arcade',
	'iCloud',
	'Apple One',
	'Apple Card',
	'Apple Books',
	'Apple Podcasts',
	'Apple Store'
];
const AppleStoreList = [
	'Find a Store',
	'Shop Online',
	'Genius Bar',
	'Today at Apple',
	'Apple Camp',
	'Apple Store App',
	'Refurbished and Clearance',
	'Financing',
	'Apple Trade in',
	'Order Status',
	'Shopping Help'
];
const ForBusinessList = ['Apple and Business', 'Shop For Business'];
const AccountList = ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'];
const ForEducationList = ['Apple and Education', 'Shop for K-12', 'Shop for College'];
const ForHealthcareList = ['Apple in Healthcare', 'Health on Apple Wach', 'Health record on iPhone'];
const ForGovernmentList = ['Shop for Government', 'Shop for Veterans and Military'];

const AppleValueList = [
	'Accessibility',
	'Education',
	'Environment',
	'Inclusion and Diversity',
	'Privacy',
	'Racial Equality and Justice',
	'Supplier Responsibility'
];
const AboutList = [
	'Newsroom',
	'Apple Leadership',
	'Career Opportunities',
	'Investors',
	'Ethics & Compliance',
	'Events',
	'Contact Apple'
];
const AppleDirectoryForLaptop = () => {
	return (
		<>
			<AppleDirectoryColumn>
				<ColumnTitle>shop and learn</ColumnTitle>
				<List sx={{ p: 0, width: '100%' }}>
					{ShopAndLearnList.map((item, key) => (
						<ListItem key={key} sx={{ p: 0, mb: '9.6px' }}>
							<Link sx={{ color: '#a1a1a6' }}>{item}</Link>
						</ListItem>
					))}
				</List>
			</AppleDirectoryColumn>
			<AppleDirectoryColumn>
				<ColumnTitle>Services</ColumnTitle>
				{ServiceList.map((item, key) => (
					<ListItem key={key} sx={{ p: 0, mb: '9.6px' }}>
						<Link sx={{ color: '#a1a1a6' }}>{item}</Link>
					</ListItem>
				))}
				<ColumnTitle sx={{ pt: '24px' }}>Account</ColumnTitle>
				{AccountList.map((item) => (
					<ListItem key={item} sx={{ p: 0, mb: '9.6px' }}>
						<Link sx={{ color: '#a1a1a6' }}>{item}</Link>
					</ListItem>
				))}
			</AppleDirectoryColumn>
			<AppleDirectoryColumn>
				<ColumnTitle>Apple store</ColumnTitle>
				{AppleStoreList.map((item) => (
					<ListItem key={item} sx={{ p: 0, mb: '9.6px' }}>
						<Link sx={{ color: '#a1a1a6' }}>{item}</Link>
					</ListItem>
				))}
			</AppleDirectoryColumn>
			<AppleDirectoryColumn>
				<ColumnTitle>For Business</ColumnTitle>
				{ForBusinessList.map((item) => (
					<ListItem key={item} sx={{ p: 0, mb: '9.6px' }}>
						<Link sx={{ color: '#a1a1a6' }}>{item}</Link>
					</ListItem>
				))}
				<ColumnTitle sx={{ pt: '24px' }}>For Education</ColumnTitle>
				{ForEducationList.map((item) => (
					<ListItem key={item} sx={{ p: 0, mb: '9.6px' }}>
						<Link sx={{ color: '#a1a1a6' }}>{item}</Link>
					</ListItem>
				))}
				<ColumnTitle sx={{ pt: '24px' }}>For Healthcare</ColumnTitle>
				{ForHealthcareList.map((item) => (
					<ListItem key={item} sx={{ p: 0, mb: '9.6px' }}>
						<Link sx={{ color: '#a1a1a6' }}>{item}</Link>
					</ListItem>
				))}
				<ColumnTitle sx={{}}>For Government</ColumnTitle>
				{ForGovernmentList.map((item) => (
					<ListItem key={item} sx={{ p: 0, mb: '9.6px' }}>
						<Link sx={{ color: '#a1a1a6' }}>{item}</Link>
					</ListItem>
				))}
			</AppleDirectoryColumn>
			<AppleDirectoryColumn>
				<ColumnTitle>Apple Values</ColumnTitle>
				{AppleValueList.map((item) => (
					<ListItem key={item} sx={{ p: 0, mb: '9.6px' }}>
						<Link sx={{ color: '#a1a1a6' }}>{item}</Link>
					</ListItem>
				))}
				<ColumnTitle sx={{ pt: '24px' }}>About Apple</ColumnTitle>
				{AboutList.map((item) => (
					<ListItem key={item} sx={{ p: 0, mb: '9.6px' }}>
						<Link sx={{ color: '#a1a1a6' }}>{item}</Link>
					</ListItem>
				))}
			</AppleDirectoryColumn>
		</>
	);
};

export default AppleDirectoryForLaptop;
