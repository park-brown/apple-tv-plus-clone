import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { CustomSwipeableViews } from './SwipeableViews';
import FirstGalleryCard from './FirstGalleryCard';
const gallery_1 = [
	{
		url: { md: './gallery_image/1971_md.jpg', sm: './gallery_image/1971_md.jpg', xs: './gallery_image/1971_sm.jpg' },
		label: '1971',
		logo: './gallery_image/1971_logo.png',
		title: 'New Release',
		genre: 'Documentary',
		caption: 'A tumultuous era sparked a year of unprecedented musical innovation.'
	},
	{
		url: {
			md: './gallery_image/forallmankind_md.jpg',
			sm: './gallery_image/forallmankind_md.jpg',
			xs: './gallery_image/forallmankind_sm.jpg'
		},
		label: 'For All Mankind',
		logo: './gallery_image/forallmankind_logo.png',
		genre: 'Drama',
		title: '',
		caption: 'the race continues'
	},

	{
		url: {
			md: './gallery_image/homebeforedark_md.jpg',
			sm: './gallery_image/homebeforedark_md.jpg',
			xs: './gallery_image/homebeforedark_sm.jpg'
		},
		label: 'Home before dark',
		logo: './gallery_image/homebeforedark_logo.png',
		genre: 'Drama',
		title: 'Season 2 Premieres on Friday',
		caption: 'follow the truth'
	},
	{
		url: {
			md: './gallery_image/lisey_story_md.jpg',
			sm: './gallery_image/lisey_story_md.jpg',
			xs: './gallery_image/lisey_story_sm.jpg'
		},
		label: 'Lisey story',
		logo: './gallery_image/lisey_story_logo.png',
		title: 'New Episode Friday',
		genre: 'Drama',
		caption: 'Julianne Moore stars in a chilling series based on the novel by Stephen King.'
	},
	{
		url: {
			md: `./gallery_image/Mythic_quest_md.jpg`,
			sm: `./gallery_image/Mythic_quest_md.jpg`,
			xs: `./gallery_image/mythic_quest_sm.jpg`
		},
		label: 'mythic quest',
		logo: './gallery_image/mythic_quest_logo.png',
		genre: 'Comedy',
		title: 'New Episode Friday',
		caption: 'the stuff of legends '
	},
	{
		url: {
			md: './gallery_image/palmer_md.jpg',
			sm: './gallery_image/palmer_md.jpg',
			xs: './gallery_image/palmer_sm.jpg'
		},
		label: 'palmer',
		logo: './gallery_image/palmer_logo.png',
		genre: 'Drama',
		title: '',
		caption: 'family is who you make it'
	},

	{
		url: {
			md: `./gallery_image/physical_md.jpg`,
			sm: `./gallery_image/physical_md.jpg`,
			xs: `./gallery_image/physical_sm.jpg`
		},
		label: 'physical',
		logo: './gallery_image/physical_logo.png',
		title: 'Coming 6.18',
		genre: 'Comedy',
		caption: 'work out your issues'
	},
	{
		url: {
			md: `./gallery_image/Snoopy_md.jpg`,
			sm: `./gallery_image/Snoopy_md.jpg`,
			xs: './gallery_image/Snoopy_sm.jpg'
		},
		label: 'snoopy',
		logo: './gallery_image/Snoopy_logo.png',
		title: 'Coming 6.25',
		genre: 'Documentary',
		caption: '	Before there was Charlie Brown, there was Schulz'
	},
	{
		url: {
			md: `./gallery_image/ted_lasso_md.jpg`,
			sm: `./gallery_image/ted_lasso_md.jpg`,
			xs: './gallery_image/ted_lasso_sm.jpg'
		},
		label: 'ted lasso',
		logo: './gallery_image/ted_lasso_logo.png',
		genre: 'Comedy',
		title: 'Season 2 Premieres July 23',
		caption: 'Losing record, winning attitude'
	},
	{
		url: {
			md: './gallery_image/the me_you_cant_see_md.jpg',
			sm: './gallery_image/the_me_you_cant_see_md.jpg',
			xs: './gallery_image/the_me_you_cant_see_sm.jpg'
		},
		label: `the me you can't see`,
		logo: './gallery_image/the_me_you_can_see_logo.png',
		title: 'New Release',
		genre: 'Documentary',
		caption: 'A timely docuseries that shines a light on our invisible pain.'
	},
	{
		url: {
			md: `./gallery_image/the_morning_show_md.jpg`,
			sm: `./gallery_image/the_morning_show_md.jpg`,
			xs: `./gallery_image/the_morning_show_sm.jpg`
		},
		label: 'the morning show.jpg',
		logo: './gallery_image/the_morning_show_logo.png',
		title: 'Emmy® Award Winner',
		genre: 'Drama',
		caption: 'the news is only half the story'
	},
	{
		url: {
			md: `./gallery_image/mosquito_coast_md.jpg`,
			sm: `./gallery_image/mosquito_coast_md.jpg`,
			xs: `./gallery_image/mosquito_coast_sm.jpg`
		},
		label: 'the mosquito coast',
		logo: './gallery_image/mosquito_coast_logo.png',
		genre: 'Drama',
		title: 'New Release',
		caption: 'How far would you go'
	},
	{
		url: {
			md: `./gallery_image/Trying_md.jpg`,
			sm: `./gallery_image/Trying_md.jpg`,
			xs: `./gallery_image/Trying_sm.jpg`
		},
		label: 'Trying',
		logo: './gallery_image/Trying_logo.png',
		genre: 'Comedy',
		title: 'New Episode Friday',
		caption: 'Messing up life. Together'
	}
];
const FirstGallery = () => {
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = gallery_1.length - 1;
	const handleStepChange = (step) => {
		setActiveStep(step);
	};
	const handleNext = () => {
		if (activeStep < maxSteps) {
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		} else {
			setActiveStep(0);
		}
	};
	const handleBack = () => {
		if (activeStep > 0) {
			setActiveStep((prevActiveStep) => prevActiveStep - 1);
		} else {
			setActiveStep(maxSteps);
		}
	};
	return (
		<>
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

				{gallery_1.map((item) => (
					<FirstGalleryCard key={item.label} item={item} />
				))}
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
					height: { md: '540px', sm: '320px', xs: '494px' },
					width: { xs: 'auto', sm: 'calc(50% - 297px)', md: 'calc(50% - 470px)' }
				}}>
				<IconButton
					onClick={handleBack}
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
					height: { md: '540px', sm: '320px', xs: '494px' },
					width: { xs: 'auto', sm: 'calc(50% - 297px)', md: 'calc(50% - 470px)' }
				}}>
				<IconButton
					onClick={handleNext}
					sx={{
						color: 'currentcolor',
						width: { xs: '18px', md: '46px' },
						p: { xs: '6px 14px' },
						boxSizing: 'content-box'
					}}>
					<ArrowForwardIosIcon />
				</IconButton>
			</Box>
		</>
	);
};

export default FirstGallery;
