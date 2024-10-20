'use client';

import { CONFIG } from 'src/config-global';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

export const metadata = { title: `404 page not found! | Error - ${CONFIG.appName}` };

export default function Page() {
  return <SplashScreen portal={false} />;
}
