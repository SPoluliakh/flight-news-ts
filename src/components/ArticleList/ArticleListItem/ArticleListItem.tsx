import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import * as SC from './ArticleListItem.styled';
import { Hightlight } from '../../Hightlight/Hightlight';
import { useGetSearchParams } from '../../../Huks/GetSearchParams';
import { CustomLink } from '../../CustomLink/CustomLink';
import { IPosts } from '../../../interfases/interfase.posts';

interface IArticleType {
  key: number;
  article: IPosts;
}

export const ArticleListItem = ({ article }: IArticleType) => {
  const { id, imageUrl, updatedAt, title, summary } = article;
  const location = useLocation();
  const { keyword } = useGetSearchParams();

  const dateConverter = useCallback((value: string) => {
    const data = new Date(value.slice(0, 10));
    return data.toDateString().slice(3);
  }, []);

  const ChangeColor = useCallback(
    (str: string) => {
      return <Hightlight filter={keyword} str={str} />;
    },
    [keyword]
  );

  return (
    <SC.Item item xs={12} md={4} component="li">
      <SC.Wrap>
        <SC.Image component="img" src={`${imageUrl}`} alt={`${title}`} />

        <SC.Content>
          {updatedAt && (
            <SC.DateText component="p">{dateConverter(updatedAt)}</SC.DateText>
          )}
          <SC.CardTitle variant="h5" component="h2">
            {ChangeColor(title)}
          </SC.CardTitle>
          <SC.CardText component="p">
            {ChangeColor(summary.slice(0, 100))}
          </SC.CardText>
        </SC.Content>
        <CustomLink to={`/articlePage/${id}`} state={{ from: location }}>
          Read more
        </CustomLink>
      </SC.Wrap>
    </SC.Item>
  );
};
