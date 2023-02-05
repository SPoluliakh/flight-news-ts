import { Button } from '@mui/material';
import { useGetSearchParams } from '../../Huks/GetSearchParams';
import * as SC from './Pagination.styled';
import { windowScroll } from '../../Utils/smoothScroll';
import { MouseEvent } from 'react';

interface IProps {
  disabled: number;
}

export const Pagination = ({ disabled = 0 }: IProps) => {
  const { pageNumber, keyword, setSearchParams } = useGetSearchParams();

  const pageCount = (evt: MouseEvent<HTMLButtonElement>) => {
    const { name } = evt.target as HTMLButtonElement;
    name === 'next'
      ? setSearchParams(
          keyword !== ''
            ? { page: (pageNumber + 1).toString(), keyword }
            : { page: (pageNumber + 1).toString() }
        )
      : setSearchParams(
          keyword !== ''
            ? { page: (pageNumber - 1).toString(), keyword }
            : { page: (pageNumber - 1).toString() }
        );

    windowScroll();
  };

  return (
    <>
      <SC.Wrap>
        <Button
          name="prev"
          variant="contained"
          type="button"
          onClick={pageCount}
          disabled={pageNumber === 1}
        >
          PREV
        </Button>
        <SC.Count>{pageNumber}</SC.Count>
        <Button
          name="next"
          variant="contained"
          type="button"
          onClick={pageCount}
          disabled={disabled <= 19}
        >
          NEXT
        </Button>
      </SC.Wrap>
    </>
  );
};
