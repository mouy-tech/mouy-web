'use client';

import type { Breakpoint } from '@mui/material';
import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

import { CONFIG } from 'src/config-global';

import { layoutClasses } from '../classes';

// ----------------------------------------------------------------------

export function Main({ children, sx, ...other }: BoxProps) {
  const theme = useTheme();
  const layoutQuery: Breakpoint = 'sm';

  return (
    <Box
      bgcolor="primary.main"
      component="main"
      className={layoutClasses.main}
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minWidth: '300px',
          margin: '0 auto',
          minHeight: '100vh',
          [theme.breakpoints.up(layoutQuery)]: {
            maxWidth: '420px',
          },
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url('${CONFIG.assetsDir}/assets/background/background-card.png')`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
