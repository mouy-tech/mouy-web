import type { IUserSocialMedia } from 'src/types/userProfile';

import { Button } from '@mui/material';

import { SvgColor } from 'src/components/svg-color';

import { socialMediaIcon } from './utils';

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
        maxHeight: 50,
        maxWidth: 50,
        minHeight: 50,
        minWidth: 50,
      }}
      size="medium"
      variant="contained"
    >
      <SvgColor
        src={socialMediaIcon(socialMedia.type)}
        sx={{ width: 28, height: 28 }}
        color="primary.lighter"
      />
    </Button>
  );
}
