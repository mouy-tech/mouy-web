import { CONFIG } from "src/config-global";

export enum SocialMediaType {
  TELEGRAM = 'telegram',
  TWITTER = 'twitter',
  X = 'x',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedin',
  YOUTUBE = 'youtube',
  WHATSAPP = 'whatsapp',
  GITHUB = 'github',
  SLACK = 'slack',
  TIKTOK = 'tiktok',
  THREADS = 'threads',
  DISCORD = 'discord',
  CONTACT = 'contact',
  MESSENGER = 'messenger',
  MAIL = 'mail',
  VIBER = 'viber',
  MEDIUM = 'medium',
  WWW = 'www',
  KAKAO = 'kakao',
  LINE = 'line',
  MOUY = 'mouy',
}

const iconUrl = (icon: string) => `${CONFIG.assetsDir}/assets/icons/socials/ic-${icon}.svg`;

export const socialMediaIcon = (type: string) => {

  try {

    const typeEnum = getSocialMediaType(type);

    return typeEnum ? iconUrl(typeEnum) : iconUrl(SocialMediaType.WWW);
  } catch (error) {
    return iconUrl(SocialMediaType.WWW);
  }
}

export const defaultProfile = `${CONFIG.assetsDir}/assets/background/placeholder.png`;

export const logo = `${CONFIG.assetsDir}/logo/logo-single.png`;

export function getSocialMediaType(type: string): SocialMediaType | undefined {
  // Convert the input string to lowercase to handle case-insensitive matching
  const normalizedType = type.toLowerCase();

  // Check if the normalized string matches any of the enum values
  const socialMediaType = Object.values(SocialMediaType).find(
    (value) => value.toLowerCase() === normalizedType
  );

  return socialMediaType as SocialMediaType | undefined;
}