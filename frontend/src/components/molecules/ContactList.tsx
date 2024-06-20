import FlexContainer from '../atoms/containers/FlexContainer';
import Card from './Card';
import ScrollableContainer from '../atoms/ScrollableContainer';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { useTranslation } from 'react-i18next';
import { selectConversation } from '../../state/chatSlice';
import ClickableContainer from '../atoms/ClickableContainer';
import { profile } from '../../images/images';

function ContactList() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const conversations = useAppSelector(({ chat }) => chat.visibleConversations);

  return (
    <ScrollableContainer>
      <FlexContainer width="100%" gap="8px" padding="0 16px" direction="column">
        {conversations.map(({ name, lastMessage, minutesSinceLast }, index) => (
          <ClickableContainer
            width="100%"
            onClick={() => dispatch(selectConversation(name))}
            key={index}
          >
            <Card
              imageSrc={profile}
              title={name}
              subtitle={minutesSinceLast + t('m')}
              text={lastMessage.text}
            />
          </ClickableContainer>
        ))}
      </FlexContainer>
    </ScrollableContainer>
  );
}

export default ContactList;
