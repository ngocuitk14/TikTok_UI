import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2 className={cx('inner')}>Side Bar</h2>
        </aside>
    );
}

export default Sidebar;
