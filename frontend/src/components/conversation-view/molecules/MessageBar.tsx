import FlexContainer from '../../atoms/containers/FlexContainer';
import ImageButton from '../../atoms/ImageButton';
import { useTranslation } from 'react-i18next';
import TextInput from '../../atoms/TextInput';
import GrowingContainer from '../../atoms/containers/GrowingContainer';
import attach from '../../../images/conversation-view/attach.svg';
import send from '../../../images/conversation-view/send.svg';
import PositionContainer from '../../atoms/containers/PositionContainer';
import { useState } from 'react';
import { useAppDispatch } from '../../../state/hooks';
import { requestAddMessage } from '../../../state/sagas';
import Swal from 'sweetalert2';
import i18n from '../../../i18n/i18n';

function MessageBar() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.length) {
      dispatch(requestAddMessage(message));
      setMessage('');
      return;
    }
    Swal.fire({
      title: i18n.t('emptyMessageError'),
      icon: 'error'
    });
  };

  return (
    <PositionContainer type="relative" width="100%">
      <FlexContainer gap="24px" padding="24px" justify="center" align="center">
        <ImageButton width="24px" height="24px" src={attach} alt={t('attach')} />
        <GrowingContainer>
          <TextInput
            value={message}
            placeholder={t('typeAMessage')}
            width="100%"
            padding="10px 64px 10px 20px"
            border="2px solid #e2e8f0"
            onChange={({ target }) => setMessage(target.value)}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                event.preventDefault();
                sendMessage();
              }
            }}
          />
        </GrowingContainer>
        <PositionContainer type="absolute" right="44px">
          <ImageButton
            width="24px"
            height="24px"
            src={send}
            alt={t('send')}
            onClick={sendMessage}
          />
        </PositionContainer>
      </FlexContainer>
    </PositionContainer>
  );
}

export default MessageBar;
