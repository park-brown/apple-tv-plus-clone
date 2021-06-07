import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
const OfferCard = ({ item }) => {
	return (
		<Grid
			item
			xs={12}
			sm={7}
			md={4}
			sx={{
				minHeight: '220px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				alignItems: 'flex-start',
				pr: { md: `${item.h3 === 'Apple One' ? 'none' : '32px'}`, sm: '0px', xs: '0px' }
			}}>
			<Typography
				variant='h5'
				sx={{
					fontSize: { xs: '17px', sm: '19px', md: '21px' },
					fontWeight: 600,
					letterSpacing: { xs: '-.022em', sm: '.009em', md: '.011em' },
					lineHeight: { xs: 1.47059, sm: 1.21053, md: 1.19048 }
				}}>
				{item.h2}
			</Typography>
			<Typography
				variant='h5'
				sx={{
					mt: { xs: '11.2px', sm: '11.2px', md: '16px' },
					fontSize: { xs: '28px', sm: '28px', md: '40px' },
					lineHeight: { xs: 1.14286, sm: 1.14284, md: 1.1 },
					fontWeight: 700,
					letterSpacing: { xs: '.007em', sm: '.007em', md: '0em' }
				}}>
				{item.h3}
			</Typography>
			<Typography
				variant='h5'
				sx={{
					mt: { xs: '3px', sm: '5px', md: '12px' },
					mb: { xs: '21px', sm: '23px', md: '31px' },
					color: '#a1a1a6',
					fontSize: { xs: '17px' },
					fontWeight: 400,
					letterSpacing: '-.022em',
					lineHeight: 1.47059
				}}>
				{item.caption}
			</Typography>
			<Button
				sx={{
					color: '#fff',
					border: '1px solid #fff',
					px: '22px',
					py: '12px',
					borderRadius: '22px',
					backgroundColor: '#1d1d1f',
					'& .MuiButton-label': {
						fontSize: '14px',
						lineHeight: 1.42859,
						fontWeight: 700,
						letterSpacing: '-.016em',

						textTransform: 'capitalize'
					}
				}}>
				{item.button}
			</Button>
		</Grid>
	);
};

export default OfferCard;
