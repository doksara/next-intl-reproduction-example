import {
  Formats,
  RichTranslationValues,
  TranslationValues,
  useTranslations,
} from 'next-intl';
import { ReactNode } from 'react';

interface FormattedMessageProps {
  id: string;
  values?: TranslationValues | RichTranslationValues;
  formats?: Partial<Formats>;
  rich?: boolean;
}

const chunksValues: RichTranslationValues = {
  a: (chunks: ReactNode) => (
    <a
      href={chunks as string}
      style={{ textDecoration: 'underline' }}
      rel="noopener noreferrer"
      target="_blank"
    >
      {chunks}
    </a>
  ),
  b: (chunks: ReactNode) => <b>{chunks}</b>,
  email: (chunks: ReactNode) => (
    <a href={`mailto: ${chunks}`} style={{ textDecoration: 'underline' }}>
      {chunks}
    </a>
  ),
};

export const FormattedMessage = ({
  id,
  values = chunksValues,
  formats,
  rich,
}: FormattedMessageProps) => {
  const t = useTranslations();

  if (rich) {
    return t.rich(id, values, formats);
  }

  return t(id, values as TranslationValues, formats);
};
