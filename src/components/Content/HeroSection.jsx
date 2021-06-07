import React from 'react';
import { Grid } from '@material-ui/core';

import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
const HeroSection = () => {
	return (
		<Grid container component='section' sx={{ position: 'relative', zIndex: 3, height: '100vh' }}>
			{/*Hero background */}
			<HeroBackground />

			{/*Text container */}
			<HeroContent />
		</Grid>
	);
};

export default HeroSection;
