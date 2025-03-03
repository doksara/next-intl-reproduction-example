import { styled } from '@/styled-system/jsx';

export const Header = styled('header', {
  base: {
    position: 'fixed',
    top: 0,
    left: 0,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',

    padding: '16px 0px',
    background: 'grey',
    zIndex: 2,
    borderBottom: '1px solid rgba(240, 238, 223, 0.30)',
    transition: 'all 0.3s ease',
  },
});

export const RegistrationLink = styled('a', {
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',

    padding: '11px 32px',
    borderRadius: '64px',

    background: 'magenta',
    border: '1px solid transparent',
    transition: 'all .3s linear',

    _hover: {
      background: 'magentaDark',
    },
  },
});
