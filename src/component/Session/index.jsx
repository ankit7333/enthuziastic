import styles from './session.module.scss'

export default function Session() {
    return(
        <ul className={`grid grid-cols-3 p-4 shadow-md rounded-lg my-10 ${styles.session}`}>
           <li data-attribute="24" className={`flex items-center`}>
                <span className={`text-white`}>Total Sessions</span>
            </li>
            <li data-attribute="14" className={`flex items-center`}>
                <span className={`text-white`}>Sessions not Started</span>
            </li>
            <li data-attribute="10" className={`flex items-center`}>
                <span className={`text-white`}>Sessions  Completed</span>
            </li>
        </ul>
    )
}