import React from 'react';
import { Grid, Box, Typography, Link, Button } from '@material-ui/core';
import { styled } from '@material-ui/system';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconBox from './IconBox';
const AppleTv = styled(Grid, {
	name: 'apple-Tv-section'
})(({ theme }) => ({
	position: 'relative',
	zIndex: 3,
	height: 'auto',
	color: '#1d1d1f',
	backgroundColor: '#fff',
	paddingBottom: '30px',
	[theme.breakpoints.up('md')]: {
		paddingBottom: '150px'
	}
}));
const Content = styled(Box, {
	name: 'section-content'
})(({ theme }) => ({
	position: 'relative',
	marginLeft: 'auto',
	marginRight: 'auto',
	width: '87.5%',
	height: '100%',
	[theme.breakpoints.up('sm')]: {
		width: '580px'
	},
	[theme.breakpoints.up('md')]: {
		width: '980px'
	}
}));
const TextContainer = styled(Box, {
	name: 'text-container'
})(({ theme }) => ({
	paddingTop: '103px',
	paddingBottom: '32px',
	textAlign: 'center',
	margin: '0px auto',
	width: '100%',
	height: '420px',
	[theme.breakpoints.up('sm')]: {
		width: '580px'
	},
	[theme.breakpoints.up('md')]: {
		width: '980px',
		height: 'auto'
	}
}));

const DeviceIconContainer = styled(Box, {
	name: 'device-icon-container'
})(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	marginBottom: '38px',
	justifyContent: 'flex-start',
	height: 'auto',
	width: '100%',
	gap: '20px',
	[theme.breakpoints.up('sm')]: {
		width: '580px',
		justifyContent: 'space-between',
		height: 'auto',
		gap: null
	},
	[theme.breakpoints.up('md')]: {
		width: '980px',
		height: '142px',
		marginBottom: '60px',
		gap: null
	}
}));

