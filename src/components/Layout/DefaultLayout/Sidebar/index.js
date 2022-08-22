import classNames from 'classnames';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={styles[cx('wrapper')]}>
            <h2 className={styles[cx('inner')]}>Side Bar</h2>
        </aside>
    );
}

export default Sidebar;
