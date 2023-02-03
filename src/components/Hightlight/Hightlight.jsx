import { Fragment } from 'react';
import PropTypes from 'prop-types';

export const Hightlight = ({ filter, str }) => {
  if (!filter) {
    return str;
  }
  const regExp = new RegExp(filter, 'ig');
  const matchValue = str.match(regExp);
  if (matchValue) {
    return str.split(regExp).map((el, idx, arr) => {
      if (idx < arr.length - 1) {
        const matches = matchValue.shift();
        return (
          <Fragment key={idx}>
            {el} <span style={{ backgroundColor: 'yellow' }}>{matches}</span>
          </Fragment>
        );
      }
      return el;
    });
  }
  return str;
};

Hightlight.propTypes = {
  str: PropTypes.string,
  filter: PropTypes.string,
};
