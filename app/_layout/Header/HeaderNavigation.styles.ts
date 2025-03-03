import { Link } from '@/i18n/routing';
import { styled } from '@/styled-system/jsx';
import { css } from '@/styled-system/css';

export const HeaderNavigation = styled('nav', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',

    borderRadius: '40px',
    border: '1px solid rgba(229, 226, 208, 0.3)',
  },
});

export const HeaderNavigationList = styled('ul', {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
  },
});

export const HeaderNavigationItem = styled('li', {
  base: {
    listStyle: 'none',
  },
});

export const HeaderNavigationText = styled('p', {
  base: {
    fontSize: '20px',
    letterSpacing: '-0.6px',
    lineHeight: '22px',
  },
});

export const HeaderNavigationLink = styled(Link, {
  base: {
    color: 'token(colors.stone)',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '-0.6px',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',

    position: 'relative',
    display: 'flex',
    padding: '12px 38px',
    borderRadius: '40px',

    _before: {
      content: "''",
      position: 'absolute',
      top: '50%',
      left: '20px',
      transform: 'translateY(-50%)',

      display: 'inline-block',
      width: '.5em',
      height: '.5em',

      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      transition: 'all .3s linear',
    },
  },
});

export const contactLinkStyles = css.raw({
  color: 'stone',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 400,
  letterSpacing: '-0.6px',
  textTransform: 'capitalize',

  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '11px 34px',
  borderRadius: '40px',
  boxShadow: '0 0 0 1px token(colors.magentaDark)',
  transition: 'box-shadow .3s linear',

  _before: {
    display: 'inline-block',
    width: '10px',
    height: '10px',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    transition: 'all .3s linear',
  },
});
