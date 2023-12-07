import styles from './nav.module.scss'

export default function Nav() {
    return(
        <nav>
            <ul className={`flex items-center justify-between gap-x-12`}>
                <li><a className={`text-2xl font-medium ${styles.navlist}`} href='www.google.com'>Course</a></li>
                <li><a className={`text-2xl font-medium ${styles.navlist}`} href='www.google.com'>Activities</a></li>
                <li><a className={`text-2xl font-medium ${styles.navlist}`} href='www.google.com'>Offers</a></li>
                <li><a className={`text-2xl font-medium ${styles.navlist}`} href='www.google.com'>About Us</a></li>
                <li><a className={`text-2xl font-medium ${styles.navlist}`} href='www.google.com'>Contact Us</a></li>
            </ul>
        </nav>
    )
}