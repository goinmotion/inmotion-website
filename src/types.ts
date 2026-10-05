export interface GatewayPartner {
  id: string;
  name: string;
  badge: string;
  bestFor: string;
  description: string;
  supportedMethods: string[];
  settlementSpeed: string;
  referralUrl: string;
  buttonLabel: string;
}

export interface SimpleSolution {
  id: string;
  title: string;
  tagline: string;
  iconType: 'online' | 'terminal' | 'recurring' | 'crossborder';
  bestFor: string;
  highlights: string[];
  partnerNames: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
