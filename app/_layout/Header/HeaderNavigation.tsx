import { HeaderNavigationLink } from './HeaderNavigationLink';
import { FormattedMessage } from '@/components/FormattedMessage';
import * as S from './HeaderNavigation.styles';

export const HeaderNavigation = () => {
  return (
    <S.HeaderNavigation>
      <S.HeaderNavigationList>
        <S.HeaderNavigationItem>
          <HeaderNavigationLink href="/about">
            <FormattedMessage id="common_navigation_about" />
          </HeaderNavigationLink>
        </S.HeaderNavigationItem>
        <S.HeaderNavigationItem>
          <HeaderNavigationLink href="/features">
            <FormattedMessage id="common_navigation_features" />
          </HeaderNavigationLink>
        </S.HeaderNavigationItem>
        <S.HeaderNavigationItem>
          <HeaderNavigationLink href="/resources">
            <FormattedMessage id="common_navigation_resources" />
          </HeaderNavigationLink>
        </S.HeaderNavigationItem>
      </S.HeaderNavigationList>
    </S.HeaderNavigation>
  );
};
