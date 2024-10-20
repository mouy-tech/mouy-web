import { Box } from '@mui/material';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export const metadata = { title: `404 page not found! | Error - ${CONFIG.appName}` };

export default function Page() {
  return <Box>Not found</Box>;
}
