import styles from './pricerate.module.scss'

export default function Pricerate() {
    return(
        <div className={`grid grid-cols-3 gap-5 my-10 items-center ${styles.pricerate}`}>
            <div className={`flex flex-col text-2xl ${styles.pricerate__left}`}>
                <span>Pro Rated Price</span>
                <p className={`font-medium`}><b className={`font-bold text-5xl`}>$ 28.89</b> (14 sessions)</p>
            </div>
            <button className={`font-medium rounded-lg border border-solid ${styles.button} ${styles.button__primary}`}>Apply To Learn</button>
            <button className={`font-medium rounded-lg border border-solid ${styles.button} ${styles.button__secondary}`}>Apply To Learn</button>
        </div>
    )
}