import FlexContainer from '../atoms/containers/FlexContainer';
import FlexPosition from '../atoms/FlexPosition';
import CallButton from '../molecules/CallButton';
import UserInfo from '../molecules/UserInfo';

function UserBar() {
  return (
    <FlexContainer
      width="100%"
      height="81px"
      borderBottom="1px solid rgba(0, 0, 0, 0.08)"
      align="center"
      padding="24px"
    >
      <UserInfo />
      <FlexPosition at="right">
        <CallButton />
      </FlexPosition>
    </FlexContainer>
  );
}

export default UserBar;
