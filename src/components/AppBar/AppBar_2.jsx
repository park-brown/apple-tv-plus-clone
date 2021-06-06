import React from 'react';
import { AppBar, Toolbar, Typography, Button, useScrollTrigger } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
const APPBAR_2 = () => {
	const theme = useTheme();
	const trigger = useScrollTrigger({
		target: undefined,
		disableHysteresis: true,
		threshold: 48
	});
	console.log('trigger:', trigger);
	return (
		<AppBar
			position='fixed'
			sx={{
				bgcolor: '#222',
				backdropFilter: 'saturate(180%) blur(20px)',
				borderBottom: '1px solid rgba(255,255,255,0.24)',
				top: '48px',
				transition: `${theme.transitions.create(['transform'])}`,
				transform: () => (trigger === true ? 'translateY(-48px)' : '')
			}}>
			<Toolbar
				sx={{
					mx: 'auto',
					width: '100%',
					maxWidth: '960px',
					justifyContent: 'space-between',
					alignItems: 'center',
					minHeight: { md: '48px', sm: '48px', xs: '48px' },
					bgcolor: '#222'
				}}>
				<Typography variant='body1' sx={{ cursor: 'pointer' }}>
					Apple TV+
				</Typography>
				<Button
					sx={{
						background: 'linear-gradient(#fff, #e5e5e5)',
						color: '#1d1d1f',
						p: '4px 11px',
						borderColor: '#fafafc',
						borderRadius: '12px',
						'& .MuiButton-label': {
							fontSize: '12px',
							lineHeight: 1.33337,
							letterSpacing: '-.01em',
							fontWeight: 400,
							textTransform: 'capitalize'
						}
					}}>
					watch now
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default APPBAR_2;
