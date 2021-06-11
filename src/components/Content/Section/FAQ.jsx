import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/system';
import { Content } from './AppleTvSection';
import CustomAccordionItem from './CustomAccordion';
const FAQsection = styled(Grid, {
	name: 'faq-section'
})(({ theme }) => ({
	width: '100%',
	height: 'auto',
	paddingBottom: '46px',
	color: '#1d1d1f',
	backgroundColor: '#fff',
	position: 'relative',
	borderTop: `1px solid ${theme.palette.grey[300]}`,
	borderBottom: `1px solid ${theme.palette.grey[300]}`,
	[theme.breakpoints.up('sm')]: {
		paddingTop: '32px',
		paddingBottom: '66px'
	},
	[theme.breakpoints.up('md')]: {
		paddingBottom: '84px'
	}
}));
const HeaderContainer = styled(Box, {
	name: 'in-case-you-need-anything'
})(({ theme }) => ({
	flexBasis: '100%',
	maxWidth: '100%',
	marginLeft: 'auto',
	marginRight: 'auto',
	height: 'auto',
	[theme.breakpoints.up('sm')]: {
		flexBasis: '75%',
		maxWidth: '75%'
	},
	[theme.breakpoints.up('md')]: {
		flexBasis: '83.333333%',
		maxWidth: '83.333333%'
	}
}));
const FAQ_Info = [
	{
		summery: 'What is Apple TV+?',
		detail:
			'Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.'
	},
	{
		summery: 'How can I watch it?',
		detail:
			'Watch Apple TV+ on the Apple TV app, which is already on your favorite Apple devices. Just open the app, click or tap Apple TV+, and enjoy the shows and movies. You can also watch Apple TV+ on streaming platforms, popular smart TVs, and AirPlay-enabled TVs with the Apple TV app — or watch online at '
	},
	{
		summery: 'What does it cost?',
		detail:
			'That all depends on which offer you choose. (1) If you buy an Apple device, Apple TV+ is included free for one year. (2) A monthly subscription is just $4.99 per month after a free seven-day trial. (3) Apple TV+ is included in Apple One , which bundles up to five other Apple services into a single monthly subscription. Apple One plans start at $14.95 per month. (4) The Apple Music Student Plan comes with a free subscription to Apple TV+.'
	},
	{
		summery: 'Can I share with my family?',
		detail: 'Of course. Apple TV+ lets you share your subscription with up to five family members.'
	},
	{
		summery: 'Are there commercials? And can I watch on demand?',
		detail:
			'Apple TV+ is always commercial-free. Some shows release all episodes at once. Other shows add new episodes every Friday. You can then watch them on demand anytime, anywhere.'
	},

	{
		summery: 'Do I need an Apple TV 4K?',
		detail:
			'No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound — is the ultimate way to experience Apple TV+, the original shows and movies on Apple TV+ are always available on the Apple TV app on your favorite devices.'
	},
	{
		summery: 'Can I download to watch offline?',
		detail:
			'Absolutely. Download your favorite Apple Originals to your Apple device and watch them anywhere, anytime without a Wi-Fi connection.'
	}
];

const FAQ = () => {
	return (
		<FAQsection>
			<Content>
				<HeaderContainer>
					<Typography
						sx={{
							mb: { xs: '45px', sm: '45px', md: '52px' },
							fontWeight: 700,
							textAlign: 'center',
							fontSize: { xs: '28px', sm: '40px', md: '72px' },
							lineHeight: { xs: 1.28583, sm: 1.1, md: 1.05556 },
							letterSpacing: { xs: '.007em', sm: '0em', md: '-.012em' }
						}}>
						In case you <br /> missed anything
					</Typography>
				</HeaderContainer>
				{/*Accordion group */}
				<Box sx={{ width: '100%', height: '100%' }}>
					{FAQ_Info.map((item) => (
						<CustomAccordionItem key={item.summary} item={item} />
					))}
				</Box>
			</Content>
		</FAQsection>
	);
};

export default FAQ;
