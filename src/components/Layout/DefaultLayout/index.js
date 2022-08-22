import classNames from 'classnames'
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={styles[cx('wrapper')]}>
            <Header />
            <div className={styles[cx('container')]}>
                <Sidebar />
                <div className={styles[cx('content')]}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
