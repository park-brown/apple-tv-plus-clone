import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, List, ListItem } from '@material-ui/core';
import { styled } from '@material-ui/system';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FooterAccordion = styled(Accordion, { name: 'footer-accordian' })(({ theme }) => ({
	backgroundColor: '#1d1d1f',
	color: '#f5f5f7',
	height: 'auto',
	borderBottom: '1px solid  #424245',
	'& .MuiAccordionSummary-root': {
		padding: 0,
		minHeight: '0px',
		height: '36px'
	},
	'& .MuiAccordionSummary-content': {
		margin: '0px'
	},
	'& .MuiSvgIcon-root': {
		width: '20px',
		height: '20px',
		color: '#f5f5f7'
	},
	'& .MuiAccordionSummary-expandIconWrapper': {
		marginRight: '20px'
	},
	'& .MuiCollapse-wrapper': {
		backgroundColor: '#1d1d1f',
		color: '#f5f5f7'
	},
	'& .MuiListItem-root': {
		color: '#6e6e73',
		'&:hover': {
			color: '#f5f5f7'
		}
	}
}));
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
const AppleDirectoryForTablet = () => {
	return (
		<>
			<FooterAccordion square={true}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>shop and learn</AccordionSummary>
				<AccordionDetails>
					<List>
						{ShopAndLearnList.map((item) => (
							<ListItem key={item}>{item}</ListItem>
						))}
					</List>
				</AccordionDetails>
			</FooterAccordion>
			<FooterAccordion square={true}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>Service</AccordionSummary>
				<AccordionDetails>
					<List>
						{ServiceList.map((item) => (
							<ListItem key={item}>{item}</ListItem>
						))}
					</List>
				</AccordionDetails>
			</FooterAccordion>
			<FooterAccordion square={true}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>Account</AccordionSummary>
				<AccordionDetails>
					<List>
						{AccountList.map((item) => (
							<ListItem key={item}>{item}</ListItem>
						))}
					</List>
				</AccordionDetails>
			</FooterAccordion>
			<FooterAccordion square={true}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>Apple Store</AccordionSummary>
				<AccordionDetails>
					<List>
						{AppleStoreList.map((item) => (
							<ListItem key={item}>{item}</ListItem>
						))}
					</List>
				</AccordionDetails>
			</FooterAccordion>
			<FooterAccordion square={true}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>For Business</AccordionSummary>
				<AccordionDetails>
					<List>
						{ForBusinessList.map((item) => (
							<ListItem key={item}>{item}</ListItem>
						))}
					</List>
				</AccordionDetails>
			</FooterAccordion>
			<FooterAccordion square={true}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>For Education</AccordionSummary>
				<AccordionDetails>
					<List>
						{ForEducationList.map((item) => (
							<ListItem key={item}>{item}</ListItem>
						))}
					</List>
				</AccordionDetails>
			</FooterAccordion>
			<FooterAccordion square={true}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>For Healthcare</AccordionSummary>
				<AccordionDetails>
					<List>
						{ForHealthcareList.map((item) => (
							<ListItem key={item}>{item}</ListItem>
						))}
					</List>
				</AccordionDetails>
			</FooterAccordion>
			<FooterAccordion square={true}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>For Government</AccordionSummary>
				<AccordionDetails>
					<List>
						{ForGovernmentList.map((item) => (
							<ListItem key={item}>{item}</ListItem>
						))}
					</List>
				</AccordionDetails>
			</FooterAccordion>
			<FooterAccordion square={true}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>Apple Values</AccordionSummary>
				<AccordionDetails>
					<List>
						{AppleValueList.map((item) => (
							<ListItem key={item}>{item}</ListItem>
						))}
					</List>
				</AccordionDetails>
			</FooterAccordion>
			<FooterAccordion square={true}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>About Apple</AccordionSummary>
				<AccordionDetails>
					<List>
						{AboutList.map((item) => (
							<ListItem key={item}>{item}</ListItem>
						))}
					</List>
				</AccordionDetails>
			</FooterAccordion>
		</>
	);
};

export default AppleDirectoryForTablet;
