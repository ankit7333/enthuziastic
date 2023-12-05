import styles from './nav.module.scss'

export default function Nav() {
    return(
        <nav>
            <ul className={`flex items-center justify-between gap-x-12`}>
                <li><a className={`text-2xl font-medium ${styles.navlist}`} href="#">Course</a></li>
                <li><a className={`text-2xl font-medium ${styles.navlist}`} href="#">Activities</a></li>
                <li><a className={`text-2xl font-medium ${styles.navlist}`} href="#">Offers</a></li>
                <li><a className={`text-2xl font-medium ${styles.navlist}`} href="#">About Us</a></li>
                <li><a className={`text-2xl font-medium ${styles.navlist}`} href="#">Contact Us</a></li>
            </ul>
        </nav>
    )
}