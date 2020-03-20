import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({
    className = null,
    content = '',
    size = 'regular',
    type = 'button',
    variant = 'primary',
}) => {

    const buttonClassNames = [
        styles.button,
        styles[size],
        styles[type],
        styles[variant],
        className,
    ];

    const buttonAttributes = {
        className: classnames(buttonClassNames),
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
    size: PropTypes.oneOf(['regular', 'block']),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'info', "warning"]),
}

export default Button;
