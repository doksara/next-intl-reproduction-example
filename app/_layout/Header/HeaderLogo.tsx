'use client';

import { Link } from '@/i18n/routing';
import { css } from '@/styled-system/css';

export const HeaderLogo = () => {
  return (
    <Link
      aria-label="Go to homepage"
      href="/"
      className={css({
        transition: 'all .3s linear',
        _hover: {
          color: 'blue',
        },
      })}
    >
      LOGO
    </Link>
  );
};
