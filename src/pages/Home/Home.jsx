import React from 'react';
import ContentOne from '../../components/Content/ContentOne';
import { Grid } from '@material-ui/core';
import APPBAR from '../../components/AppBar/APPBAR';
const Home = () => {
	return (
		<Grid container sx={{}}>
			<APPBAR />
			<ContentOne />
		</Grid>
	);
};

export default Home;
