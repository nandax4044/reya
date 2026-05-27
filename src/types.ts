export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badgeText: string;
  badgeStyle: string;
  avatarType: 'nuh_uh' | 'mango' | 'gamer' | 'flaming_f' | 'crocodile' | 'anime_chibi' | 'weaver';
  avatarUrl?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconType: 'locks' | 'gems' | 'cheats' | 'custom';
}

export interface HowToPlayStep {
  num: number;
  title: string;
  desc: string;
  hasAction?: boolean;
  actionType?: 'copy' | 'download_host' | 'download_tun' | 'code_terminal' | 'none';
  actionData?: string;
}

export interface FeaturedProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  gemsPrice?: string;
  imageUrl: string;
  badge?: string;
}

export interface EditableContent {
  hero: {
    bannerText: string;
    brandName: string;
    tagline: string;
    description: string;
    ctaPrimaryText: string;
    ctaSecondaryText: string;
    ctaSecondaryHref: string;
    statsRegistered: string;
    statsActiveWorlds: string;
    statsOnlineIcon?: string;
    statsRegisteredIcon?: string;
    statsActiveWorldsIcon?: string;
    logoUrl?: string;
  };
  howToPlay: {
    android: HowToPlayStep[];
    ios: HowToPlayStep[];
    windows: HowToPlayStep[];
    mac: HowToPlayStep[];
    serverIp?: string;
    apkUrl?: string;
    installerApkUrl?: string;
    hostUrlAndroid?: string;
    hostUrlIos?: string;
    powerTunnelUrl?: string;
    virtualHostTxtUrl?: string;
  };
  features: {
    leaderboardTitle: string;
    leaderboardDesc: string;
    cheatTitle: string;
    cheatDesc: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    statsDevs: string;
    statsStaffs: string;
    highlights: {
      title: string;
      desc: string;
      icon: string;
      color: string;
    }[];
  };
  community: {
    discordTitle: string;
    discordDesc: string;
    discordUrl: string;
    whatsappUrl: string;
    tips: { id: number; title: string; desc: string }[];
    rules: string[];
    discordOnlineText?: string;
    chatMessages?: string[];
  };
  staff: TeamMember[];
  faqs: FAQItem[];
  products: FeaturedProduct[];
}

export interface AdminSettings {
  googleSheetEnabled: boolean;
  googleSheetUrl: string;
  mockAdminUsername: string;
  mockAdminPasswordHash: string;
}


