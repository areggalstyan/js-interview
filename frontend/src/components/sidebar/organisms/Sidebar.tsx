import FlexContainer from '../../atoms/containers/FlexContainer';
import Logo from '../atoms/Logo';
import ImageButton from '../../atoms/ImageButton';
import FlexPosition from '../../atoms/FlexPosition';
import home from '../../../images/sidebar/home.svg';
import messages from '../../../images/sidebar/messages.svg';
import audio from '../../../images/sidebar/audio.svg';
import search from '../../../images/sidebar/search.svg';
import calendar from '../../../images/sidebar/calendar.svg';
import settings from '../../../images/sidebar/settings.svg';
import { useTranslation } from 'react-i18next';
import { toggleLanguage } from '../../../i18n/i18n';
import ScrollableContainer from '../../atoms/ScrollableContainer';

function Sidebar() {
  const { t } = useTranslation();

  return (
    <FlexContainer
      width="88px"
      height="100%"
      boxShadow="0 0 24px 0 #00000014"
      direction="column"
      gap="48px"
      padding="16px"
    >
      <Logo />
      <ScrollableContainer>
        <FlexContainer height="100%" direction="column" gap="32px" align="center">
          <ImageButton width="24px" height="24px" src={home} alt={t('home')} />
          <ImageButton width="24px" height="24px" src={messages} alt={t('messages')} />
          <ImageButton width="24px" height="24px" src={audio} alt={t('audio')} />
          <ImageButton width="24px" height="24px" src={search} alt={t('search')} />
          <ImageButton width="24px" height="24px" src={calendar} alt={t('calendar')} />
          <FlexPosition at="bottom">
            <ImageButton
              width="24px"
              height="24px"
              src={settings}
              alt={t('settings')}
              onClick={toggleLanguage}
            />
          </FlexPosition>
        </FlexContainer>
      </ScrollableContainer>
    </FlexContainer>
  );
}

export default Sidebar;
