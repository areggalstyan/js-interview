import TextInput from '../atoms/TextInput';
import BasicContainer from '../atoms/containers/BasicContainer';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../state/hooks';
import { changeSearchText } from '../../state/chatSlice';

function SearchBar() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <BasicContainer width="100%" padding="0 24px">
      <TextInput
        width="100%"
        height="48px"
        padding="10px 20px"
        placeholder={t('searchMessages')}
        backgroundColor="#f3f3f3"
        onChange={({ target }) => dispatch(changeSearchText(target.value))}
      />
    </BasicContainer>
  );
}

export default SearchBar;
