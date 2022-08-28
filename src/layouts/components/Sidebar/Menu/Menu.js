import PropTypes from 'prop-types';

function Menu({ children }) {
    return <nav>{children}</nav>;
}
Menu.proppTypes = {
    children: PropTypes.node.isRequired,
}

export default Menu;
