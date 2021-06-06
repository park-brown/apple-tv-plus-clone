import React from 'react';
import { Grid, Box, useScrollTrigger, useMediaQuery, Typography, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
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

				{/*Text container */}
				<Box
					sx={{
						width: '100%',
						height: { xs: '481px', sm: '570px', md: 'calc(100vh - 145px)' },
						px: { xs: '2rem', sm: '3rem', md: '5rem' },
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						justifyContent: { md: 'space-evenly', sm: 'flex-start' },
						position: 'absolute',
						top: { xs: '77px', sm: '20px', md: '48px' },
						left: { xs: 0, sm: 0, md: 0 },
						maxWidth: { xs: '360px', sm: '860px', md: '1280px' },
						zIndex: 2
					}}>
					<Typography variant='h2' sx={{ color: '#f5f5f7' }}>
						All Apple originals. Only on Apple TV+
					</Typography>
					<Button
						sx={{
							background: 'linear-gradient(#fff, #e5e5e5)',
							color: '#1d1d1f',
							p: '18px 31px',
							borderColor: '#FFF',
							borderRadius: '28px',
							mt: '25px',
							'& .MuiButton-label': {
								fontSize: '17px',
								lineHeight: 1.17648,
								letterSpacing: '-.022em',
								fontWeight: 600,
								textTransform: 'capitalize'
							}
						}}>
						Watch now
					</Button>
					<Box sx={{ width: '100%', height: '45px', mt: '86px' }}>
						<Typography variant='h6' sx={{ color: '#f5f5f7' }}>
							Watch on the{' '}
							<Box
								sx={{
									display: 'inline-block',
									width: '41px',
									height: '41px',
									verticalAlign: 'bottom',
									backgroundImage:
										'url(https://www.apple.com/v/apple-tv-plus/t/images/overview/hero_icon__o324c61iilmm_large.png)',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat'
								}}
								component='span'></Box>{' '}
							app
						</Typography>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};

export default ContentOne;
