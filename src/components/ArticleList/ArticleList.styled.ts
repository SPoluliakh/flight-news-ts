import styled from 'styled-components';
import { Grid } from '@mui/material';

export const List = styled(Grid)<{ component: string }>`
  list-style-type: style none;
  padding-left: ${p => p.theme.space[0]}px;
`;
