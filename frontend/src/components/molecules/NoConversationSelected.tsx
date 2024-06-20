import FlexContainer from '../atoms/containers/FlexContainer';
import { useTranslation } from 'react-i18next';
import Text from '../atoms/Text';

function NoConversationSelected() {
  const { t } = useTranslation();

  return (
    <FlexContainer width="100%" grow={1} justify="center" align="center">
      <Text size={40} align="center" opacity={0.4}>
        {t('selectAConversation')}
      </Text>
    </FlexContainer>
  );
}

export default NoConversationSelected;
