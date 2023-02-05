import { useSearchParams } from 'react-router-dom';

export const useGetSearchParams = () => {
  const [serchParams, setSearchParams] = useSearchParams();
  const pageNumber = Number(serchParams.get('page') ?? 1);
  const keyword = serchParams.get('keyword') ?? '';

  return { pageNumber, keyword, setSearchParams };
};
