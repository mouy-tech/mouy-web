import type { IUserProfile, IUserSocialMedia } from 'src/types/userProfile';

import { isEmpty } from 'lodash';

import { Box, Button, Typography } from '@mui/material';

import { getImageAsBase64 } from 'src/utils/helper';

import { Image } from 'src/components/image';

import { defaultProfile } from './utils';
import { DigitalCardSocialMediaBtn } from './digital-card-social-media-btn';

type Props = {
  userProfile: IUserProfile;
  socialMedias: IUserSocialMedia[];
};

export function DigitalCardProfile({ userProfile, socialMedias }: Props) {
  const generateVCard = async () => {
    const imageBase64 = await getImageAsBase64(userProfile.imageUrl || defaultProfile);

    const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:${userProfile.displayName.replace(/\s/g, ' ')};;
FN:${userProfile.displayName.replace(/\s/g, ' ')};;
ORG:${userProfile.company?.replace(/\s/g, ' ') || ''};;
TITLE:${userProfile.position?.replace(/\s/g, ' ') || ''};;
TEL;TYPE=CELL:${userProfile.phoneNumber || ''}
TEL;TYPE=CELL:${userProfile.secondPhoneNumber || ''}
EMAIL;type=INTERNET;type=HOME;type=pref:${userProfile.email || ''}
PHOTO;ENCODING=b;TYPE=JPEG:${imageBase64.split(',')[1]}
NOTE:Powered by Mouy
item1.X-ABLabel:_$!<HomePage>!$_
item2.URL:https://c.mouy.one/c/${userProfile.id}
item2.X-ABLabel:My Smart Business Card
END:VCARD`;

    // Create a blob from the vCard data
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);

    // Create a temporary anchor element and trigger a download
    const a = document.createElement('a');
    a.href = url;
    a.download = `${userProfile.displayName}.vcf`;
    a.click();

    // Cleanup the object URL
    window.URL.revokeObjectURL(url);
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        px: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 2,
          backgroundColor: 'primary.lighter',
          maxHeight: { xs: '620px', md: 1 },
        }}
      >
        <Image
          alt={userProfile.displayName}
          src={userProfile?.imageUrl || defaultProfile}
          ratio="1/1"
          visibleByDefault
          sx={{
            pointerEvents: 'none',
            flex: '1 1 auto',
            borderRadius: 2,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 64,
            height: 1,
          }}
        />

        <Box
          sx={{
            py: 2,
            px: { xs: 2, md: 4 },
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 24, md: 32 }, // Responsive font size
              textAlign: 'center',
            }}
          >
            {userProfile.displayName}
          </Typography>

          {!isEmpty(userProfile.position) && (
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
              {userProfile.position}
            </Typography>
          )}

          {!isEmpty(userProfile.company) && (
            <Typography
              variant="body1"
              color="text.primary"
              fontSize={22} // Responsive font size
              sx={{ textAlign: 'center' }}
            >
              {userProfile.company}
            </Typography>
          )}

          {/* Save Contact Button */}
          {(!isEmpty(userProfile.phoneNumber) || !isEmpty(userProfile.secondPhoneNumber)) && (
            <Button
              onClick={generateVCard}
              variant="contained"
              size="large"
              fullWidth
              sx={{
                fontSize: { xs: 18, md: 20 },
                py: { xs: 1, md: 2 },
                color: 'primary.lighter',
              }}
            >
              Save Contact
            </Button>
          )}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {socialMedias.map((socialMedia, index) => (
              <DigitalCardSocialMediaBtn key={index} socialMedia={socialMedia} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
