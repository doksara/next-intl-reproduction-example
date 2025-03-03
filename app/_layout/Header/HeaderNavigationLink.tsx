'use client';

import { Link, usePathname } from '@/i18n/routing';
import { css } from '@/styled-system/css';
import * as S from './HeaderNavigation.styles';

interface HeaderNavigationLinkProps {
  href: string;
  onClick?: () => void;
}

export const HeaderNavigationLink = ({
  href,
  children,
  onClick,
}: React.PropsWithChildren<HeaderNavigationLinkProps>) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <S.HeaderNavigationLink
      onClick={onClick}
      href={href}
      _hover={{
        _before: {
          borderColor: 'magenta',
        },
      }}
      _before={{
        backgroundColor: isActive ? 'magenta' : 'transparent',
      }}
    >
      <S.HeaderNavigationText>{children}</S.HeaderNavigationText>
    </S.HeaderNavigationLink>
  );
};

export const HeaderNavigationContactLink = ({
  children,
  href,
  onClick,
}: React.PropsWithChildren<HeaderNavigationLinkProps>) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      onClick={onClick}
      href={href}
      className={css(S.contactLinkStyles, {
        _hover: {
          boxShadow: '0 0 0 2px token(colors.magentaDark)',
        },
        _before: {
          content: isActive ? "''" : undefined,
          backgroundColor: isActive ? 'magenta' : 'transparent',
        },
      })}
    >
      {children}
    </Link>
  );
};
