import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useScroll } from './useScroll';
import FadeIn from './FadeIn';
import OfferCard from './OfferCard';
const offerContent = [
	{
		h2: 'Buy an Apple device',
		h3: '	Get 1 year on us',
		caption: 'Apple TV+ is included for 1 year when you purchase an Apple device and redeem the offer within 90 days.',
		button: 'check eligibility'
	},
	{
		h2: 'Free 7-day trial',
		h3: '$4.99/mo.',
		caption:
			'A monthly subscription is just $4.99 per month after a free 7-day trial. Share Apple TV+ with your family.',
		button: 'Try it free'
	},
	{
		h2: 'Free 1‑month trial',
		h3: 'Apple One',
		caption:
			'Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less. ',
		button: 'Try Apple One free'
	}
];
const OfferSection = () => {
	const scroll = useScroll();
	const theme = useTheme();
	console.log('scroll:', scroll);
	/*70 - 200 map to 0 - 1*/

	return (
		<Grid container component='section' sx={{ position: 'relative', zIndex: 3, height: 'auto' }}>
			{/*Text container */}
			<Grid item xs={12} sx={{ color: '#f5f5f7' }}>
				<Box
					sx={{
						mx: 'auto',
						width: { xs: '87.5%', sm: '87.5%', md: '860px', lg: '960px' },
						minHeight: '388px',
						pt: '90px',
						pb: '150px'
					}}>
					<Box sx={{}}>
						<FadeIn start={70} end={200} from={0.001} to={0.99} delay={300}>
							<Typography variant='h5' sx={{ fontWeight: 700 }}>
								New Apple Originals every month.
							</Typography>
						</FadeIn>
						<FadeIn start={400} end={500} from={0.001} to={0.99} delay={300}>
							<Typography variant='h5' sx={{ mt: '50px', fontWeight: 700 }}>
								Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.
							</Typography>
						</FadeIn>
						<FadeIn start={600} end={700} from={0.001} to={0.99} delay={300}>
							<Typography variant='h5' sx={{ mt: '50px', fontWeight: 700 }}>
								Share Apple TV+ with your family.
							</Typography>
						</FadeIn>
					</Box>
				</Box>
				<Grid
					item
					container
					sx={{
						mx: 'auto',
						width: { xs: '87.5%', sm: '87.5%', md: '860px', lg: '960px' },
						minHeight: '388px',
						justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },

						gap: { xs: '2rem', sm: '3rem', md: '0px' }
					}}>
					{offerContent.map((item) => {
						return <OfferCard key={item.h2} item={item}></OfferCard>;
					})}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default OfferSection;
