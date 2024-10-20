export type IUserProfile = {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  company: string | null;
  position: string | null;
  imageUrl: string | null;
  email: string | null;
  phoneNumber: string | null;
  secondPhoneNumber: string | null;
}

export type IUserSocialMedia = {
  type: string;
  url: string;
  displayName: string;
}

export type IUserDigitalCard = {
  userProfile: IUserProfile;
  socialMedias: IUserSocialMedia[];
}