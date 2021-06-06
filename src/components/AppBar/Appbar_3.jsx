import React from 'react';
import { AppBar, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
const APPBAR_3 = () => {
	const theme = useTheme();
	const trigger = useScrollTrigger({
		target: undefined,
		disableHysteresis: true,
		threshold: 48
	});
	return (
		<AppBar
			position='fixed'
			sx={{
				bgcolor: '#222',
				backdropFilter: 'saturate(180%) blur(20px)',
				top: '97px',
				// opacity: `${trigger === true ? 0 : 1}`,
				// visibility: `${trigger === true ? 'hidden' : 'visible'}`,
				display: `${trigger === true ? 'none' : 'flex'}`,
				transition: `${theme.transitions.create(['transform', 'display'])}`,
				transform: () => (trigger === true ? `translateY(-48px)` : '')
			}}>
			<Toolbar
				sx={{
					mx: 'auto',
					width: '100%',
					maxWidth: '960px',
					justifyContent: 'space-between',
					alignItems: 'center',
					minHeight: { md: '48px', sm: '48px', xs: '48px' },
					bgcolor: '#222',
					py: '8px'
				}}>
				<Typography
					variant='subtitle2'
					sx={{ cursor: 'pointer', fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, textAlign: 'left' }}>
					Get 1 year of Apple TV+ free when you buy an Apple device.
					<Typography
						variant='subtitle2'
						component='span'
						sx={{
							color: '#0071e3',
							display: 'inline-block',
							ml: { md: '1rem', sm: '1rem', xs: '0px' },
							fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }
						}}>
						Check eligibility
					</Typography>
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default APPBAR_3;
