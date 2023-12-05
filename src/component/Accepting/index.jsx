import styles from './accepting.module.scss'

export default function Accepting() {
    return(
        <div className={`shadow-md p-5 ${styles.accepting}`}>
            <div className={`flex items-start justify-between container mx-auto`}>
                <div className={`flex-1`}>
                    <button type="button" className={`flex items-center justify-between gap-4 ${styles.back__btn}`}>
                        <i className={`bg-no-repeat bg-center bg-cover inline-block ${styles.back}`} />
                        <span>Back</span>
                    </button>
                </div>
                <div className={`flex-1`}>
                    <div className={`flex flex-col items-center ${styles.accepting__student}`}>
                        <span className={`font-medium text-3xl ${styles.accepting__top}`}>Accepting Students</span>
                        <span className={`border border-solid rounded-[35px] text-3xl p-4 mt-5 ${styles.accepting__bottom}`}>Last date for applying <b className={`ml-4`}>28 March, 2023</b></span>
                    </div>
                </div>
                <div className={`flex-1 flex justify-end`}>
                    <button type="button" className={`flex items-center text-3xl justify-between text-white rounded-[14px] p-5 ${styles.invite__btn}`}>
                        <span>Invite Your Friends</span>
                        <i className={`bg-no-repeat bg-center bg-[length:100%_100%] inline-block ${styles.invite}`} />
                    </button>
                </div>
            </div>
        </div>
    )
}