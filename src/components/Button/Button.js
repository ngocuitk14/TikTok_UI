import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    rounded = false,
    text,
    leftIcon,
    rightIcon,
    children,
    onClick,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove Event listener when btn is disabled

    if(disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = [
        cx('wrapper', {
            [className]: className,
            text,
            primary,
            outline,
            small,
            large,
            rounded,
            disabled,
        }),
    ];
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;
