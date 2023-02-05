import styled from 'styled-components';

import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export const Item = styled(Grid)<{ component: string }>`
  display: flex;
  flex-direction: column;
`;

export const Wrap = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Image = styled(CardMedia)<{ component: string; alt: string }>`
  height: 240px;
`;

export const Content = styled(CardContent)`
  flex-grow: 1;
`;

export const DateText = styled(Typography)<{ component: string }>`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const CardTitle = styled(Typography)<{ component: string }>`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const CardText = styled(Typography)<{ component: string }>``;
