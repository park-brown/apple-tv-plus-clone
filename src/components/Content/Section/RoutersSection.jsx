import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { display, styled } from '@material-ui/system';
import { SectionButton } from './AppleOneSection';
const Section = styled(Grid, { name: 'section-routers' })(({ theme }) => ({
	position: 'relative',
	overflow: 'hidden',
	backgroundColor: '#fff',
	color: '#1d1d1f',
	height: '100vh',
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
			</SectionContent>
		</Section>
	);
};

export default RoutersSection;
