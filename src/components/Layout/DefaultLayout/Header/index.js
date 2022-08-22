import classNames from 'classnames';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 1000);
    }, []);

    return (
        <header className={styles[cx('wrapper')]}>
            <div className={styles[cx('inner')]}>
                <div className={styles[cx('logo')]}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={styles[cx('search-result')]} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h2 className={styles[cx('search-title')]}>Accounts</h2>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={styles[cx('search')]}>
                        <input placeholder="Search accounts and videos..." />
                        <button className={styles[cx('clear')]}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={styles[cx('loading')]} icon={faSpinner} />
                        <button className={styles[cx('search-btn')]}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={styles[cx('actions')]}></div>
            </div>
        </header>
    );
}

export default Header;
