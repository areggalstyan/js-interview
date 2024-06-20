import { css } from '@emotion/css';
import Text from '../atoms/Text';
import { useTranslation } from 'react-i18next';
import Image from '../atoms/Image';
import { call } from '../../images/images';
import BreakpointContainer from '../atoms/containers/BreakpointContainer';

function CallButton() {
  const { t } = useTranslation();

  return (
    <button
      className={css`
        border: none;
        border-radius: 8px;
        padding: 10px 16px;
        background-color: rgba(97, 94, 240, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
      `}
    >
      <Image width="24px" height="24px" src={call} />
      <BreakpointContainer type="max" width="425px">
        <Text size={16} color="97, 94, 240">
          {t('call')}
        </Text>
      </BreakpointContainer>
    </button>
  );
}

export default CallButton;
