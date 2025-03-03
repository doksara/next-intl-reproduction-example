'use client';

import throttle from 'lodash/debounce';
import { HeaderLogo } from '../HeaderLogo';
import { HeaderNavigation } from '../HeaderNavigation';
import { Container, HStack } from '@/styled-system/jsx';

import { HeaderNavigationContactLink } from '../HeaderNavigationLink';
import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ScrollDirection,
  useScrollDirection,
} from '@/providers/ScrollProvider';
import { FormattedMessage } from '@/components/FormattedMessage';
import { HeaderProps } from '../interface';
import { DesktopLanguagePicker } from './DesktopLanguagePicker';
import * as HS from '../Header.styles';
import * as HNS from '../HeaderNavigation.styles';

export const throttleDelay = 200;

export const DesktopHeader = ({ locale }: HeaderProps) => {
  const [showHeader, setShowHeader] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollDirection = useScrollDirection();

  const timeout = useRef<number>();

  const handleScroll = (e: Event) => {
    if (e.target instanceof Document) {
      if (scrollDirection === ScrollDirection.Down) {
        setShowHeader(e.target.documentElement.scrollTop <= 250);
      } else if (scrollDirection === ScrollDirection.Up) {
        setShowHeader(true);
      }
    }
  };

  const handleLanguagePickerMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleLanguagePickerMouseLeave = () => {
    setIsExpanded(false);
  };

  const ref = useRef(handleScroll);

  const debouncedScrollHandler = useMemo(() => {
    const func = (e: Event) => {
      ref.current?.(e);
    };

    return throttle(func, throttleDelay);
  }, []);

  useEffect(() => {
    clearTimeout(timeout.current);

    ref.current = handleScroll;
  }, [scrollDirection]);

  useEffect(() => {
    window.addEventListener('scroll', debouncedScrollHandler, false);

    return () => {
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, []);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'ease-out', duration: 0.3 }}
        >
          <HS.Header height={isExpanded ? '140px' : '81px'} overflow="hidden">
            <Container>
              <HStack justify="space-between">
                <HeaderLogo />
                <HeaderNavigation />
                <HStack gap={4}>
                  <HeaderNavigationContactLink href="/contact">
                    <HNS.HeaderNavigationText>
                      <FormattedMessage id="common_navigation_contact" />
                    </HNS.HeaderNavigationText>
                  </HeaderNavigationContactLink>

                  <HS.RegistrationLink
                    href="https://www.sofascore-editor.com"
                    rel="noopener norefferer"
                    target="_blank"
                  >
                    <HNS.HeaderNavigationText>
                      <FormattedMessage id="common_navigation_register" />
                    </HNS.HeaderNavigationText>
                  </HS.RegistrationLink>

                  <DesktopLanguagePicker
                    locale={locale}
                    isExpanded={isExpanded}
                    onMouseEnter={handleLanguagePickerMouseEnter}
                    onMouseLeave={handleLanguagePickerMouseLeave}
                  />
                </HStack>
              </HStack>
            </Container>
          </HS.Header>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
