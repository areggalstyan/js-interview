import FlexContainer from '../../atoms/containers/FlexContainer';
import ImageButton from '../../atoms/ImageButton';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../state/hooks';
import { requestEditMessage, requestRemoveMessage } from '../../../state/sagas';
import Swal from 'sweetalert2';
import { edit, remove } from '../../../images/images';

function MessageActions({ id, name }: { id: string; name: string }) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const editMessage = async () => {
    const text = (
      await Swal.fire({
        title: t('typeAMessage'),
        input: 'text',
        showCancelButton: true,
        inputValidator: value => {
          if (!value.length) {
            return t('emptyMessageError');
          }
        }
      })
    ).value;
    if (!text) {
      return;
    }
    dispatch(requestEditMessage({ id, name, text }));
  };

  return (
    <FlexContainer gap="8px">
      <ImageButton width="12px" height="12px" src={edit} alt={t('edit')} onClick={editMessage} />
      <ImageButton
        width="12px"
        height="12px"
        src={remove}
        alt={t('remove')}
        onClick={() => dispatch(requestRemoveMessage(id))}
      />
    </FlexContainer>
  );
}

export default MessageActions;
