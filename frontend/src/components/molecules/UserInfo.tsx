import FlexContainer from '../atoms/containers/FlexContainer';
import Text from '../atoms/Text';
import OnlineStatus from './OnlineStatus';
import Image from '../atoms/Image';
import { useAppSelector } from '../../state/hooks';
import { profile } from '../../images/images';

function UserInfo() {
  const name = useAppSelector(({ chat }) => chat.selectedConversation!.name);

  return (
    <FlexContainer gap="16px" align="center">
      <Image width="40px" height="40px" src={profile} />
      <div>
        <Text size={20}>{name}</Text>
        <OnlineStatus />
      </div>
    </FlexContainer>
  );
}

export default UserInfo;
