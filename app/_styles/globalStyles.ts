import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  'html, body': {
    color: 'stone',
  },
  html: {
    scrollBehavior: 'smooth !important',
    scrollPaddingTop: { base: '32px', sm: '81px' },
  },
  body: {
    fontFeatureSettings: 'kern',
    fontKerning: 'normal',
    WebkitFontSmoothing: 'antialiased',
  },
});
