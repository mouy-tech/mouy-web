import type { IUserSocialMedia } from 'src/types/userProfile';

import { Button } from '@mui/material';

import { SvgColor } from 'src/components/svg-color';

import { socialMediaIcon, SocialMediaType } from './utils';

type IProps = {
  socialMedia: IUserSocialMedia;
};

export function DigitalCardSocialMediaBtn({ socialMedia }: IProps) {
  return (
    <Button
      component="a"
      href={socialMedia.url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        py: '16px !important',
      }}
      variant="contained"
      size="medium"
    >
      <SvgColor
        src={socialMediaIcon(SocialMediaType.MOUY)}
        sx={{ width: 32, height: 32 }}
        color="secondary.lighter"
      />
    </Button>
  );
}
