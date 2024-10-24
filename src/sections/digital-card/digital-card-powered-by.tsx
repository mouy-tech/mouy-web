import { Box, Button, Typography } from '@mui/material';

import { CONFIG } from 'src/config-global';

import { logo } from './utils';

export function DigitalCardPoweredBy() {
  return (
    <Box
      sx={{
        py: { xs: 1, sm: 1.5 },
        px: 1.5,
        backgroundColor: 'primary.lighter',
        borderRadius: 2,
        width: 1,
        display: 'flex',
        gap: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box component="img" src={logo} sx={{ height: 48, width: 48, borderRadius: 1 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="subtitle2" fontSize={14}>
          Powered by Mouy
        </Typography>
        <Typography variant="body2" fontSize={12} noWrap={false}>
          Seamless way to collect, connect, recal any contacts.
        </Typography>
      </Box>
      <Button
        component="a"
        href={CONFIG.downloadAppUrl}
        variant="contained"
        size="small"
        sx={{
          px: 3,
          borderRadius: 2,
        }}
      >
        INSTALL
      </Button>
    </Box>
  );
}
