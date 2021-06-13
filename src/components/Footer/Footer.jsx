import React from 'react';
import { Grid, Box, Breadcrumbs, Link, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { styled } from '@material-ui/system';
import AppleDirectoryForLaptop from './AppleDirectoryForLaptop';
import AppleDirectoryForTablet from './AppleDirectoryForTablet';
const Container = styled(Grid, { name: 'footer' })(({ theme }) => ({
	backgroundColor: '#1d1d1f',
	color: '#f5f5f7',
	width: '100%',
	minWidth: '320px',
	height: 'auto',
	fontSize: '12px',
	fontFamily: `"SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron","Helvetica Neue","Helvetica","Arial",sans-serif`,
	lineHeight: 1.33337,
	fontWeight: 400,
	letterSpacing: '-.01em',
	position: 'relative',
	zIndex: 1,
	overflow: 'hidden',
	[theme.breakpoints.up('laptop')]: {
		minWidth: '1024px'
	}
}));
const Content = styled(Box, { name: 'content-container' })(({ theme }) => ({
	padding: '0 16px',
	height: '100%',
	[theme.breakpoints.up('tablet')]: {
		padding: '0 22px'
	},
	[theme.breakpoints.up('md')]: {
		maxWidth: '1024px',
		margin: '0 auto'
	}
}));

const Header = styled(Box, { name: 'header' })(({ theme }) => ({
	color: '#6e6e73',
	borderBottom: '1px solid #424245',
	borderColor: '#424245',
	padding: '17px 0 11px 14.375px',
	width: '100%',
	height: 'auto'
}));
const FootNote = styled('p', { name: 'foot-note' })(({ theme }) => ({
	paddingBottom: '0.8rem',
	margin: 0,
	position: 'relative',
	'& .foot-note-marker': {
		position: 'absolute',
		content: '"1. "',
		top: 0,
		left: '-14.375px',
		width: '14.375px',
		height: '16px',
		textAlign: 'center'
	}
}));
const CustomBreadCrumbs = styled(Breadcrumbs, { name: 'custom-breadcrumbs' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		padding: '17px 0',

		color: '#a1a1a6',

		fontSize: '12px'
	}
}));
const HomeIcon = styled('span', { name: 'home-icon' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		width: '14px',
		height: '18px',
		backgroundImage:
			'url(https://www.apple.com/ac/globalfooter/6/en_US/assets/ac-footer/breadcrumbs/apple/icon_dark_large.svg)',
		backgroundRepeat: 'no-repeat',
		display: 'block',
		color: 'transparent',
		backgroundSize: 'cover',
		backgroundPositionY: '-38px'
	},
	[theme.breakpoints.up('tablet')]: {
		backgroundPositionY: '-36px'
	}
}));
const AppleDirectoryContainer = styled(Box, { name: 'apple-directory-container' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		width: '100%',
		height: 'auto', //test purpose
		display: 'flex',
		flexDirection: 'column'
	},
	[theme.breakpoints.up('md')]: {
		flexDirection: 'row'
	}
}));
export const AppleDirectoryColumn = styled(Box, { name: 'directory-column' })(({ theme }) => ({
	flexBasis: '20%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	height: '100%'
}));
export const ColumnTitle = styled('p', { name: 'column-title' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		fontWeight: 600,
		width: '100%',
		marginBottom: '9.6px',
		marginTop: '0px'
	}
}));

const FooterTheEnd = styled(Box, { name: 'footer-the-end' })(({ theme }) => ({
	width: '100%',
	height: 'auto',
	padding: '17px 0px 19px 0px',
	[theme.breakpoints.up('md')]: {
		padding: '34px 0px 21px'
	}
}));

const Footer = () => {
	const breadcrumbs = [
		<Link key='1' color='inherit' href='/'>
			<HomeIcon />
		</Link>,
		<Link key='2' color='inherit' href='/'>
			Tv
		</Link>,
		<Link key='3' color='inherit'>
			Apple TV+
		</Link>
	];
	const theme = useTheme();
	const below_960 = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Container component='footer'>
			<Content>
				<Header>
					<FootNote>
						<small className='foot-note-marker'>*</small>
						The Apple One free trial includes only services that you are not currently using through a free trial or a
						subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.
					</FootNote>
					<FootNote>
						<small className='foot-note-marker'>1.</small>
						$4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after
						eligible device activation. Plan automatically renews until cancelled. Restrictions and other
					</FootNote>
					<FootNote>
						<small className='foot-note-marker'>2.</small>One subscription per Family Sharing group. Plan automatically
						renews until cancelled.
					</FootNote>
					<FootNote>
						<small className='foot-note-marker'>3.</small>
						Limited-time offer; offer may end at any time. Free Apple TV+ access for students ends when you no longer
						qualify or do not renew your Apple Music Student subscription. Offer good for verified college students only
						and does not extend to a Family Sharing group.
					</FootNote>
				</Header>
				<CustomBreadCrumbs separator='›' aria-label='breadcrumb'>
					{breadcrumbs}
				</CustomBreadCrumbs>
				<AppleDirectoryContainer>
					{below_960 ? <AppleDirectoryForTablet /> : <AppleDirectoryForLaptop />}
				</AppleDirectoryContainer>
				<FooterTheEnd sx={{ position: 'relative' }}>
					<Box
						sx={{
							borderBottom: { sm: '1px solid #424245' },
							display: 'flex',
							color: '#a1a1a6',
							gap: '4px',
							flexWrap: 'wrap'
						}}>
						<FootNote>More ways to shop: </FootNote>
						<FootNote sx={{ color: '#2997ff' }}>Find an Apple Store</FootNote>
						or
						<FootNote sx={{ color: '#2997ff' }}>Find an Apple Store</FootNote>
						<FootNote>near you. Or call 1-800-MY-APPLE.</FootNote>
					</Box>
					{/*locale */}
					<Box
						sx={{
							color: '#a1a1a6',
							position: 'absolute',
							minWidth: '30px',

							top: { xs: '28%', sm: '50%' },
							left: { xs: 0, sm: '85%' }
						}}>
						<FootNote sx={{ p: 0 }}>United States</FootNote>
					</Box>
					{/*legal */}
					<Box sx={{ color: '#a1a1a6', pt: '0.8rem' }}>
						<FootNote>Copyright © 2021 Apple Inc. All rights reserved.</FootNote>
						{/*legal links */}
						<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
							<FootNote
								sx={{
									pr: '10px',
									pb: '0px',
									height: 'fit-content',
									borderRight: '1px solid #424245',
									marginRight: '10px'
								}}>
								Privacy Policy
							</FootNote>
							<FootNote
								sx={{
									pr: '10px',
									pb: '0px',
									height: 'fit-content',
									borderRight: '1px solid #424245',
									marginRight: '10px'
								}}>
								Terms of Use
							</FootNote>
							<FootNote
								sx={{
									pr: '10px',
									pb: '0px',
									height: 'fit-content',
									borderRight: '1px solid #424245',
									marginRight: '10px'
								}}>
								sales and refunds
							</FootNote>
							<FootNote
								sx={{
									pr: '10px',
									pb: '0px',
									height: 'fit-content',
									borderRight: '1px solid #424245',
									marginRight: '10px'
								}}>
								Legal
							</FootNote>
							<FootNote>Site Maps</FootNote>
						</Box>
					</Box>
				</FooterTheEnd>
			</Content>
		</Container>
	);
};

export default Footer;
