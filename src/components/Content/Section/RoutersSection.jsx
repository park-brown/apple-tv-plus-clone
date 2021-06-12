import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/system';
import { SectionButton } from './AppleOneSection';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const Section = styled(Grid, { name: 'section-routers' })(({ theme }) => ({
	position: 'relative',
	overflow: 'hidden',
	backgroundColor: '#fff',
	color: '#1d1d1f',
	height: 'auto',
	width: '100%',
	[theme.breakpoints.up('tablet')]: {
		paddingTop: '24px'
	},
	[theme.breakpoints.up('md')]: {
		paddingTop: '39px'
	}
}));
const SectionContent = styled(Box, { name: 'section-content' })(({ theme }) => ({
	width: '100%',
	height: '100%',
	[theme.breakpoints.up('tablet')]: {
		width: '97%',
		margin: '0 auto'
	}
}));
const StudentPlanRouter = styled(Box, { name: 'student-plan-router' })(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	height: 'auto',
	maxWidth: '100%',
	width: '100%',
	position: 'relative',
	top: 0,
	backgroundColor: '#f5f5f7',
	[theme.breakpoints.up('tablet')]: {
		height: '345px',
		maxWidth: '733px',
		margin: '0 auto'
	},
	[theme.breakpoints.up('laptop')]: {
		height: '530px',
		maxWidth: '1360px'
	}
}));
const Row = styled(Box, { name: 'row' })(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	width: '100%',
	height: '500px',
	[theme.breakpoints.up('tablet')]: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		height: '100%'
	},
	[theme.breakpoints.up('laptop')]: {
		paddingTop: '108px'
	}
}));
const TextContainer = styled(Box, { name: 'text-container' })(({ theme }) => ({
	margin: '35px auto 0px',
	textAlign: 'center',
	width: '100%',
	maxWidth: '535px',
	height: 'auto',

	[theme.breakpoints.up('tablet')]: {
		margin: '69px 20px 0px 8.3333%',
		flexBasis: '33.3333%',
		height: 'auto',
		textAlign: 'left'
	},
	[theme.breakpoints.up('laptop')]: {
		margin: '0px 20px 0px 8.3333%',
		flexBasis: '41.66667%',
		textAlign: 'left'
	}
}));
const ImageWrapper = styled(Box, { name: 'image-wrapper' })(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'flex-end',
	width: '100%',
	flexGrow: 1,
	[theme.breakpoints.up('tablet')]: {
		flexBasis: '58.33333%',
		maxWidth: '58.33333%'
	},
	[theme.breakpoints.up('laptop')]: {
		flexBasis: '50%',
		maxWidth: '50%'
	}
}));
export const BreakLine = styled('br', {
	// Configure which props should be forwarded on DOM   xs === true ? 'block' : 'none'
	shouldForwardProp: (prop) => prop
})(({ xs = false, sm = false, tablet = false, md = false, laptop = false, theme }) => ({
	display: `${xs === true ? 'block' : 'none'}`,
	[theme.breakpoints.up('sm')]: {
		display: `${sm === true ? 'block' : 'none'}`
	},
	[theme.breakpoints.up('tablet')]: {
		display: `${tablet === true ? 'block' : 'none'}`
	},
	[theme.breakpoints.up('md')]: {
		display: `${md === true ? 'block' : 'none'}`
	},
	[theme.breakpoints.up('laptop')]: {
		display: `${laptop === true ? 'block' : 'none'}`
	}
}));
const StudentPlanImage = styled('figure', { name: 'student-plan-image' })(({ theme }) => ({
	margin: '38px 0 0 0',
	height: '254px',
	width: '301px',
	backgroundImage: 'url(./student_plan_image/student_plan_small_2x.jpg)',
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	[theme.breakpoints.up('tablet')]: {
		height: '269px',
		width: '318px',
		backgroundImage: 'url(./student_plan_image/student_plan_large_2x.jpg)',
		marginTop: '0px'
	},
	[theme.breakpoints.up('laptop')]: {
		height: '100%',
		width: '533px',
		backgroundImage: 'url(./student_plan_image/student_plan_large_2x.jpg)'
	}
}));
const LowerContainer = styled(Box, { name: 'lower-container' })(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	margin: '15px auto',
	width: '100%',
	height: '986px',
	position: 'relative',
	justifyContent: 'center',
	[theme.breakpoints.up('tablet')]: {
		margin: '24px auto',
		maxWidth: '733px',
		justifyContent: 'space-between',
		flexDirection: 'row',
		height: '474px'
	},
	[theme.breakpoints.up('laptop')]: {
		margin: '40px auto',
		maxWidth: '1360px',
		height: '879px'
	}
}));
const LowerItems = styled(Box, { name: 'lower-item-box' })(({ theme }) => ({
	width: '100%',
	height: '498px',
	position: 'relative',
	backgroundColor: '#f5f5f7',
	overflow: 'hidden',
	[theme.breakpoints.up('tablet')]: {
		width: '48.5%',
		height: '100%'
	}
}));
const AppleTvRemoteImage = styled('figure', { name: 'image-apple-tv-4k' })(({ theme }) => ({
	position: 'absolute',
	zIndex: 0,
	backgroundImage: 'url(./student_plan_image/apple_tv_4k_remote__small_2x.jpg)',
	width: '289px',
	height: '288px',
	backgroundSize: '289px 288px',
	backgroundRepeat: 'no-repeat',
	left: '50%',
	bottom: 0,
	transform: 'translateX(-50%)',
	margin: 0,

	[theme.breakpoints.up('tablet')]: {
		backgroundImage: 'url(./student_plan_image/apple_tv_4k_remote__medium_2x.jpg)',
		width: '291px',
		height: '287px',
		backgroundSize: '291px 287px'
	},
	[theme.breakpoints.up('laptop')]: {
		backgroundImage: 'url(./student_plan_image/apple_tv_4k_remote___large_2x.jpg)',
		backgroundSize: '539px 532px',
		backgroundPosition: 'center bottom',
		width: '539px',
		height: '532px'
	}
}));
const AppleAirPlayImage = styled('figure', { name: 'appleAirplayImage' })(({ theme }) => ({
	position: 'absolute',
	zIndex: 0,
	backgroundImage: 'url(./student_plan_image/air_play__small_2x.png)',
	width: '287px',
	height: '260px',
	backgroundSize: '287px 260px',
	backgroundRepeat: 'no-repeat',
	left: '60%',
	bottom: 0,
	transform: 'translateX(-50%)',
	margin: 0,

	[theme.breakpoints.up('tablet')]: {
		backgroundImage: 'url(./student_plan_image/air_play__medium_2x.png)',
		width: '356px',
		height: '264px',
		backgroundSize: '356px 264px',
		left: '50%'
	},
	[theme.breakpoints.up('laptop')]: {
		backgroundImage: 'url(./student_plan_image/air_play___large_2x.png)',
		backgroundSize: '633px 478px',
		backgroundPosition: 'center bottom',
		width: '633px',
		height: '478px'
	}
}));
const TitleContainer = styled(Box, { name: 'copy-container' })(({ theme }) => ({
	position: 'absolute',
	top: '47px',
	height: 'auto',
	// height: '180px',
	width: '100%',
	textAlign: 'center',
	paddingTop: '35px', // leave room for Apple Tv logo
	[theme.breakpoints.up('tablet')]: {
		position: 'absolute',
		top: '41px'
	},
	[theme.breakpoints.up('laptop')]: {
		top: '12.7%',
		paddingTop: '49px'
	}
}));
const New = styled(Box, { name: 'new-title' })(({ theme }) => ({
	position: 'absolute',
	top: '-24px',
	fontSize: '12px',
	width: '100%',
	color: '#bf4800',
	textAlign: 'center',
	display: 'block',
	[theme.breakpoints.up('laptop')]: {
		top: '-50px'
	}
}));
const AppleTvLogo = styled('figure', { name: 'apple-tv-logo' })(({ theme }) => ({
	margin: '0 0 14px 0',
	backgroundImage: 'url(./student_plan_image/apple_tv_4k_logo__medium_2x.png)',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	width: '68px',
	height: '21px',
	position: 'absolute',
	top: 0,
	left: '50%',
	transform: 'translateX(-50%)',
	[theme.breakpoints.up('laptop')]: {
		width: '116px',
		height: '35px',
		backgroundImage: 'url(./student_plan_image/apple_tv_4k_logo__large_2x.png)'
	}
}));
const RoutersSection = () => {
	return (
		<Section>
			<SectionContent>
				<StudentPlanRouter>
					<Row>
						<TextContainer>
							<Typography
								sx={{
									width: { xs: '100%', md: 'auto' },
									fontSize: { xs: '27px', tablet: '23px', md: '23px', laptop: '38px', lg: '38px', xl: '45px' },
									lineHeight: { xs: 1.07143, tablet: 1.16667, md: 1.08349, laptop: 1.1 },
									fontWeight: 700,
									letterSpacing: { xs: '.012em', tablet: '.009em', md: '-.003em' },
									mt: { xs: '12px', laptop: '18px' },
									mb: { xs: '13px' }
								}}>
								The Apple Music Student
								<BreakLine xs={true} sm={true} laptop={true} lg={true} /> Plan comes with
								<BreakLine xs={true} sm={true} laptop={true} lg={true} />
								{/*below 733px show breakline */} Apple TV+ for free.
							</Typography>
							<SectionButton sx={{ mb: { xs: 0 }, mt: { xs: '13px' } }}>Try Apple Music free</SectionButton>
						</TextContainer>
						<ImageWrapper>
							<StudentPlanImage />
						</ImageWrapper>
					</Row>
				</StudentPlanRouter>
				<LowerContainer>
					<LowerItems>
						<TitleContainer>
							<New component='span'>New</New>
							<AppleTvLogo />
							<Typography
								sx={{
									fontSize: { xs: '27px', tablet: '23px', md: '23px', laptop: '38px', lg: '38px', xl: '45px' },
									lineHeight: { xs: 1.07143, tablet: 1.16667, md: 1.08349, laptop: 1.1 },
									fontWeight: 700,
									letterSpacing: { xs: '.012em', tablet: '.009em', md: '-.003em' },
									mb: { xs: '12px', tablet: '9px', laptop: '23px' }
								}}>
								A higher definition of TV.
							</Typography>
							<Box sx={{ width: '100%', height: 'auto' }}>
								<Button
									sx={{
										backgroundColor: '#0071e3',
										color: '#fff',
										borderRadius: '18px',
										p: '8px 16px',
										fontSize: { xs: '17px' },
										textTransform: 'capitalize',
										marginRight: '1.5rem',
										'&:hover,&.active': {
											backgroundColor: '#0071e3'
										}
									}}>
									Buy
								</Button>
								<Button
									sx={{
										color: 'info.main',
										textTransform: 'capitalize',
										p: 0,
										fontSize: { xs: '17px' },
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
							</Box>
						</TitleContainer>
						<AppleTvRemoteImage />
					</LowerItems>
					<LowerItems sx={{ mt: { xs: '15px', sm: '15px', tablet: '0', md: '0' } }}>
						<TitleContainer sx={{ pt: { xs: '0px' } }}>
							<Typography variant='body2' sx={{ fontWeight: 700 }}>
								AirPlay
							</Typography>
							<Typography
								sx={{
									fontSize: { xs: '27px', tablet: '23px', md: '23px', laptop: '38px', lg: '38px', xl: '45px' },
									lineHeight: { xs: 1.07143, tablet: 1.16667, md: 1.08349, laptop: 1.1 },
									fontWeight: 700,
									letterSpacing: { xs: '.012em', tablet: '.009em', md: '-.003em' },
									mt: '5px',
									mb: { xs: '12px', tablet: '9px', laptop: '23px' }
								}}>
								Bring Apple TV+ to <BreakLine xs={true} sm={true} tablet={true} md={true} laptop={true} /> a screen near
								you.
							</Typography>
							<Button
								sx={{
									color: 'info.main',
									textTransform: 'capitalize',
									p: 0,
									fontSize: { xs: '17px' },
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
						</TitleContainer>
						<AppleAirPlayImage />
					</LowerItems>
				</LowerContainer>
			</SectionContent>
		</Section>
	);
};

export default RoutersSection;
