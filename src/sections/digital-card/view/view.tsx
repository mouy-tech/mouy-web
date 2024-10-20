'use client';

import { isEmpty } from 'lodash';

import { Box } from '@mui/material';

import { useGetUserDigitalCard } from 'src/actions/digital-card';

import { SplashScreen } from 'src/components/loading-screen';

import { NotFoundView } from 'src/sections/error';

import { DigitalCardProfile } from '../digital-card-profile';
import { DigitalCardCopyright } from '../digital-card-copyright';
import { DigitalCardPoweredBy } from '../digital-card-powered-by';

type Props = {
  userId: string;
};

export function DigitalCardView({ userId }: Props) {
  const { userDigitalCard, userDigitalCardLoading, userDigitalCardError } =
    useGetUserDigitalCard(userId);

  if (userDigitalCardLoading) {
    return <SplashScreen portal={false} />;
  }

  if (userDigitalCardError || !userDigitalCard || isEmpty(userDigitalCard)) {
    return <NotFoundView />;
  }

  // Render content
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '100vh',
        p: 2,
        gap: 2,
        width: '100%',
      }}
    >
      <DigitalCardCopyright />
      <DigitalCardProfile
        name={userDigitalCard?.userProfile.displayName || ''}
        company={userDigitalCard?.userProfile.company || null}
        position={userDigitalCard?.userProfile.position || null}
        picture={userDigitalCard?.userProfile.imageUrl || null}
        socialMedias={userDigitalCard?.socialMedias || []}
      />
      <DigitalCardPoweredBy />
    </Box>
  );
}
