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
                            <a href='www.google.com' className={`bg-no-repeat bg-center bg-cover inline-block ${styles.footer__logo}`}></a>
                            {/* <span className={`bg-no-repeat bg-center bg-cover inline-block ${styles.footer__logo}`} /> */}
                            <p className={`text-white font-medium mt-5 mb-5`}>EnthuZiastic is a vibrant and dynamic community dedicated to fostering a passion for learning and personal growth. </p>
                            <ul className={`flex items-center gap-5`}>
                                <li>
                                    {/* <a href='#' className={`bg-no-repeat bg-center bg-cover inline-block ${styles.linkedin}`} ></a> */}
                                    <span className={`bg-no-repeat bg-center bg-cover inline-block ${styles.linkedin}`} />
                                </li>
                                <li>
                                    {/* <a href='#' className={`bg-no-repeat bg-center bg-cover inline-block ${styles.twitter}`} ></a> */}
                                    <span className={`bg-no-repeat bg-center bg-cover inline-block ${styles.twitter}`} />
                                </li>
                                <li>
                                    {/* <a href='#' className={`bg-no-repeat bg-center bg-cover inline-block ${styles.facebook}`} ></a> */}
                                    <span className={`bg-no-repeat bg-center bg-cover inline-block ${styles.facebook}`} />
                                </li>
                                <li>
                                    {/* <a href='#' className={`bg-no-repeat bg-center bg-cover inline-block ${styles.youtube}`} ></a> */}
                                    <span className={`bg-no-repeat bg-center bg-cover inline-block ${styles.youtube}`} />
                                </li>
                            </ul>
                        </div>
                        <div className={`flex-auto w-70 flex ${styles.footer__right}`}>
                            <ul className={`flex-auto w-25`}>
                                <li><b className={`text-white font-extrabold text-2xl`}>COMPANY</b></li>
                                <li><a className={`text-white`} href="www.google.com">About</a></li>
                                <li><a className={`text-white`} href="www.google.com">Premium</a></li>
                                <li><a className={`text-white`} href="www.google.com">Blog</a></li>
                                <li><a className={`text-white`} href="www.google.com">Affiliate Program</a></li>
                                <li><a className={`text-white`} href="www.google.com">Get Coupon</a></li>
                            </ul>
                            <ul className={`flex-auto w-25`}>
                                <li><b className={`text-white font-extrabold text-2xl`}>HELP AND SUPPORT</b></li>
                                <li><a className={`text-white`} href="www.google.com">Contact Us</a></li>
                                <li><a className={`text-white`} href="www.google.com">Knowledge Center</a></li>
                                <li><a className={`text-white`} href="www.google.com">Premium Support</a></li>
                                <li><a className={`text-white`} href="www.google.com">Sponsorships</a></li>
                            </ul>
                            <ul className={`flex-auto w-25`}>
                                <li><b className={`text-white font-extrabold text-2xl`}>RESOURCES</b></li>
                                <li><a className={`text-white`} href="www.google.com">Third-Party Tools</a></li>
                                <li><a className={`text-white`} href="www.google.com">Illustrations</a></li>
                                <li><a className={`text-white`} href="www.google.com">Themesberg</a></li>
                                <li><a className={`text-white`} href="www.google.com">Bluehost</a></li>
                                <li><a className={`text-white`} href="www.google.com">Stock Photos</a></li>
                            </ul>
                            <ul className={`flex-auto w-25`}>
                                <li><b className={`text-white font-extrabold text-2xl`}>LEGAL</b></li>
                                <li><a className={`text-white`} href="www.google.com">Privacy Policy</a></li>
                                <li><a className={`text-white`} href="www.google.com">Terms &amp; Conditions</a></li>
                                <li><a className={`text-white`} href="www.google.com">EULA</a></li>
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