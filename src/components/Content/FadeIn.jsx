import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useScroll } from './useScroll';
import { Box } from '@material-ui/core';
const FadeIn = (props) => {
	const { children, end, start, delay } = props;
	const scrollY = useScroll();
	const theme = useTheme();
	const setOpacity = () => {
		if (scrollY < start) {
			return 0.001;
		}
		if (scrollY > end) {
			return 1;
		} else {
			return Number(scrollY / end).toFixed(4);
		}
	};
	const opacity = setOpacity();
	return (
		<Box
			sx={{
				opacity: `${opacity}`,
				transition: `${theme.transitions.create(['opacity'], { delay: delay })}`
			}}>
			{children}
		</Box>
	);
};

export default FadeIn;
