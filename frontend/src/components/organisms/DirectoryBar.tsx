import FlexContainer from '../atoms/containers/FlexContainer';
import Category from './Category';
import { useTranslation } from 'react-i18next';
import TopBar from '../molecules/TopBar';
import ScrollableContainer from '../atoms/ScrollableContainer';
import { CardProps } from '../molecules/Card';
import HorizontalLine from '../atoms/HorizontalLine';
import { download, file, options, profile } from '../../images/images';

function DirectoryBar() {
  const { t } = useTranslation();

  const exampleTeamMembers: CardProps[] = Array(4).fill({
    title: 'John Doe',
    text: t('profession'),
    imageSrc: profile
  });

  const exampleFiles: CardProps[] = Array(3).fill({
    title: 'example.pdf',
    text: 'PDF 10mb',
    imageSrc: file
  });

  return (
    <FlexContainer
      width="362px"
      height="100%"
      boxShadow="0 0 0 1px #00000014"
      direction="column"
      gap="24px"
    >
      <TopBar height="81px" title={t('directory')} buttonSrc={options} buttonAlt={t('options')} />
      <ScrollableContainer>
        <Category title={t('teamMembers')} count={4} items={exampleTeamMembers} />
        <HorizontalLine />
        <Category
          title={t('files')}
          count={3}
          items={exampleFiles}
          buttonSrc={download}
          buttonAlt={t('download')}
        />
      </ScrollableContainer>
    </FlexContainer>
  );
}

export default DirectoryBar;
