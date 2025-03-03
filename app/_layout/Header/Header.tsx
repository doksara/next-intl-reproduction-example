import { DesktopHeader } from './Desktop';
import { Box } from '@/styled-system/jsx';
import { HeaderProps } from './interface';

export const Header = ({ locale }: HeaderProps) => {
  return (
    <>
      <Box display={['none', 'none', 'block']}>
        <DesktopHeader locale={locale} />
      </Box>
      <Box display={['block', 'block', 'none']}>Mobile Header</Box>
    </>
  );
};
