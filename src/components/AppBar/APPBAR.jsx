import React from 'react';
import APPBAR_1 from './APPBAR_1';
import APPBAR_2 from './APPBAR_2';
import APPBAR_3 from './APPBAR_3';
// import { Grid, useScrollTrigger, useMediaQuery } from '@material-ui/core';
// import { experimentalStyled as styled, useTheme } from '@material-ui/core/styles';

const APPBAR = () => {
	return (
		<React.Fragment>
			<APPBAR_1 />
			<APPBAR_2 />
			<APPBAR_3 />
		</React.Fragment>
	);
};

export default APPBAR;
