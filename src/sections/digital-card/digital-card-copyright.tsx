import { Box, Typography } from '@mui/material';

import { CONFIG } from 'src/config-global';

export function DigitalCardCopyright() {
  return (
    <Box
      component="a"
      href={CONFIG.downloadAppUrl}
      sx={{
        py: 1,
        px: 2,
        backgroundColor: 'common.black',
        borderRadius: 4,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: 'common.white',
          textAlign: 'center',
        }}
      >
        Created with Mouy
      </Typography>
    </Box>
  );
}
