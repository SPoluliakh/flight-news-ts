import { ArticleListItem } from './ArticleListItem/ArticleListItem';
import { useFetchArticlesQuery } from '../../Redux/Articles/articlesOperations';
import { Pagination } from '../pagination/Pagination';
import * as SC from './ArticleList.styled';
import { useGetSearchParams } from '../../Huks/GetSearchParams';
import Spiner from '../Spiner/Spiner';
import { NoInfo } from '../NoInfo/NoInfo';

export const ArticleList = () => {
  const { pageNumber, keyword } = useGetSearchParams();
  const skip = pageNumber === 1 ? 0 : pageNumber * 20 - 20;

  const { data, isFetching } = useFetchArticlesQuery(
    { skip, keyword },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  if (!data) return null;

  return (
    <>
      {isFetching && <Spiner />}
      <Pagination disabled={data.length} />

      <SC.List container spacing={2} component="ul">
        {data.length > 0 ? (
          data.map(article => (
            <ArticleListItem key={article.id} article={article} />
          ))
        ) : (
          <NoInfo />
        )}
      </SC.List>
      <Pagination disabled={data.length} />
    </>
  );
};
