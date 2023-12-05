// import Image from 'react/image'
import styles from './footer.module.scss'
// import Linkedin from '../../public/images/LinkedIn_White.svg';

export default function Footer() {
    return(
        <footer>
            <div className={`pt-20 pb-10 ${styles.footer}`}>
                <div className={`container mx-auto flex flex-col justify-between`}>
                    <div className={`flex justify-between ${styles.footer__top}`}>
                        <div className={`flex-1 w-25 mr-20 ${styles.footer__left}`}>
                            <a href='#' className={`bg-no-repeat bg-center bg-cover inline-block ${styles.footer__logo}`} />
                            <p className={`text-white font-medium mt-5 mb-5`}>EnthuZiastic is a vibrant and dynamic community dedicated to fostering a passion for learning and personal growth. </p>
                            <ul className={`flex items-center gap-5`}>
                                <li>
                                    <a href='#' className={`bg-no-repeat bg-center bg-cover inline-block ${styles.linkedin}`} />
                                </li>
                                <li>
                                    <a href='#' className={`bg-no-repeat bg-center bg-cover inline-block ${styles.twitter}`} />
                                </li>
                                <li>
                                    <a href='#' className={`bg-no-repeat bg-center bg-cover inline-block ${styles.facebook}`} />
                                </li>
                                <li>
                                    <a href='#' className={`bg-no-repeat bg-center bg-cover inline-block ${styles.youtube}`} />
                                </li>
                            </ul>
                        </div>
                        <div className={`flex-auto w-70 flex ${styles.footer__right}`}>
                            <ul className={`flex-auto w-25`}>
                                <li><b className={`text-white font-extrabold text-2xl`}>COMPANY</b></li>
                                <li><a className={`text-white`} href="#">About</a></li>
                                <li><a className={`text-white`} href="#">Premium</a></li>
                                <li><a className={`text-white`} href="#">Blog</a></li>
                                <li><a className={`text-white`} href="#">Affiliate Program</a></li>
                                <li><a className={`text-white`} href="#">Get Coupon</a></li>
                            </ul>
                            <ul className={`flex-auto w-25`}>
                                <li><b className={`text-white font-extrabold text-2xl`}>HELP AND SUPPORT</b></li>
                                <li><a className={`text-white`} href="#">Contact Us</a></li>
                                <li><a className={`text-white`} href="#">Knowledge Center</a></li>
                                <li><a className={`text-white`} href="#">Premium Support</a></li>
                                <li><a className={`text-white`} href="#">Sponsorships</a></li>
                            </ul>
                            <ul className={`flex-auto w-25`}>
                                <li><b className={`text-white font-extrabold text-2xl`}>RESOURCES</b></li>
                                <li><a className={`text-white`} href="#">Third-Party Tools</a></li>
                                <li><a className={`text-white`} href="#">Illustrations</a></li>
                                <li><a className={`text-white`} href="#">Themesberg</a></li>
                                <li><a className={`text-white`} href="#">Bluehost</a></li>
                                <li><a className={`text-white`} href="#">Stock Photos</a></li>
                            </ul>
                            <ul className={`flex-auto w-25`}>
                                <li><b className={`text-white font-extrabold text-2xl`}>LEGAL</b></li>
                                <li><a className={`text-white`} href="#">Privacy Policy</a></li>
                                <li><a className={`text-white`} href="#">Terms &amp; Conditions</a></li>
                                <li><a className={`text-white`} href="#">EULA</a></li>
                            </ul>
                        </div>
                    </div>
                    <p className={`text-white border-t border-solid text-center font-medium pt-10 mt-10 ${styles.footer__bottom}`}>
                        © 2023 EnthuZiastic, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}