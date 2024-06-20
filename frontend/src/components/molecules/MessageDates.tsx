import Text from '../atoms/Text';
import { useTranslation } from 'react-i18next';

export type MessageDatesProps = {
  dateAdded: number;
  dateEdited: number;
  isMine: boolean;
};

function MessageDates({ dateAdded, dateEdited, isMine }: MessageDatesProps) {
  const { t } = useTranslation();

  return (
    <>
      <Text size={10} color={isMine ? '255, 255, 255' : '0, 0, 0'} opacity={0.4}>
        {t('added')} {new Date(dateAdded).toISOString()}
      </Text>
      <Text size={10} color={isMine ? '255, 255, 255' : '0, 0, 0'} opacity={0.4}>
        {t('edited')} {new Date(dateEdited).toISOString()}
      </Text>
    </>
  );
}

export default MessageDates;
