import React from 'react';
import { Grid, Box, IconButton, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import SwipeableViews from 'react-swipeable-views';
// // import { autoPlay } from 'react-swipeable-views-utils';
// // const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import { CustomSwipeableViews } from './SwipeableViews';
const gallery_1 = [
	{
		url: './gallery_image/1971.jpg',
		label: '1971',
		slot: 0
	},
	{
		url: './gallery_image/forallmankind.jpg',
		label: 'For All Mankind',
		slot: 1
	},

	{
		url: './gallery_image/homebeforedark.jpg',
		label: 'Home before dark',
		slot: 2
	},
	{ url: `./gallery_image/lisey's story.jpg`, label: 'Lisey story', slot: 3 },
	{ url: `./gallery_image/Mythic quest.jpg`, label: 'mythic quest', slot: 4 },
	{ url: `./gallery_image/palmer.jpg`, label: 'palmer', slot: 5 },
	{ url: `./gallery_image/physical.jpg`, label: 'physical', slot: 6 },
	{ url: `./gallery_image/Snoopy.jpg`, label: 'snoopy', slot: 7 },
	{ url: `./gallery_image/ted lasso.jpg`, label: 'ted lasso', slot: 8 },
	{
		url: `./gallery_image/the me you can't see.jpg`,
		label: `the me you can't see`,
		slot: 9
	},
	{
		url: `./gallery_image/the morning show.jpg`,
		label: 'the morning show.jpg',
		slot: 10
	},
	{
		url: `./gallery_image/the mosquito coast.jpg`,
		label: 'the mosquito coast',
		slot: 11
	},
	{ url: `./gallery_image/Trying.jpg`, label: 'Trying', slot: 12 }
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
				{/*gallery slide container */}

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
					<Box sx={{ height: '100%' }}>
						<Typography variant='h1'> 1</Typography>
					</Box>
					<Box sx={{ height: '100%' }}>
						<Typography variant='h1'> 2</Typography>
					</Box>
					<Box sx={{ height: '100%' }}>
						<Typography variant='h1'> 3</Typography>
					</Box>
					<Box sx={{ height: '100%' }}>
						<Typography variant='h1'> 4</Typography>
					</Box>
					<Box sx={{ height: '100%' }}>
						<Typography variant='h1'> 5</Typography>
					</Box>
					<Box sx={{ height: '100%' }}>
						<Typography variant='h1'> 6</Typography>
					</Box>
					<Box sx={{ height: '100%' }}>
						<Typography variant='h1'> 7</Typography>
					</Box>
					<Box sx={{ height: '100%' }}>
						<Typography variant='h1'> 8</Typography>
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
