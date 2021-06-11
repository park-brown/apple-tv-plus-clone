import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { styled } from '@material-ui/system';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CustomAccordion = styled(Accordion, {
	name: 'Customized-Accordion'
})(({ theme }) => ({
	boxShadow: 'none',
	color: '#1d1d1f',
	borderBottom: `2px solid ${theme.palette.grey[300]}`,
	'&:before': {
		height: 0 // before peudo-element conflict with border bottom,set to height:0 to disable it.
	},
	'& .MuiAccordionSummary-root': {
		padding: '0px 0px',
		'& .MuiAccordionSummary-content': {
			margin: '0px 0px',
			padding: '19px 0px',
			[theme.breakpoints.up('sm')]: {
				padding: '21px 0px'
			},
			[theme.breakpoints.up('md')]: {
				padding: '24px 0px'
			},
			'& .MuiTypography-root': {
				fontSize: '19px',
				lineHeight: 1.21053,
				fontWeight: 600,
				letterSpacing: '.012em'
			}
		}
	},
	'& .MuiAccordionDetails-root': {
		padding: '0px 0px 19px 0px',

		[theme.breakpoints.up('sm')]: {
			padding: '0px 0px 21px 0px'
		},
		[theme.breakpoints.up('md')]: {
			padding: '0px 0px 24px 0px'
		},
		'& .MuiTypography-root': {
			maxWidth: '83.33333%',
			fontSize: '17px',
			lineHeight: 1.47059,
			fontWeight: 400,
			letterSpacing: '-.022em'
		}
	}
}));

const CustomAccordionItem = ({ item }) => {
	const { summery, detail } = item;
	return (
		<CustomAccordion square={true}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
				<Typography>{summery}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{detail}</Typography>
			</AccordionDetails>
		</CustomAccordion>
	);
};
export default CustomAccordionItem;
