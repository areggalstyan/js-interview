import FlexContainer from '../../atoms/containers/FlexContainer';
import Image from '../../atoms/Image';
import { useTranslation } from 'react-i18next';
import Text from '../../atoms/Text';
import { useAppSelector } from '../../../state/hooks';
import { css } from '@emotion/css';
import { online } from '../../../images/images';

function StatusBar() {
  const { t } = useTranslation();
  const status = useAppSelector(({ chat }) => chat.status);

  return (
    <FlexContainer
      width="100%"
      gap="8px"
      padding="8px"
      borderBottom="1px solid rgba(0, 0, 0, 0.08)"
      justify="center"
      align="center"
    >
      <div
        className={css`
          filter: invert(
            ${{
              idle: 0.5,
              processing: 0.5,
              success: 0,
              failure: 1
            }[status]}
          );
        `}
      >
        <Image width="10px" height="10px" src={online} />
      </div>
      <Text size={12} opacity={0.6}>
        {t(`${status}Status`)}
      </Text>
    </FlexContainer>
  );
}

export default StatusBar;
