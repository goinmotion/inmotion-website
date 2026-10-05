import { GatewayPartner, SimpleSolution, FaqItem } from '../types';

export const COMPANY_INFO = {
  name: 'Go Inmotion',
  brandName: 'INMOTION',
  registrationNo: '202603112901 (LA0088931-P)',
  email: 'sales@goinmotion.net',
  phone: '+60 11-3762 1454',
  phoneClean: '+601137621454',
  whatsappUrl: 'https://wa.me/601137621454',
  tagline: 'Payment Gateway Advisors for Growing Businesses',
  heroHeadline: 'Find the Right Payment Gateway for Your Business',
  heroSubhead: 'We compare top payment gateways, negotiate lower transaction rates, and fast-track your merchant approval. Independent advisory for growing businesses.',
  copyright: '© 2024 Go Inmotion. All rights reserved.',
};

export const PARTNERS: GatewayPartner[] = [
  {
    id: 'hitpay',
    name: 'HitPay',
    badge: 'Best for E-Commerce & Retail POS',
    bestFor: 'Online stores, retail shops, pop-up events',
    description: 'All-in-one payment gateway with zero monthly fees. Includes Shopify & WooCommerce plugins, payment links, and wireless 4G smart card terminals.',
    supportedMethods: ['Visa / Mastercard', 'FPX & PayNow', 'GrabPay & eWallets', 'Buy Now Pay Later'],
    settlementSpeed: 'T+1 business day',
    referralUrl: 'https://dashboard.hit-pay.com/register?partner_referral=GOINYPPKZN',
    buttonLabel: 'Register with Partner Code',
  },
  {
    id: 'airwallex',
    name: 'Airwallex',
    badge: 'Best for Multi-Currency & Payouts',
    bestFor: 'Businesses selling globally or paying overseas suppliers',
    description: 'Open multi-currency collection accounts in USD, EUR, GBP, SGD, and AUD. Enjoy wholesale FX rates, corporate Visa cards, and batch supplier payouts.',
    supportedMethods: ['60+ Currencies', 'Global Cards', 'Local Bank Clearing', 'Marketplace Collections'],
    settlementSpeed: 'Same-day to T+1',
    referralUrl: 'https://partners.airwallex.com/55f5vh0z0os5',
    buttonLabel: 'Explore Airwallex Partner Offer',
  },
  {
    id: 'curlec',
    name: 'Curlec by Razorpay',
    badge: 'Best for Subscription & Recurring Billing',
    bestFor: 'SaaS companies, gym memberships, recurring service retainers',
    description: 'Automate customer recurring collections via FPX Direct Debit and credit cards. Reduce failed payment churn and eliminate manual bank transfers.',
    supportedMethods: ['FPX Direct Debit', 'Card Tokenization', 'Automated Mandates', 'Scheduled Invoicing'],
    settlementSpeed: 'T+2 business days',
    referralUrl: 'https://wa.me/601137621454/',
    buttonLabel: 'Enquire via Inmotion',
  },
  {
    id: 'commercepay',
    name: 'CommercePay',
    badge: 'Best for High-Volume SEA Merchants',
    bestFor: 'Regional B2B transactions and alternative Southeast Asian payment methods',
    description: 'High-converting payment gateway engineered for Southeast Asian merchants with flexible underwriting and fast merchant settlement.',
    supportedMethods: ['Local Bank Transfers', 'Regional eWallets', 'High-Limit Processing', 'API Checkout'],
    settlementSpeed: 'T+1 fast settlement',
    referralUrl: 'https://wa.me/601137621454/',
    buttonLabel: 'Enquire via Inmotion',
  },
];

export const SOLUTIONS: SimpleSolution[] = [
  {
    id: 'online-gateway',
    title: 'Online Payment Gateway',
    tagline: 'Accept cards, FPX, and eWallets on your website',
    iconType: 'online',
    bestFor: 'Shopify, WooCommerce, custom websites',
    highlights: [
      'Accept credit/debit cards, FPX, GrabPay, Touch n Go, Apple Pay',
      'One-click plugins with no complex coding required',
      'High authorization rate with automatic fraud protection',
    ],
    partnerNames: ['HitPay', 'CommercePay', 'Curlec'],
  },
  {
    id: 'card-terminals',
    title: 'In-Store POS Terminals',
    tagline: 'Wireless 4G card machines for retail & dining',
    iconType: 'terminal',
    bestFor: 'Retail stores, restaurants, events, trade shows',
    highlights: [
      'Built-in 4G SIM and Wi-Fi connectivity with zero downtime',
      'Accepts tap-to-pay PayWave, chip cards, and QR eWallets',
      'RM 0 / $0 monthly rental fees with next-day settlement',
    ],
    partnerNames: ['HitPay', 'CommercePay'],
  },
  {
    id: 'recurring-billing',
    title: 'Recurring & Subscription Billing',
    tagline: 'Automated direct debit and card subscriptions',
    iconType: 'recurring',
    bestFor: 'SaaS software, gyms, monthly retainers, tuition',
    highlights: [
      'Auto-charge customer bank accounts via FPX Direct Debit',
      'Automated retry for failed payments to minimize churn',
      'Digital e-mandates approved in under 60 seconds',
    ],
    partnerNames: ['Curlec by Razorpay'],
  },
  {
    id: 'cross-border',
    title: 'Cross-Border Payouts & FX',
    tagline: 'Pay overseas suppliers with wholesale FX rates',
    iconType: 'crossborder',
    bestFor: 'Importers, exporters, global eCommerce sellers',
    highlights: [
      'Pay vendors in 150+ countries via fast local clearing rails',
      'Wholesale FX spreads from 0.35% (vs 2.8% traditional bank markup)',
      'Receive foreign customer payments into local virtual accounts',
    ],
    partnerNames: ['Airwallex', 'HitPay'],
  },
];

