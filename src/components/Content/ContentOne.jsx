import React from 'react';
import { Grid, Box, useScrollTrigger, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
const navBarHeight = {
	desktop: {
		normal: '145px',
		small: '49px'
	},
	mobile: {
		normal: '153px',
		small: '49px'
	}
};
const ContentOne = () => {
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
				minHeight: '1492px',
				width: '100%'
			}}>
			<Box
				sx={{
					width: '100%',
					height: '100vh',
					position: 'sticky',
					top: () => {
						return handleOffSet(trigger, below_600);
					},
					left: 0,
					bgcolor: 'red'
				}}></Box>
		</Grid>
	);
};

export default ContentOne;
// `${trigger === true ? 'calc(100vh - 48px)' : 'calc(100vh - 145px)'}`;
