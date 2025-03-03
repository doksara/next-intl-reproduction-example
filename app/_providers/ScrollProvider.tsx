'use client';

import debounce from 'lodash/debounce';
import { createContext, useContext, useEffect, useState } from 'react';

export enum ScrollDirection {
  Up = 'up',
  Down = 'down',
}

const ScrollDirectionContext = createContext<ScrollDirection>(
  ScrollDirection.Up
);

const THRESHOLD = 0;

export const ScrollDirectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>(
    ScrollDirection.Up
  );

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let scrollDeltaAcc = 0;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      if (scrollY <= 96) {
        setScrollDir(ScrollDirection.Up);
        ticking = false;
        return;
      }

      scrollDeltaAcc += delta;

      if (scrollDeltaAcc > THRESHOLD) {
        setScrollDir(ScrollDirection.Down);
        scrollDeltaAcc = THRESHOLD;
      } else if (scrollDeltaAcc < -THRESHOLD) {
        setScrollDir(ScrollDirection.Up);
        scrollDeltaAcc = -THRESHOLD;
      }
      ticking = false;
    };

    const onScroll = debounce(() => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(updateScrollDirection);
        });
        ticking = true;
      }
    }, 100);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <ScrollDirectionContext.Provider value={scrollDir}>
      {children}
    </ScrollDirectionContext.Provider>
  );
};

/**
 *
 * This hook is customized for header animation usage.
 * ScrollDirection may indicate that hook returns exact direction of scrolling in any given moment,
 * but that is not the case. Current implementation is custom made for header navigation logic and can be
 * easily reconfigured for more generic usage. Since there is no need for that at the moment and there is no indication
 * that we might need generic behavior, this hook will be reconfigured only when/if necessary.
 *
 * @returns scroll direction recalculated after some threshold.
 */
export const useScrollDirection = () => {
  const scrollDir = useContext(ScrollDirectionContext);
  return scrollDir;
};
