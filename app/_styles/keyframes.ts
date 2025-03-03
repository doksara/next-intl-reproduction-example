import { defineKeyframes } from '@pandacss/dev';

export const keyframes = defineKeyframes({
  scrollX: {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(calc(-100% - 4rem))' },
  },
  grow: {
    '0%': { width: '0px' },
    '100%': { width: '100%' },
  },
  fadeIn: {
    '0%': { backgroundColor: 'rgba(0, 0, 0, 0)' },
    '100%': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  },
});
