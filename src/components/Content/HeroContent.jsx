import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';

import FadeOut from './FadeOut';
const HeroContent = () => {
	return (
		<Box
			sx={{
				position: 'relative',
				top: 0,
				mx: 'auto',
				zIndex: 1,
				pointerEvents: 'none',
				height: '100vh',
				width: { md: '980px', sm: '87.5%', xs: '87.5%' }
			}}>
			<FadeOut end={640}>
				<Box
					sx={{
						position: 'absolute',
						width: { xs: '100%', sm: '100%', md: '90%' },
						maxWidth: { xs: '360px', sm: 'none' },
						left: { xs: 0 },

						bottom: { xs: '77px', sm: '45px', md: '43px' }
					}}>
					<Typography variant='h2' sx={{ color: '#f5f5f7' }}>
						All Apple originals. Only on Apple TV+
					</Typography>
					<Button
						sx={{
							background: 'linear-gradient(#fff, #e5e5e5)',
							color: '#1d1d1f',
							p: '18px 31px',
							borderColor: '#FFF',
							borderRadius: '28px',
							mt: '80px',
							'& .MuiButton-label': {
								fontSize: '17px',
								lineHeight: 1.17648,
								letterSpacing: '-.022em',
								fontWeight: 600,
								textTransform: 'capitalize'
							}
						}}>
						Watch now
					</Button>
					<Box sx={{ width: '100%', height: '45px', mt: '80px' }}>
						<Typography variant='h6' sx={{ color: '#f5f5f7' }}>
							Watch on the{' '}
							<Box
								sx={{
									display: 'inline-block',
									width: '41px',
									height: '41px',
									verticalAlign: 'bottom',
									backgroundImage:
										'url(https://www.apple.com/v/apple-tv-plus/t/images/overview/hero_icon__o324c61iilmm_large.png)',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat'
								}}
								component='span'></Box>{' '}
							app
						</Typography>
					</Box>
				</Box>
			</FadeOut>
		</Box>
	);
};

export default HeroContent;
