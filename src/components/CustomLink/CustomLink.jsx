import PropTypes from 'prop-types';
import * as SC from './CustomLink.styled';

export const CustomLink = ({ to, state, children }) => {
  return (
    <SC.LinkTo to={to} state={state}>
      {children}
    </SC.LinkTo>
  );
};

CustomLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  state: PropTypes.shape({
    from: PropTypes.object,
  }),
  children: PropTypes.node,
};
