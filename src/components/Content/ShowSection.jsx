import React from 'react';
import { Grid, Box, IconButton, Typography, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
// import SwipeableViews from 'react-swipeable-views';
// // import { autoPlay } from 'react-swipeable-views-utils';
// // const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import { CustomSwipeableViews } from './SwipeableViews';
const gallery_1 = [
	{
		url: { md: './gallery_image/1971_md.jpg', sm: './gallery_image/1971_md.jpg', xs: './gallery_image/1971_sm.jpg' },
		label: '1971',
		logo: './gallery_image/1971_logo.png'
	},
	{
		url: {
			md: './gallery_image/forallmankind_md.jpg',
			sm: './gallery_image/forallmankind_md.jpg',
			xs: './gallery_image/forallmankind_sm.jpg'
		},
		label: 'For All Mankind',
		logo: './gallery_image/forallmankind_logo.png'
	},

	{
		url: {
			md: './gallery_image/homebeforedark_md.jpg',
			sm: './gallery_image/homebeforedark_md.jpg',
			xs: './gallery_image/homebeforedark_sm.jpg'
		},
		label: 'Home before dark',
		logo: './gallery_image/homebeforedark_logo.png'
	},
	{
		url: {
			md: `./gallery_image/lisey's story_md.jpg`,
			sm: `./gallery_image/lisey's story_md.jpg`,
			xs: `./gallery_image/lisey's story_sm.jpg`
		},
		label: 'Lisey story',
		logo: `./gallery_image/lisey's story_logo.png`
	},
	{
		url: {
			md: `./gallery_image/Mythic quest_md.jpg`,
			sm: `./gallery_image/Mythic quest_md.jpg`,
			xs: `./gallery_image/mythic quest sm.jpg`
		},
		label: 'mythic quest',
		logo: './gallery_image/mythic quest_logo.png'
	},
	{
		url: { md: `./gallery_image/palmer_md.jpg`, sm: `./gallery_image/palmer_md.jpg`, xs: `palmer_sm.jpg` },
		label: 'palmer',
		logo: './gallery_image/palmer_logo.png'
	},

	{
		url: {
			md: `./gallery_image/physical_md.jpg`,
			sm: `./gallery_image/physical_md.jpg`,
			xs: `./gallery_image/physical_sm.jpg`
		},
		label: 'physical',
		logo: './gallery_image/physical_logo.png'
	},
	{
		url: {
			md: `./gallery_image/Snoopy_md.jpg`,
			sm: `./gallery_image/Snoopy_md.jpg`,
			xs: './gallery_image/Snoopy_sm.jpg'
		},
		label: 'snoopy',
		logo: './gallery_image/Snoopy_logo.png'
	},
	{
		url: {
			md: `./gallery_image/ted lasso_md.jpg`,
			sm: `./gallery_image/ted lasso_md.jpg`,
			xs: './gallery_image/ted lasso_sm.jpg'
		},
		label: 'ted lasso',
		logo: './gallery_image/ted lasso_logo.png'
	},
	{
		url: {
			md: `./gallery_image/the me you can't see_md.jpg`,
			sm: `./gallery_image/the me you can't see_md.jpg`,
			xs: `./gallery_image/the me you can't see_sm.jpg`
		},
		label: `the me you can't see`,
		logo: `./gallery_image/the me you can't see_logo.png`
	},
	{
		url: {
			md: `./gallery_image/the morning show_md.jpg`,
			sm: `./gallery_image/the morning show_md.jpg`,
			xs: `./gallery_image/the morning show_sm.jpg`
		},
		label: 'the morning show.jpg',
		logo: './gallery_image/the morning show_logo.png'
	},
	{
		url: {
			md: `./gallery_image/mosquito coast_md.jpg`,
			sm: `./gallery_image/mosquito coast_md.jpg`,
			xs: `./gallery_image/mosquito coast_sm.jpg`
		},
		label: 'the mosquito coast',
		logo: './gallery_image/mosquito coast_logo.png'
	},
	{
		url: {
			md: `./gallery_image/Trying_md.jpg`,
			sm: `./gallery_image/Trying_md.jpg`,
			xs: `./gallery_image/Trying_sm.jpg`
		},
		label: 'Trying',
		logo: './gallery_image/Trying_logo.png'
	}
];

const ShowSection = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = gallery_1.length;
	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	console.log('activeStep:', activeStep);
	return (
		<Grid container component='section' sx={{ position: 'relative', zIndex: 3, height: '100vh', py: '3rem' }}>
			{/*Background color */}
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
			{/*sticky wrapper */}
			<Grid item container sx={{ position: 'sticky', top: 49, left: 0, height: 'calc(100% - 49px)', zIndex: 1 }}>
				{/*gallery card */}
				<CustomSwipeableViews
					style={{ overflowX: null }}
					containerStyle={{ display: null, flexDirection: null }}
					slideStyle={{ width: null, flexShrink: null }}
					slideClassName='react-swipeable-view-slider'
					axis='x'
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents={true}
					autoplay={false}>
					{/*gallery card */}
					<Box sx={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}>
						{/*Background image */}
						<Box
							sx={{
								position: 'absolute',
								top: 0,
								left: 0,
								height: '100%',
								width: '100%',
								backgroundImage: {
									md: 'url(./gallery_image/Snoopy_md.jpg)',
									sm: `url(./gallery_image/Snoopy_md.jpg)`,
									xs: `url(./gallery_image/Snoopy_sm.jpg)`
								},
								backgroundPosition: 'center top',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								'&::after': {
									position: 'absolute',
									top: 0,
									left: 0,
									bottom: 0,
									right: 0,
									content: '""',
									background: 'rgba(0,0,0,0.35)'
								}
							}}></Box>
						{/*Background gradient */}
						<Box
							sx={{
								position: 'absolute',
								top: 0,
								left: '-5%',
								width: '110%',
								height: '100%',
								display: { xs: 'block', sm: 'none', md: 'none' },
								background: 'linear-gradient(transparent 50%, rgba(0,0,0,0.7))'
							}}></Box>
						{/*Info Top */}
						<Box
							sx={{
								position: 'absolute',
								top: { xs: '23px', sm: '40px', md: '40px' },
								left: { xs: '50%', sm: '40px', md: '40px' },
								width: '100%',
								height: { xs: '82px', md: 'auto' },
								maxWidth: '270px',
								transform: { xs: 'translateX(-50%)', sm: 'none' },
								textAlign: { xs: 'center', sm: 'left', md: 'left' }
							}}>
							<Typography
								variant='h6'
								sx={{
									fontSize: { xs: '14px', sm: '14px', md: '17px' },
									lineHeight: { xs: 1.42859, sm: 1.47059, md: 1.47059 },
									fontWeight: 600,
									letterSpacing: { xs: '-.016em', sm: '-.016em', md: '-.022em' },
									color: '#fff'
								}}>
								Coming 6.25
							</Typography>
							{/*Logo */}
							<Box
								sx={{
									maskImage: 'url(./gallery_image/Snoopy_logo.png)',
									maskSize: { xs: 'contain' },
									maskRepeat: 'no-repeat',
									maskPosition: { xs: 'top center', sm: 'top left' },
									backgroundColor: '#fff',
									width: { xs: '200px', sm: '250px' },
									height: { xs: '50px', sm: '62px' },
									m: { xs: '12px auto 0', sm: '12px 0px 0px 0px' }
								}}></Box>
						</Box>
						{/*Info Bottom */}
						<Box
							sx={{
								position: 'absolute',
								left: { xs: 0, sm: '40px' },
								bottom: { xs: '23px', sm: '30px' },
								width: { xs: '100%', sm: '475px', md: '820px' },
								height: { xs: '124px', sm: '44px', md: '44px' },
								textAlign: 'center',
								fontWeight: { xs: 400 },
								display: 'flex',
								flexDirection: { xs: 'column', sm: 'row', md: 'row' },
								justifyContent: 'space-between',
								alignItems: 'center'
							}}>
							{/*text box */}
							<Box
								sx={{
									fontWeight: 400,
									fontSize: { xs: '16px', sm: '14px', md: '14px' },
									lineHeight: { xs: 1.4375, sm: 1.42859, md: 1.42859 },
									letterSpacing: { xs: '-.022em', sm: '-.016em ', md: '-.016em ' },
									color: '#fff',
									textAlign: { xs: 'center', sm: 'left', md: 'left' }
								}}>
								{/*genre */}
								<Typography
									sx={{
										fontWeight: 700,
										fontSize: { xs: '16px', sm: '14px', md: '14px' },
										lineHeight: { xs: 1.4375, sm: 1.42859, md: 1.42859 },
										letterSpacing: { xs: '-.022em', sm: '-.016em ', md: '-.016em ' },
										color: '#fff',
										display: { xs: 'block', sm: 'inline' }
									}}
									variant='body1'
									component='span'>
									Documentary
								</Typography>
								{/*mid dot */}
								<Box
									component='span'
									sx={{
										fontWeight: 700,
										fontSize: { sm: '14px', md: '14px' },
										lineHeight: { sm: 1.42859, md: 1.42859 },
										letterSpacing: { sm: '-.016em' },
										color: '#fff',
										display: { xs: 'none', sm: 'inline' },
										mx: { sm: '6px', md: '8px' }
									}}>
									·
								</Box>
								{/*caption */}
								<Typography
									variant='body1'
									component='span'
									sx={{
										fontWeight: 400,
										fontSize: { xs: '16px', sm: '14px', md: '14px' },
										lineHeight: { xs: 1.4375, sm: 1.42859, md: 1.42859 },
										letterSpacing: { xs: '-.022em', sm: '-.016em ', md: '-.016em ' },
										color: '#fff',
										display: { xs: 'block', sm: 'inline-block' }
									}}>
									{' '}
									Before there was Charlie Brown, there was Schulz
								</Typography>
							</Box>
							<Button
								endIcon={<PlayCircleOutlineIcon />}
								sx={{
									boxSizing: 'content-box',
									flexShrink: 0,
									py: '12px',
									px: '22px',
									width: '99px',
									height: '20px',
									color: '#fff',
									backgroundColor: '#1d1d1f',
									border: 'none',
									borderRadius: '22px',
									// fontSize: { xs: '14px', sm: '14px', md: '14px' },
									// lineHeight: 1.42859,
									// fontWeight: 700,
									// letterSpacing: '-.016em',
									// textTransform: 'capitalize',
									'& .MuiButton-label': {
										fontSize: { xs: '14px', sm: '14px', md: '14px' },
										lineHeight: 1.42859,
										fontWeight: 700,
										letterSpacing: '-.016em',
										textTransform: 'capitalize'
									}
								}}>
								watch now
							</Button>
						</Box>
					</Box>
				</CustomSwipeableViews>

				{/*control button */}
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						display: 'flex',
						alignItems: 'center',
						backgroundColor: 'transparent',
						color: '#86868b',
						height: { md: '500px', sm: '320px', xs: '490px' },
						width: { xs: 'auto', sm: 'calc(50% - 297px)', md: 'calc(50% - 470px)' }
					}}>
					<IconButton
						sx={{
							color: 'currentcolor',
							width: { xs: '18px', md: '46px' },
							p: { xs: '6px 14px' },
							boxSizing: 'content-box'
						}}>
						<ArrowBackIosIcon />
					</IconButton>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						right: 0,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end',
						backgroundColor: 'transparent',
						color: '#86868b',
						height: { md: '500px', sm: '320px', xs: '490px' },
						width: { xs: 'auto', sm: 'calc(50% - 297px)', md: 'calc(50% - 470px)' }
					}}>
					<IconButton
						sx={{
							color: 'currentcolor',
							width: { xs: '18px', md: '46px' },
							p: { xs: '6px 14px' },
							boxSizing: 'content-box'
						}}>
						<ArrowForwardIosIcon />
					</IconButton>
				</Box>
			</Grid>
		</Grid>
	);
};

export default ShowSection;
