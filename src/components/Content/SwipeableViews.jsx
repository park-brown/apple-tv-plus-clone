import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { styled } from '@material-ui/system';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// const VirtualizeSwipeableViews = virtualize(SwipeableViews);
export const CustomSwipeableViews = styled(AutoPlaySwipeableViews, {
	// Configure which props should be forwarded on DOM
	shouldForwardProp: (prop) => prop,
	name: 'custom-swipeable-views'
})(({ theme }) => ({
	width: '278px', // 9 : 16
	height: '494px',
	position: 'relative',
	marginLeft: 'auto',
	marginRight: 'auto',
	zIndex: 2,
	overflow: 'hidden',
	[theme.breakpoints.up('sm')]: {
		height: '320px', // 9: 16
		width: '569px'
	},
	[theme.breakpoints.up('md')]: {
		height: '540px', // 9 : 16
		width: '960px'
	},
	'& .react-swipeable-view-container': {
		display: 'flex',
		width: '278px',
		height: '494px',

		[theme.breakpoints.up('sm')]: {
			height: '320px',
			width: '569px'
		},
		[theme.breakpoints.up('md')]: {
			height: '100%',
			width: '960px'
		}
	},
	'& .react-swipeable-view-slider': {
		'&:first-of-type': {},
		//below 600
		position: 'relative',
		zIndex: 2,
		minWidth: '278px',
		height: '494px',

		opacity: 0.99,
		[theme.breakpoints.up('sm')]: {
			minWidth: '569px',
			height: '320px'
		},
		[theme.breakpoints.up('md')]: {
			minWidth: '960px',
			height: '100%'
		}
	}
}));
