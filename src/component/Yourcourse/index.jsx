import styles from './yourcourse.module.scss'

export default function YourCourse() {
    return(
        <div className={`${styles.yourcourse}`}>
            <div className={`font-semibold text-3xl mb-5 ${styles.title}`}>Your Course</div>
            <div className={`flex border border-solid rounded-lg p-5 shadow-md ${styles.yourcourse__inner}`}>
                <div >
                    {/* <img src="../../public/images/thumb.png" alt="thumb" /> */}
                    <span className={`bg-no-repeat bg-center inline-block mr-5 ${styles.thumbnail}`} />
                </div>
                <div className={`flex flex-1 flex-col relative ${styles.yourcourse__right}`}>
                    <span className={`font-medium text-3xl ${styles.title__sub}`}>Violin</span>
                    <label className={`absolute right-0 top-0 font-medium rounded text-2xl px-2 py-1 ${styles.notstarted}`}>Not Started</label>
                    <p className={`text-justify my-5`}>Learn to play violin with expert music teachers online at Enthuziastic. Start from scratch and learn to play popular melodies. Kids or adults, anybody can join this course and start learning violin.</p>
                    <div className={`flex items-center justify-between`}>
                        <ul className={`grid grid-cols-3 gap-5`}>
                            <li className={`flex items-center`}>
                                <span><b className={`font-semibold`}>120 live </b>tutoring sessions</span>
                            </li>
                            <li className={`flex items-center`}>
                                <span>Access on <b className={`font-semibold`}>mobile and web</b></span>
                            </li>
                            <li className={`flex items-center`}>
                                <span>Access on <b className={`font-semibold`}>mobile and web</b></span>
                            </li>
                            <li className={`flex items-center`}>
                                <span><b className={`font-semibold`}>12 Modules</b></span>
                            </li>
                            <li className={`flex items-center`}>
                                <span><b className={`font-semibold`}>Certificate </b>of completion</span>
                            </li>
                            <li className={`flex items-center`}>
                                <span><b className={`font-semibold`}>Certificate </b>of completion</span>
                            </li>
                        </ul>
                        <button type="button" className={`flex items-center justify-center shadow-md rounded-lg text-white p-4 px-8 ${styles.curriculum}`}>
                            <i className={`bg-no-repeat bg-center bg-cover inline-block mr-5 ${styles.curriculum__icon}`} />
                            <span>Curriculum</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}