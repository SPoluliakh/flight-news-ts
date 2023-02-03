import { useMemo, useRef } from 'react';
import { debounce } from 'debounce';
import { TextField, Toolbar } from '@mui/material';
import { BsXLg } from 'react-icons/bs';
import { useGetSearchParams } from 'Huks/GetSearchParams';
import * as SC from './SearchBar.styled';
import { useState } from 'react';

export const SearchBar = () => {
  const filterArea = useRef();
  const { keyword, setSearchParams } = useGetSearchParams();
  const [query, setQuery] = useState(keyword);

  const handleSearchParamsChange = useMemo(() => {
    return debounce(
      value =>
        setSearchParams(
          value !== '' ? { page: 1, keyword: value } : { page: 1 }
        ),
      500
    );
  }, [setSearchParams]);

  const handleFilterChange = evt => {
    const { value } = evt.target;
    setQuery(value);
    handleSearchParamsChange(value);
  };
  const handleFilterClear = () => {
    setQuery('');
    setSearchParams({ page: 1 });
    filterArea.current.focus();
  };

  return (
    <Toolbar>
      <TextField
        fullWidth
        variant="standard"
        label="Type to search... 🔎  "
        type="text"
        value={query}
        onChange={handleFilterChange}
        ref={filterArea}
      />
      <SC.ClearButton type="button" onClick={handleFilterClear}>
        <BsXLg size="24" />
      </SC.ClearButton>
    </Toolbar>
  );
};
