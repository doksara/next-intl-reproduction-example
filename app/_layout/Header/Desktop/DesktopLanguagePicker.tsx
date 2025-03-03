import { Box, HStack } from '@/styled-system/jsx';
import { IconArrowFilled } from '@/components/Icons';
import { mapLocaleToTranslation, routing, usePathname } from '@/i18n/routing';
import * as S from './DesktopLanguagePicker.styles';

interface DesktopLanguagePickerProps {
  locale: string;
  isExpanded: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const DesktopLanguagePicker = ({
  locale,
  isExpanded,
  onMouseEnter,
  onMouseLeave,
}: DesktopLanguagePickerProps) => {
  const otherLocales = routing.locales.filter((l) => l !== locale);
  const pathname = usePathname();

  return (
    <Box
      position="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      padding="12px 6px"
    >
      <HStack opacity={isExpanded ? 1 : 0.6} cursor="pointer">
        <S.ActiveItem>{mapLocaleToTranslation[locale]}</S.ActiveItem>
        <IconArrowFilled transform={isExpanded ? 'rotate(180)' : undefined} />
      </HStack>

      <HStack
        position="absolute"
        bottom="-80px"
        right="0px"
        gap="16px"
        height="78px"
        zIndex={2}
      >
        {otherLocales.map((l) => (
          <S.Pill key={l} href={pathname} locale={l}>
            {mapLocaleToTranslation[l]}
          </S.Pill>
        ))}
      </HStack>
    </Box>
  );
};
