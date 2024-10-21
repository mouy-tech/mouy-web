import { Box, Typography } from '@mui/material';

export function DigitalCardCopyright() {
  return (
    <Box
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
