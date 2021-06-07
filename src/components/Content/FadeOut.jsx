import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useScroll } from './useScroll';
import { Box } from '@material-ui/core';
const FadeOut = (props) => {
	const { children, end } = props;
	const scrollY = useScroll();
	const theme = useTheme();
	const setOpacity = () => {
		if (scrollY > end) {
			return 0;
		} else {
			return Number(0.99 - scrollY / end).toFixed(4);
		}
	};
	const opacity = setOpacity();
	return <Box sx={{ opacity: `${opacity}`, transition: `${theme.transitions.create(['opacity'])}` }}>{children}</Box>;
};

export default FadeOut;
