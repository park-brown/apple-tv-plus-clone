import React from 'react';
import HeroSection from '../../components/Content/HeroSection';
import OfferSection from '../../components/Content/OfferSection';
import { Grid } from '@material-ui/core';
import APPBAR from '../../components/AppBar/APPBAR';
import ShowSection from '../../components/Content/ShowSection';
import AppleTvSection from '../../components/Content/Section/AppleTvSection';
import FAQ from '../../components/Content/Section/FAQ';
const Home = () => {
	return (
		<Grid container>
			<APPBAR />
			<Grid container item component='main' xs={12} sx={{ height: 'auto' }}>
				<HeroSection />
				<OfferSection />
				<ShowSection />
				<AppleTvSection />
				<FAQ />
			</Grid>
		</Grid>
	);
};

export default Home;
