import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
	typography: {
		htmlFontSize: 10,
		fontFamily: ['SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'].join(',')
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			tablet: 733,
			md: 960,
			laptop: 1068,
			lg: 1280,
			xl: 1920
		}
	}
});

theme = responsiveFontSizes(theme);

export default theme;
