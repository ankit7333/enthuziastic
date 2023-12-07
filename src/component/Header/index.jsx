import styles from './header.module.scss'
import Nav from '../Nav'
import Invited from '../Invited'
import Accepting from '../Accepting'

export default function Header() {
    return(
        <header>
            <div className={`py-3 ${styles.header}`}>
                <div className={`container mx-auto flex items-center justify-between ${styles.header__inner}`}>
                    <div className={`${styles.header__left}`}>
                        <a className={`bg-no-repeat bg-center bg-cover inline-block ${styles.logo}`} href='www.google.com'></a>
                    </div>
                    <div className={`${styles.header__middle}`}>
                        <Nav />
                    </div>
                    <div className={`flex items-start justify-between ${styles.header__right}`}>
                        <div className={`flex items-center justify-between gap-2 pr-3`}>
                            <button type="button" className={`p-1 ${styles.login}`}>Log In</button>
                            <button type="button" className={`p-1 mx-10 font-medium rounded-lg text-white ${styles.getstarted}`}>Get Started</button>
                            <button className={`bg-no-repeat bg-center bg-cover inline-block ${styles.whatsapp}`} />
                        </div>
                        <div className={`flex items-center justify-between gap-2`}>
                            <button className={`bg-no-repeat bg-center bg-cover inline-block ${styles.linkedin}`} />
                            <button className={`bg-no-repeat bg-center bg-cover inline-block ${styles.facebook}`} />
                        </div>
                    </div>
                </div>
            </div>
            <Invited />
            <Accepting />
        </header>
    )
}