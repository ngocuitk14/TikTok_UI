import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://th.bing.com/th/id/OIP.2OJFNVWdwQSKT6arAkqDJwHaKa?w=118&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="Hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Hoa</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>nguyenhoa</span>
            </div>
        </div>
    );
}

export default AccountItem;