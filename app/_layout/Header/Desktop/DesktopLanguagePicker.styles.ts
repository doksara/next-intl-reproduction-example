import { Link } from '@/i18n/routing';
import { styled } from '@/styled-system/jsx';

export const ActiveItem = styled('p', {
  base: {
    color: 'stone',
    fontFamily: 'var(--sofascore-mono)',
    fontSize: '16px',
    letterSpacing: '-0.48px',
    lineHeight: 1,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
});

export const Pill = styled(Link, {
  base: {
    color: 'stone',
    fontFamily: 'var(--sofascore-mono)',
    fontSize: '16px',
    letterSpacing: '-0.48px',
    lineHeight: 1,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    padding: '6px 12px',
    borderRadius: '12px',
    border: '1px solid rgba(240, 238, 223, 0.60)',
    transition: 'all .3s linear',

    _hover: {
      color: 'grey',
      borderColor: '#fff',
      background: '#fff',
    },
  },
});
