import { globalCss } from './app/_styles/globalStyles';
import { keyframes } from './app/_styles/keyframes';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Fix absolute imports
  importMap: '@/styled-system',

  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          magenta: { value: '#FF407F' },
          magentaDark: { value: '#E53972' },
          blueAccent: { value: '#D7DBFD' },
          blueLightest: { value: '#AFB8FB' },
          blueLight: { value: '#768DFF' },
          blue: { value: '#7181F7' },
          blueDark: { value: '#212A6D' },
          blueDarkest: { value: '#191E3F' },
          blueShades: { value: '#28359A' },
          grey: { value: '#121212' },
          stone: { value: '#E5E2D0' },
          neutral: { value: '#222226' },
        },
      },
      breakpoints: {
        sm: '768px',
        md: '992px',
        lg: '1344px',
        xl: '1728px',
      },
      keyframes: keyframes,
    },
  },

  patterns: {
    extend: {
      container: {
        properties: {
          noGutters: { type: 'boolean' },
          withMedia: { type: 'boolean' },
        },
        transform(props) {
          const { noGutters, withMedia, ...other } = props;
          return {
            width: '100%',
            maxWidth: withMedia ? '1920px' : '1728px',
            margin: '0 auto',
            paddingInline: noGutters
              ? {}
              : { base: '20px', sm: '20px', md: '60px' },
            ...other,
          };
        },
      },
    },
  },

  staticCss: {
    css: [
      {
        properties: {
          backgroundColor: ['*'],
          color: ['grey', 'stone', 'blue', 'magenta'],
        },
      },
    ],
  },

  // The output directory for your css system
  outdir: 'styled-system',

  syntax: 'object-literal',

  jsxFramework: 'react',

  globalCss: globalCss,
});
