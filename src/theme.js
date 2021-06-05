import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme({
	typography: {
		htmlFontSize: 10,
		fontFamily: ['SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'].join(',')
	}
});

theme = responsiveFontSizes(theme);

export default theme;
