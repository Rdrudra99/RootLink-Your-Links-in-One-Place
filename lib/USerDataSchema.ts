interface BalaData {
  profile: {
    username: string;
    description: string;
    profileImage: string;
  };
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    github: string;
    telegram: string;
    linkedin: string;
    email: string;
    youtube: string;
    whatsapp: string;
  };
  links: Array<{
    icon: string;
    label: string;
    url: string;
  }>;
}

export default BalaData;
