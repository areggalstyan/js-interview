import Card, { CardProps } from '../../molecules/Card';
import FlexContainer from '../../atoms/containers/FlexContainer';
import Text from '../../atoms/Text';
import Badge from '../../atoms/Badge';
import ImageButton from '../../atoms/ImageButton';

export type CategoryProps = {
  title: string;
  count: number;
  items: CardProps[];
  buttonSrc?: string;
  buttonAlt?: string;
};

function Category({ title, count, items, buttonSrc, buttonAlt }: CategoryProps) {
  return (
    <FlexContainer gap="8px" padding="16px" direction="column">
      <div>
        <Text size={14}>{title}</Text>
        <Badge margin="0 0 0 8px">{count}</Badge>
      </div>
      {items.map((props, index) => (
        <Card {...props} key={index}>
          {buttonSrc && <ImageButton width="24px" height="24px" src={buttonSrc} alt={buttonAlt} />}
        </Card>
      ))}
    </FlexContainer>
  );
}

export default Category;
