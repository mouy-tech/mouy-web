import type { IUserSocialMedia } from 'src/types/userProfile';

import { isEmpty } from 'lodash';

import { Box, Button, Typography } from '@mui/material';

import { Image } from 'src/components/image';

import { defaultProfile } from './utils';
import { DigitalCardSocialMediaBtn } from './digital-card-social-media-btn';

type Props = {
  name: string;
  position: string | null;
  picture: string | null;
  company: string | null;
  socialMedias: IUserSocialMedia[];
};

export function DigitalCardProfile({ name, position, picture, company, socialMedias }: Props) {
  return (
    <Box
      sx={{
        width: 1,
        px: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 2,
          backgroundColor: 'secondary.lighter',
          maxHeight: { xs: '620px', md: 1 },
        }}
      >
        {/* Adjust Image Height Dynamically */}
        <Image
          alt={name}
          src={picture || defaultProfile}
          ratio="1/1"
          sx={{
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
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 24, md: 32 }, // Responsive font size
              textAlign: 'center',
              mb: 1,
            }}
          >
            {name}
          </Typography>

          {!isEmpty(position) && (
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 1 }}>
              {position}
            </Typography>
          )}

          {!isEmpty(company) && (
            <Typography
              variant="body1"
              color="text.primary"
              fontSize={22} // Responsive font size
              sx={{ textAlign: 'center', mb: 1 }}
            >
              {company}
            </Typography>
          )}

          {/* Save Contact Button */}
          {!isEmpty(socialMedias) && (
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{
                fontSize: { xs: 18, md: 20 },
                py: { xs: 1, md: 2 },
                color: 'secondary.lighter',
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
              pt: 2,
              flexWrap: 'wrap', // Allow icons to wrap on smaller screens
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
