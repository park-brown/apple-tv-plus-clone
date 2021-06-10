import React from 'react';
import { Grid, Box } from '@material-ui/core';

import FirstGallery from './FirstGallery';

const ShowSection = () => {
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
				<FirstGallery />
			</Grid>
		</Grid>
	);
};

export default ShowSection;
