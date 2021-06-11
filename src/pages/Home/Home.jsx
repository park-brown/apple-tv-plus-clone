import React from 'react';
import HeroSection from '../../components/Content/HeroSection';
import OfferSection from '../../components/Content/OfferSection';
import { Grid } from '@material-ui/core';
import APPBAR from '../../components/AppBar/APPBAR';
import ShowSection from '../../components/Content/ShowSection';
import AppleTvSection from '../../components/Content/Section/AppleTvSection';
import FAQ from '../../components/Content/Section/FAQ';
import AppleOneSection from '../../components/Content/Section/AppleOneSection';
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
				<AppleOneSection />
				<Grid item sx={{ height: '40vh' }}></Grid>
			</Grid>
		</Grid>
	);
};

export default Home;
