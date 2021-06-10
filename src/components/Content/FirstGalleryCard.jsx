import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
const FirstGalleryCard = ({ item }) => {
	const { url, logo, title, genre, caption } = item;
	return (
		<Box sx={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}>
			{/*Background image */}
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					height: '100%',
					width: '100%',
					borderRadius: { xs: '24px', sm: '20px', md: '18px' },
					backgroundImage: {
						md: `url(${url.md})`,
						sm: `url(${url.sm})`,
						xs: `url(${url.xs})`
					},
					backgroundPosition: 'center top',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					'&::after': {
						position: 'absolute',
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						content: '""',
						background: 'rgba(0,0,0,0.35)'
					}
				}}></Box>
			{/*Background gradient */}
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: '-5%',
					width: '110%',
					height: '100%',
					display: { xs: 'block', sm: 'none', md: 'none' },
					background: 'linear-gradient(transparent 50%, rgba(0,0,0,0.7))'
				}}></Box>
			{/*Info Top */}
			<Box
				sx={{
					position: 'absolute',
					top: { xs: '23px', sm: '40px', md: '40px' },
					left: { xs: '50%', sm: '40px', md: '40px' },
					width: '100%',
					height: { xs: '82px', md: 'auto' },
					maxWidth: '270px',
					transform: { xs: 'translateX(-50%)', sm: 'none' },
					textAlign: { xs: 'center', sm: 'left', md: 'left' }
				}}>
				<Typography
					variant='h6'
					sx={{
						fontSize: { xs: '14px', sm: '14px', md: '17px' },
						lineHeight: { xs: 1.42859, sm: 1.47059, md: 1.47059 },
						fontWeight: 600,
						letterSpacing: { xs: '-.016em', sm: '-.016em', md: '-.022em' },
						color: '#fff'
					}}>
					{title}
				</Typography>
				{/*Logo */}
				<Box
					sx={{
						maskImage: `url(${logo})`,
						maskSize: { xs: 'contain' },
						maskRepeat: 'no-repeat',
						maskPosition: { xs: 'top center', sm: 'top left' },
						backgroundColor: '#fff',
						width: { xs: '200px', sm: '250px' },
						height: { xs: '50px', sm: '62px' },
						m: { xs: '12px auto 0', sm: '12px 0px 0px 0px' }
					}}></Box>
			</Box>
			{/*Info Bottom */}
			<Box
				sx={{
					position: 'absolute',
					left: { xs: 0, sm: '40px' },
					bottom: { xs: '23px', sm: '30px' },
					width: { xs: '100%', sm: '475px', md: '820px' },
					height: { xs: '124px', sm: '44px', md: '44px' },
					textAlign: 'center',
					fontWeight: { xs: 400 },
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row', md: 'row' },
					justifyContent: 'space-between',
					alignItems: 'center'
				}}>
				{/*text box */}
				<Box
					sx={{
						fontWeight: 400,
						fontSize: { xs: '16px', sm: '14px', md: '14px' },
						lineHeight: { xs: 1.4375, sm: 1.42859, md: 1.42859 },
						letterSpacing: { xs: '-.022em', sm: '-.016em ', md: '-.016em ' },
						color: '#fff',
						textAlign: { xs: 'center', sm: 'left', md: 'left' }
					}}>
					{/*genre */}
					<Typography
						sx={{
							fontWeight: 700,
							fontSize: { xs: '16px', sm: '14px', md: '14px' },
							lineHeight: { xs: 1.4375, sm: 1.42859, md: 1.42859 },
							letterSpacing: { xs: '-.022em', sm: '-.016em ', md: '-.016em ' },
							color: '#fff',
							display: { xs: 'block', sm: 'inline' }
						}}
						variant='body1'
						component='span'>
						{genre}
					</Typography>
					{/*mid dot */}
					<Box
						component='span'
						sx={{
							fontWeight: 700,
							fontSize: { sm: '14px', md: '14px' },
							lineHeight: { sm: 1.42859, md: 1.42859 },
							letterSpacing: { sm: '-.016em' },
							color: '#fff',
							display: { xs: 'none', sm: 'inline' },
							mx: { sm: '6px', md: '8px' }
						}}>
						·
					</Box>
					{/*caption */}
					<Typography
						variant='body1'
						component='span'
						sx={{
							fontWeight: 400,
							fontSize: { xs: '16px', sm: '14px', md: '14px' },
							lineHeight: { xs: 1.4375, sm: 1.42859, md: 1.42859 },
							letterSpacing: { xs: '-.022em', sm: '-.016em ', md: '-.016em ' },
							color: '#fff',
							display: { xs: 'block', sm: 'inline' }
						}}>
						{caption}
					</Typography>
				</Box>
				<Button
					endIcon={<PlayCircleOutlineIcon />}
					sx={{
						boxSizing: 'content-box',
						flexShrink: 0,
						py: '12px',
						px: '22px',
						width: '99px',
						height: '20px',
						color: '#fff',
						backgroundColor: '#1d1d1f',
						border: 'none',
						borderRadius: '22px',
						// fontSize: { xs: '14px', sm: '14px', md: '14px' },
						// lineHeight: 1.42859,
						// fontWeight: 700,
						// letterSpacing: '-.016em',
						// textTransform: 'capitalize',
						'& .MuiButton-label': {
							fontSize: { xs: '14px', sm: '14px', md: '14px' },
							lineHeight: 1.42859,
							fontWeight: 700,
							letterSpacing: '-.016em',
							textTransform: 'capitalize'
						},
						'&:hover, &:active': {
							backgroundColor: '#000',
							color: '#fff'
						}
					}}>
					watch now
				</Button>
			</Box>
		</Box>
	);
};

export default FirstGalleryCard;
