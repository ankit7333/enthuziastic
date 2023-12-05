import styles from './batch.module.scss'

export default function Batch() {
    return(
        <div className={`flex flex-col rounded-large mr-10 ${styles.batch}`}>
            <label className={`font-medium rounded-t-large p-2 w-full text-center`}>Batch No - 01234567</label>
            <ul className={`px-10 ${styles.batch__ul}`}>
                <li className={`flex items-center my-5`}>
                    <span className={`bg-[length:100%] bg-center bg-no-repeat inline-block mr-5 ${styles.play}`} />
                    <span>Session : <b className={`font-medium text-3xl`}>24</b></span>
                </li>
                <li className={`flex items-center my-5`}>
                    <span className={`bg-[length:100%_100%] bg-center bg-no-repeat inline-block mr-5 ${styles.learner}`} />
                    <span>Max Learners : <b className={`font-medium text-3xl`}>4</b></span>
                </li>
                <li className={`flex items-center my-5`}>
                    <span className={`bg-[length:100%_100%] bg-center bg-no-repeat inline-block mr-5 ${styles.language}`} />
                    <span>Language : <b className={`font-medium text-3xl`}>English</b></span>
                </li>
                <li className={`flex items-center my-5`}>
                    <span className={`bg-[length:100%_100%] bg-center bg-no-repeat inline-block mr-5 ${styles.agegroup}`} />
                    <span>Age Group : <b className={`font-medium text-3xl`}>12 to 24</b></span>
                </li>
                <li className={`flex items-center my-5`}>
                    <span className={`bg-[length:100%_100%] bg-center bg-no-repeat inline-block mr-5 ${styles.startdate}`} />
                    <span>Start Date : <b className={`font-medium text-3xl`}>10 Aug 2023</b></span>
                </li>
            </ul>
            <div className={`px-10 ${styles.schedule}`}>
                <div className={`font-medium mb-5 ${styles.schedule__title}`}>Schedule <b className={`font-semibold`}>(Session / Week - 4)</b></div>
                <ul className={`grid grid-cols-7 gap-2 border-b border-solid mb-5 pb-20 ${styles.week}`}>
                    <li data-attribute="08:00 AM" className={`relative font-medium text-xl cursor-pointer rounded-lg border border-solid flex items-center justify-center`}>Su</li>
                    <li data-attribute="08:00 AM" className={`relative font-medium text-xl cursor-pointer rounded-lg border border-solid flex items-center justify-center`}>M</li>
                    <li data-attribute="08:00 AM" className={`relative font-medium text-xl cursor-pointer rounded-lg border border-solid flex items-center justify-center ${styles.active}`}>T</li>
                    <li data-attribute="08:00 AM" className={`relative font-medium text-xl cursor-pointer rounded-lg border border-solid flex items-center justify-center`}>W</li>
                    <li data-attribute="08:00 AM" className={`relative font-medium text-xl cursor-pointer rounded-lg border border-solid flex items-center justify-center ${styles.active}`}>Th</li>
                    <li data-attribute="08:00 AM" className={`relative font-medium text-xl cursor-pointer rounded-lg border border-solid flex items-center justify-center`}>F</li>
                    <li data-attribute="08:00 AM" className={`relative font-medium text-xl cursor-pointer rounded-lg border border-solid flex items-center justify-center`}>S</li>
                </ul>
            </div>
            <div className={`px-10 pb-10 ${styles.rating}`}>
                <div className={`mb-5 ${styles.rating__title}`}>Host / Teacher</div>
                <div className={`flex items-center my-5 ${styles.rating__user}`}>
                    <span className={`bg-center bg-no-repeat inline-block mr-5 bg-cover ${styles.user__img}`} />
                    <span className={`flex flex-col ${styles.user__text}`}>
                        <span className={`font-medium`}>Avinash Dave</span>
                        <span className={`flex gap-2 items-center`}>
                            <span className={`font-medium ${styles.user__rate}`}>4.5</span>
                            <span className={`flex gap-2 items-center relative ${styles.star__wrap}`}>
                                <span className={`bg-center bg-no-repeat inline-block bg-cover ${styles.star}`} />
                                <span className={`bg-center bg-no-repeat inline-block bg-cover ${styles.star}`} />
                                <span className={`bg-center bg-no-repeat inline-block bg-cover ${styles.star}`} />
                                <span className={`bg-center bg-no-repeat inline-block bg-cover ${styles.star}`} />
                                <span className={`bg-center bg-no-repeat inline-block bg-cover ${styles.star} ${styles.star__stroke}`} />
                            </span>
                            <span className={`font-medium`}>(120)</span>
                        </span>
                    </span>
                </div>
                <div className={`mb-5 ${styles.rating__title}`}>Enrollers</div>
                <div className={`${styles.rating__user}`}>
                    <span className={`bg-center relative bg-no-repeat inline-block bg-cover ${styles.user__img} ${styles.user__img1}`} />
                    <span className={`bg-center relative bg-no-repeat inline-block bg-cover ${styles.user__img} ${styles.user__img2}`} />
                    <span className={`bg-center relative bg-no-repeat inline-block bg-cover ${styles.user__img} ${styles.user__img3}`} />
                </div>
            </div>
        </div>
    )
}