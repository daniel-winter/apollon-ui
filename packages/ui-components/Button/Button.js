import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({
    className = null,
    content = ''
}) => {

    const buttonAttributes = {
        className: classnames(styles.button, className),
    };
  return (
    <button {...buttonAttributes}>{content}</button>
  );
}

Button.propTypes = {
    className: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    size: PropTypes.oneOf(['regular', 'large']),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default Button;
