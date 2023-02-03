import styled from 'styled-components';

export const ClearButton = styled.button`
  padding: ${p => p.theme.space[0]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  background-color: transparent;
  cursor: pointer;
  color: ${p => p.theme.colors.deleteButton};
  transition: scale 250ms linear;
  :hover {
    scale: 1.2;
  }
`;
