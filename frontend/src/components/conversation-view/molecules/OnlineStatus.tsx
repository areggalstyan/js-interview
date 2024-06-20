import FlexContainer from '../../atoms/containers/FlexContainer';
import Image from '../../atoms/Image';
import { useTranslation } from 'react-i18next';
import Text from '../../atoms/Text';
import { online } from '../../../images/images';

function OnlineStatus() {
  const { t } = useTranslation();

  return (
    <FlexContainer gap="8px" align="center">
      <Image width="10px" height="10px" src={online} />
      <Text size={12} opacity={0.6}>
        {t('online')}
      </Text>
    </FlexContainer>
  );
}

export default OnlineStatus;
