import styled from 'styled-components';
import { Card, CardMedia } from '@mui/material';

export const Wrap = styled.div`
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

export const InnerWrap = styled(Card)`
  position: absolute;
  top: 150px;
  display: flex;
  flex-direction: column;
  width: 90%;
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Image = styled(CardMedia)`
  height: 240px;
`;

export const Section = styled.section`
  min-height: 90vh;
`;
