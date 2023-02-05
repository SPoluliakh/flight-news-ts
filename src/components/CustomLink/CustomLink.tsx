import * as SC from './CustomLink.styled';
import React from 'react';

interface IStateType {
  from: { pathname: string };
}

interface ILink {
  to: string;
  state?: IStateType;
  children: React.ReactNode;
}

export const CustomLink = ({ to, state, children }: ILink) => {
  return (
    <SC.LinkTo to={to} state={state}>
      {children}
    </SC.LinkTo>
  );
};
