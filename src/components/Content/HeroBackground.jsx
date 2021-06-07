import React from 'react';
import { Grid, Box, useScrollTrigger, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import FadeIn from './FadeIn';
const navBarHeight = {
	desktop: {
		normal: '145px',
		small: '49px'
	},
	mobile: {
		normal: '145px',
		small: '49px'
	}
};
const HeroBackground = () => {
	const trigger = useScrollTrigger({
		target: undefined,
		disableHysteresis: true,
		threshold: 48
	});
	const theme = useTheme();
	const below_600 = useMediaQuery(theme.breakpoints.down('sm'));
	const handleOffSet = (trigger, below_600) => {
		//mobile small navbar case
		if (below_600 === true && trigger === true) {
			return navBarHeight.mobile.small;
		}
		//mobile normal navbar case
		else if (below_600 === true && trigger === false) {
			return navBarHeight.mobile.normal;
		}
		//desktop small nav case
		else if (below_600 === false && trigger === true) {
			return navBarHeight.desktop.small;
		}
		// desktop normal case
		else {
			return navBarHeight.desktop.normal;
		}
	};
	return (
		<Grid
			item
			xs={12}
			sx={{
				position: 'absolute',
				top: 0,
				left: 0,
				minHeight: 'calc(100vh + 1800px)', //height cover hero section and offer section
				width: '100%'
			}}>
			<Box
				sx={{
					width: '100%',
					height: 'calc(100vh - 49px)',
					position: 'sticky',
					top: () => {
						return handleOffSet(trigger, below_600);
					},
					left: 0
				}}>
				{/*Background image */}
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage:
							'url(https://www.apple.com/v/apple-tv-plus/t/images/overview/hero_startframe__4hkbk3uuaqqm_large.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						position: 'relative',
						zIndex: -1
					}}></Box>
				{/*Background color */}
				<FadeIn start={48} end={150}>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							backgroundColor: '#000',
							position: 'absolute',
							top: 0,
							left: 0,
							zIndex: -1
						}}></Box>
				</FadeIn>
			</Box>
		</Grid>
	);
};

export default HeroBackground;
