import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as SC from './ArticleListItem.styled';
import { Hightlight } from 'components/Hightlight/Hightlight';
import { useGetSearchParams } from 'Huks/GetSearchParams';
import { CustomLink } from 'components/CustomLink/CustomLink';

export const ArticleListItem = ({ article }) => {
  const { id, imageUrl, updatedAt, title, summary } = article;
  const location = useLocation();
  const { keyword } = useGetSearchParams();

  const dateConverter = useCallback(value => {
    const data = new Date(value.slice(0, 10));
    return data.toDateString().slice(3);
  }, []);

  const ChangeColor = useCallback(
    str => {
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

ArticleListItem.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    updatedAt: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
  }),
};
