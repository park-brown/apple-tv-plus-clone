import React from 'react';
import APPBAR_1 from '../../components/AppBar/APPBAR_1';
import APPBAR_2 from '../../components/AppBar/APPBAR_2';

import APPBAR_3 from '../../components/AppBar/APPBAR_3';
import { Grid } from '@material-ui/core';
const Home = () => {
	return (
		<Grid container>
			<APPBAR_1 />
			<APPBAR_2 />
			<APPBAR_3 />
			<Grid item xs={12} sx={{ minHeight: '200vh', bgcolor: 'red' }}></Grid>
		</Grid>
	);
};

export default Home;
