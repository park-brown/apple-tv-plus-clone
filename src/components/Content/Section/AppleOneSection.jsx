import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/system';
import { BreakLine } from './RoutersSection';
const Section = styled(Grid, {
	name: 'Apple-One-section'
})(({ theme }) => ({
	width: '100%',
	height: 'auto',
	padding: '0 0 15px',
	color: '#1d1d1f',
	backgroundColor: '#fff',
	[theme.breakpoints.up('tablet')]: {
		height: 'auto'
	},
	[theme.breakpoints.up('md')]: {
		padding: '25px 0 0',
		height: 'auto'
	}
}));

const SectionContent = styled(Grid, {
	name: 'section-content'
})(({ theme }) => ({
	width: '100%',
	display: 'flex',
	height: '100%',
	flexDirection: 'column',
	alignItems: 'center',
	backgroundColor: '#f5f5f7',
	[theme.breakpoints.up('tablet')]: {
		width: '97%',
		maxWidth: '733px',
		flexDirection: 'row',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	[theme.breakpoints.up('laptop')]: {
		maxWidth: '1360px'
	}
}));
const FigureWrapper = styled(Box, {
	name: 'figure-wrapper'
})(({ theme }) => ({
	position: 'relative',
	flexBasis: '50%',
	maxWidth: '100%',
	width: '100%',
	display: 'flex',
	order: 2,
	justifyContent: 'center',
	[theme.breakpoints.up('tablet')]: {
		maxWidth: '50%',
		height: '100%',
		alignItems: 'center',
		order: 1
	},
	[theme.breakpoints.up('laptop')]: {
		justifyContent: 'center',
		paddingLeft: '3%',
		height: '100%'
	}
}));
const TileCopyContainer = styled(Box, {
	name: 'tile-copy-container'
})(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	flexBasis: '50%',
	width: '100%',
	maxWidth: '100%',
	order: 1,
	[theme.breakpoints.up('tablet')]: {
		paddingRight: '3%',
		alignItems: 'center',
		maxWidth: '50%',
		height: '100%',
		order: 2
	},
	[theme.breakpoints.up('md')]: {
		paddingRight: '0px',
		alignItems: 'flex-start',
		height: '100%'
	}
}));
const AppleOneImage = styled('figure', { name: 'apple-one-image' })(({ theme }) => ({
	backgroundImage: 'url(./Apple_one_image/apple_one_small_2x.jpg)',
	width: '299px',
	height: '182px',
	backgroundSize: '299px 182px',
	backgroundRepeat: 'no-repeat',
	marginTop: '42px',
	marginLeft: '30px',
	marginBottom: '77px',
	marginRight: '0px',
	[theme.breakpoints.up('tablet')]: {
		backgroundImage: 'url(./Apple_one_image/apple_one_medium_2x.jpg)',
		width: '283px',
		height: '172px',
		backgroundSize: '283px 172px',
		marginTop: '96px',
		marginBottom: '98px',
		marginLeft: '3%',
		minWidth: 'auto'
	},

	[theme.breakpoints.up('laptop')]: {
		backgroundImage: 'url(./Apple_one_image/apple_one_large_2x.jpg)',
		width: '544px',
		height: '330px',
		backgroundSize: '544px 330px',
		marginTop: '126px',
		marginBottom: '128px',
		marginLeft: '6%',
		minWidth: '544px'
	}
}));
const TileCopyWrapper = styled(Box, { name: 'copy-wrapper' })(({ theme }) => ({
	width: 'auto',
	marginTop: '45px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	[theme.breakpoints.up('tablet')]: {
		marginTop: '0px',
		marginLeft: '-14%'
	},
	[theme.breakpoints.up('laptop')]: {
		margin: 0
	}
}));
const TileLogo = styled('h2', { name: 'Apple-one-logo' })(({ theme }) => ({
	backgroundImage: 'url(./Apple_one_image/apple_one_logo_small_2x.png)',
	backgroundSize: '62px 21px',
	margin: 0,
	width: '62px',
	height: '21px',
	backgroundRepeat: 'no-repeat',
	[theme.breakpoints.up('tablet')]: {
		backgroundImage: 'url(./Apple_one_image/apple_one_logo_medium_2x.png)'
	},
	[theme.breakpoints.up('laptop')]: {
		backgroundImage: 'url(./Apple_one_image/apple_one_logo_large_2x.png)',
		backgroundSize: '102px 33px',
		width: '102px',
		height: '33px'
	}
}));

export const SectionButton = styled(Button, { name: 'try-apple-one-free' })(({ theme }) => ({
	marginTop: '16px',
	marginBottom: '29px',
	padding: '12px 22px',
	fontSize: '14px',
	fontWeight: 700,
	lineHeight: 1.42859,
	borderRadius: '22px',
	letterSpacing: '-.016em',
	textTransform: 'capitalize',
	backgroundColor: '#1d1d1f',
	color: '#fff',
	'&:hover': {
		backgroundColor: '#000'
	},
	[theme.breakpoints.up('sm')]: {
		fontSize: '14px'
	},
	[theme.breakpoints.up('tablet')]: {
		fontSize: '14px',
		marginTop: '9px',
		marginBottom: '16px'
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '14px'
	}
}));
const AppleOneSection = () => {
	return (
		<Section>
			<SectionContent>
				<FigureWrapper>
					<AppleOneImage />
				</FigureWrapper>
				<TileCopyContainer>
					<TileCopyWrapper>
						<TileLogo />
						<Typography
							sx={{
								m: {
									xs: '13px 0px 12px 0px',
									md: '13px 0px 13px 0',
									laptop: '27px 0px 13px 0px'
								},
								maxWidth: { xs: '323px' },
								minWidth: { tablet: '345px', laptop: '500px' },
								width: { xs: '100%', tablet: '90%', md: 'auto' },
								textAlign: { xs: 'center' },
								fontSize: { xs: '27px', tablet: '23px', md: '23px', laptop: '38px', lg: '38px', xl: '45px' },
								lineHeight: { xs: 1.07143, tablet: 1.16667, md: 1.08349, laptop: 1.1 },
								fontWeight: 700,
								letterSpacing: { xs: '.012em', tablet: '.009em', md: '-.003em' }
							}}>
							Bundle Apple TV+ <BreakLine xs={true} sm={true} laptop={true} />
							with <BreakLine tablet={true} md={true} /> up to five other
							<BreakLine laptop={true} lg={false} xl={false} /> great services.{' '}
							<BreakLine xs={true} sm={true} laptop={true} lg={false} xl={false} /> And enjoy more for less.
						</Typography>
						<SectionButton>Try Apple One free</SectionButton>
						<Button
							sx={{
								color: 'info.main',
								textTransform: 'capitalize',
								p: 0,
								width: '98px',
								height: '25px',
								fontSize: { xs: '14px' },
								lineHeight: { xs: 1.47059 },
								letterSpacing: { xs: '-.022em' },
								'& .MuiButton-endIcon': {
									marginRight: '0px',
									'& .MuiSvgIcon-root': {
										width: '12px',
										height: '20px'
									}
								}
							}}
							endIcon={<ArrowForwardIosIcon />}>
							learn more
						</Button>
					</TileCopyWrapper>
				</TileCopyContainer>
			</SectionContent>
		</Section>
	);
};

export default AppleOneSection;
