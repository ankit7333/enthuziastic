import styles from './invited.module.scss'

export default function Invited() {
    return(
        <div className={`shadow-md py-5 px-5 ${styles.invited}`}>
            <div className={`container mx-auto flex items-center justify-between`}>
                <p className={`font-medium text-2xl`}>you are invited to join the batch</p>
                <button className={`font-semibold text-2xl text-white rounded-lg p-1 ${styles.acceptbtn}`}>Accept &amp; Proceed to Pay</button>
            </div>
        </div>
    )
}