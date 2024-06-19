import FlexContainer from '../atoms/containers/FlexContainer';
import Image from '../atoms/Image';
import GrowingContainer from '../atoms/containers/GrowingContainer';
import Text from '../atoms/Text';
import FlexPosition from '../atoms/FlexPosition';
import { ReactNode } from 'react';

export type CardProps = {
  imageSrc: string;
  title: string;
  subtitle?: string;
  text: string;
  maxLength?: number;
  children?: ReactNode;
};

function Card({ imageSrc, title, subtitle, text, maxLength = 30, children }: CardProps) {
  const limitedText = text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;

  return (
    <FlexContainer width="100%" gap="16px" padding="12px" align="center">
      <Image width="48px" height="48px" src={imageSrc} />
      <GrowingContainer>
        <FlexContainer>
          <Text size={14}>{title}</Text>
          <FlexPosition at="right">
            {subtitle && (
              <Text size={14} opacity={0.3}>
                {subtitle}
              </Text>
            )}
          </FlexPosition>
        </FlexContainer>
        <Text size={12} opacity={0.4}>
          {limitedText}
        </Text>
      </GrowingContainer>
      {children}
    </FlexContainer>
  );
}

export default Card;