const SecondDeviceContainer = styled(Box, {
	name: 'second-device-icon-container'
})(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	marginBottom: '62px',
	marginTop: '42px',
	justifyContent: 'space-between',
	height: '165px',
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		width: '580px',
		justifyContent: 'space-between',
		height: '202px',
		marginBottom: '58px'
	},
	[theme.breakpoints.up('md')]: {
		width: '980px',
		height: '278px',
		marginBottom: '0px'
	}
}));
const AppleTvAppIcon = styled('figure', {
	name: 'apple-tv-app-icon'
})(({ theme }) => ({
	backgroundImage: 'url(./icon_image/apple_tv_app_icon_small_2x.png)',
	width: '57px',
	height: '57px',
	backgroundSize: '57px 57px',
	backgroundRepeat: 'no-repeat',
	margin: '0 auto 17px',
	[theme.breakpoints.up('sm')]: {
		backgroundImage: 'url(./icon_image/apple_tv_app_icon.png)',
		width: '75px',
		height: '75px',
		backgroundSize: '75px 75px'
	}
}));
export const IconWrapper = styled(Box, {
	name: 'icon-wrapper'
})(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '100%',
	height: '100%'
}));
const IconGroup = [
	{
		label: 'Apple-Tv',
		url: {
			xs: './icon_image/icon_apple_tv_small_2x.jpg',
			sm: './icon_image/icon_apple_tv_medium_2x.jpg',
			md: './icon_image/icon_apple_tv_large_2x.jpg'
		}
	},
	{
		label: 'iPhone',
		url: {
			xs: './icon_image/icon_iphone_small_2x.jpg',
			sm: './icon_image/icon_iphone_medium_2x.jpg',
			md: './icon_image/icon_iphone_large_2x.jpg'
		}
	},
	{
		label: 'iPad',
		url: {
			xs: './icon_image/icon_ipad_small_2x.jpg',
			sm: './icon_image/icon_ipad_medium_2x.jpg',
			md: './icon_image/icon_ipad_large_2x.jpg'
		}
	},
	{
		label: 'Mac',
		url: {
			xs: './icon_image/icon_mac_small_2x.jpg',
			sm: './icon_image/icon_mac_medium_2x.jpg',
			md: './icon_image/icon_mac_large_2x.jpg'
		}
	},
	{
		label: 'AirPlay',
		url: {
			xs: './icon_image/icon_airplay_small_2x.jpg',
			sm: './icon_image/icon_airplay_medium_2x.jpg',
			md: './icon_image/icon_airplay_large_2x.jpg'
		}
	}
];
const IconGroupTwo = [
	{
		label: 'Streaming Devices',
		url: {
			xs: './icon_image/icon_streaming_devices_small_2x.jpg',
			sm: './icon_image/icon_streaming_devices__medium_2x.jpg',
			md: './icon_image/icon_streaming_devices_large_2x.jpg'
		},
		paragraph: [{ text: 'Roku' }, { text: 'Amazon Fire Tv' }, { text: 'Google TV' }]
	},
	{
		label: 'Smart TVs',
		url: {
			xs: './icon_image/icon_smart_tvs_small_2x.jpg',
			sm: './icon_image/icon_smart_tvs_medium_2x.jpg',
			md: './icon_image/icon_smart_tvs_large_2x.jpg'
		},
		paragraph: [{ text: 'Samsung' }, { text: 'LG' }, { text: 'Vizio' }, { text: 'Sony' }]
	},
	{
		label: 'Gaming Consoles',
		url: {
			xs: './icon_image/icon_gaming_consoles_small_2x.jpg',
			sm: './icon_image/icon_gaming_consoles_medium_2x.jpg',
			md: './icon_image/icon_gaming_consoles_large_2x.jpg'
		},
		paragraph: [{ text: 'PlayStaion' }, { text: 'Xbox' }]
	}
];
const AppleTvSection = () => {
	return (
		<AppleTv container component='section'>
			<Content>
				<TextContainer>
					<AppleTvAppIcon />
					<Box>
						<Typography
							variant='h6'
							sx={{
								fontSize: { xs: '28px', sm: '40px', md: '72px' },
								fontWeight: 700,
								lineHeight: { xs: 1.28583, sm: 1.1, md: 1.05556 },
								letterSpacing: { xs: '.007em', sm: '0rem', md: '-.012em' }
							}}>
							Watch Apple TV+ anywhere <br /> on the Apple TV app.
						</Typography>
						<Typography
							variant='body2'
							sx={{
								mt: { xs: '12px', sm: '14px', md: '20px' },
								mb: { xs: '17px', sm: '24px', md: '18px' }
							}}>
							Find the Apple TV app everywhere from Apple devices to smart TVs. Or watch online at{' '}
							<Link component='a' sx={{ display: 'inline', color: '#06c' }}>
								tv.apple.com
							</Link>
						</Typography>
					</Box>
				</TextContainer>
				<DeviceIconContainer>
					{IconGroup.map((item) => (
						<IconBox item={item} key={item.label} />
					))}
				</DeviceIconContainer>
				<Box
					sx={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Typography
						sx={{
							fontSize: { xs: '28px', md: '40px' },
							fontWeight: { xs: 600 },
							lineHeight: { xs: 1.14286, md: 1.1 },
							letterSpacing: { xs: '.007em', md: '0em' }
						}}>
						See it on your big screen.
					</Typography>
					<Button endIcon={<ArrowForwardIosIcon />} sx={{ mt: '14px', color: '#06c', textTransform: 'capitalize' }}>
						Set up your device
					</Button>
					<Button endIcon={<ArrowForwardIosIcon />} sx={{ color: '#06c', textTransform: 'capitalize' }}>
						Explore compatible devices
					</Button>
				</Box>
				<SecondDeviceContainer>
					{IconGroupTwo.map((item) => (
						<Box key={item.label}>
							<IconBox item={item} />
							{item.paragraph.map((p) => {
								return (
									<Typography
										sx={{
											color: '#6e6e73',
											textAlign: 'center',
											fontWeight: 400,
											mt: { xs: '0px', sm: '4px' },
											fontSize: { xs: '14px', sm: '14px', md: '24px' },
											lineHeight: { xs: 1.42859, md: 1.23536 },
											letterSpacing: { xs: '-.016em', md: '-.022em' }
										}}>
										{p.text}
									</Typography>
								);
							})}
						</Box>
					))}
				</SecondDeviceContainer>
			</Content>
		</AppleTv>
	);
};

export default AppleTvSection;
