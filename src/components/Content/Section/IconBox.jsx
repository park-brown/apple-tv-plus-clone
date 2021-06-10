import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { IconWrapper } from './AppleTvSection';
const IconBox = ({ item }) => {
	const { label, url } = item;
	return (
		<Box sx={{ mb: { xs: '33px', sm: '10px', md: '20px' } }}>
			<IconWrapper>
				<Box
					sx={{
						backgroundImage: {
							xs: `url(${url.xs})`,
							sm: `url(${url.sm})`,
							md: `url(${url.md})`
						},
						width: { xs: '85px', sm: '105px', md: '133px' },
						height: { xs: '51px', sm: '63px', md: '81px' },
						backgroundSize: { xs: '85px 51px', sm: '105px 63px', md: '133px 81px' },
						backgroundRepeat: 'no-repeat'
					}}></Box>
				<Typography
					sx={{
						mt: { xs: '6px', sm: '13px', md: '13px' },
						fontSize: { xs: '14px', sm: '17px', md: '24px' },
						fontWeight: { xs: 500, sm: 600, md: 600 },
						lineHeight: { xs: 1.42859, sm: 1.23536, md: 1.16667 },
						letterSpacing: { xs: '-.016em', sm: '-.022em', md: '.009em' },
						fontFamily: '"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif'
					}}>
					{label}
				</Typography>
			</IconWrapper>
		</Box>
	);
};

export default IconBox;
