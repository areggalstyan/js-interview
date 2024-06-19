import FlexContainer from '../atoms/containers/FlexContainer';
import Text from '../atoms/Text';
import FlexPosition from '../atoms/FlexPosition';
import ImageButton from '../atoms/ImageButton';
import { ReactNode } from 'react';

export type TopBarProps = {
  height: string;
  title: string;
  buttonSrc: string;
  buttonAlt?: string;
  children?: ReactNode;
};

function TopBar({ height, title, buttonSrc, buttonAlt = '', children }: TopBarProps) {
  return (
    <FlexContainer
      width="100%"
      height={height}
      borderBottom="1px solid rgba(0, 0, 0, 0.08)"
      align="center"
      padding="24px"
    >
      <Text size={20}>{title}</Text>
      {children}
      <FlexPosition at="right">
        <ImageButton width="40px" height="40px" src={buttonSrc} alt={buttonAlt} />
      </FlexPosition>
    </FlexContainer>
  );
}

export default TopBar;