export const WHY_US = [
  {
    title: 'Independent Comparison',
    description: 'We don’t work for one gateway. We compare multiple providers to find the lowest fees and best features for your business.',
  },
  {
    title: 'Better Transaction Rates',
    description: 'Through our partner agreements, we help businesses unlock lower transaction rates and fee waivers.',
  },
  {
    title: 'Faster Account Approval',
    description: 'Avoid weeks of back-and-forth KYC delays. We connect you directly with partner managers to speed up approval.',
  },
  {
    title: 'Zero Advisory Surcharge',
    description: 'Our advisory carries no consulting fees or retainers. We are compensated directly by payment gateways when you process transactions through them.',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Share Your Payment Needs',
    desc: 'Tell us what you sell, where your customers are, and your estimated monthly volume.',
  },
  {
    step: '2',
    title: 'We Match & Compare',
    desc: 'We recommend the 1–2 best payment gateways and review rate cards side-by-side.',
  },
  {
    step: '3',
    title: 'Get Approved & Start Selling',
    desc: 'We assist with documentation and onboarding so your account goes live quickly.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Why should I use Go Inmotion instead of applying to a gateway directly?',
    answer: 'Different payment gateways have different pricing, supported payment methods, and approval requirements. Go Inmotion saves you time by finding the best match for your specific business. In many cases, our partner referral codes unlock lower transaction rates and faster approval.',
  },
  {
    question: 'How much does Go Inmotion charge for advisory?',
    answer: 'Nothing. There are no consulting fees or invoices for business owners. We earn an authorized partner referral allowance from the payment gateways only when you successfully process payments through them.',
  },
  {
    question: 'Which payment methods can my customers use?',
    answer: 'Depending on your chosen gateway: credit & debit cards (Visa, Mastercard, Amex), FPX online banking, regional eWallets (GrabPay, Touch n Go, Boost), Apple Pay, and Buy Now Pay Later (Atome).',
  },
  {
    question: 'How fast can our account get approved?',
    answer: 'Standard Malaysian and Singaporean businesses with complete documentation are typically approved within 24 to 48 hours.',
  },
];

export const PRIVACY_POLICY_DATA = {
  lastUpdated: 'July 2026',
  articles: [
    {
      title: 'Introduction',
      content: [
        'Welcome to Go Inmotion. We respect your privacy and are committed to protecting your personal information.',
        'This Privacy Policy explains how we collect and use your details when you enquire about payment gateway advisory or referral services.'
      ]
    },
    {
      title: 'Information We Collect',
      content: [
        'We collect details you provide such as name, company name, email, phone number, and payment requirements.',
        'We do not collect or store credit card numbers or banking passwords on this website.'
      ]
    },
    {
      title: 'How We Use Information',
      content: [
        'We use your details strictly to respond to enquiries, recommend payment gateway options, and connect you with chosen partner providers.',
        'We never sell your personal information.'
      ]
    },
    {
      title: 'Contact Details',
      content: [
        'Go Inmotion',
        'Registration: 202603112901 (LA0088931-P)',
        'Email: sales@goinmotion.net',
        'Phone: +60 11-3762 1454'
      ]
    }
  ]
};

export const TERMS_OF_SERVICE_DATA = {
  lastUpdated: 'July 2026',
  articles: [
    {
      title: 'Nature of Service',
      content: [
        'Go Inmotion operates as an independent commercial and payment gateway advisory firm.',
        'We do not directly process customer payments or hold funds. Payment gateway and acquiring services are provided directly by licensed third-party providers (Airwallex, HitPay, Curlec, CommercePay), subject to each provider’s merchant agreements and regulatory compliance.'
      ]
    }
  ]
};
