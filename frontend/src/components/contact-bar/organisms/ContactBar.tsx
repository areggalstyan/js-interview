import SearchBar from '../molecules/SearchBar';
import FlexContainer from '../../atoms/containers/FlexContainer';
import TopBar from '../../molecules/TopBar';
import ContactList from '../molecules/ContactList';
import Image from '../../atoms/Image';
import Badge from '../../atoms/Badge';
import more from '../../../images/contact-bar/more.svg';
import add from '../../../images/contact-bar/add.svg';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../state/hooks';

function ContactBar() {
  const { t } = useTranslation();
  const messageCount = useAppSelector(({ chat }) => chat.messageCount);

  return (
    <FlexContainer width="349px" boxShadow="1px 0 0 0 #00000014" direction="column" gap="12px">
      <TopBar height="89px" title={t('messages')} buttonSrc={add} buttonAlt={t('add')}>
        <Image width="16px" height="16px" margin="0 0 0 6px" src={more} alt={t('more')} />
        <Badge margin="0 0 0 10px">{messageCount}</Badge>
      </TopBar>
      <SearchBar />
      <ContactList />
    </FlexContainer>
  );
}

export default ContactBar;
