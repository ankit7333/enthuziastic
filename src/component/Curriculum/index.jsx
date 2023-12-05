import styles from './curriculum.module.scss'

export default function Curriculum() {
    return(
        <div className={`${styles.curriculum}`}>
            <div className={`font-semibold text-3xl my-3 ${styles.title}`}>Curriculum</div>
            <div className={`border border-solid rounded-lg p-5 text-black ${styles.content}`}>
                <p>The violin course is designed to provide comprehensive instruction and guidance for beginners and intermediate learners looking to master the art of playing the violin. Throughout the course, students will receive a well-structured curriculum that covers the essential aspects of violin playing, from the basics to more advanced techniques.</p>
                <p>The course begins with an introduction to the violin, its parts, and how to properly hold the instrument and the bow. Students will learn the fundamentals of reading sheet music and understanding musical notation specific to the violin.</p>
                <p>As the course progresses, students will be introduced to basic bowing techniques, finger placements, and scales. They will gradually advance to more complex bowing styles, vibrato, and shifting positions on the fingerboard. Proper posture and hand positioning will be emphasized to ensure students develop good habits and prevent injuries.</p>
                <p>Throughout the course, students will be exposed to a variety of musical pieces, ranging from classical to contemporary, allowing them to apply their newly acquired skills and improve their performance abilities.
                The violin course will also cover music theory relevant to the instrument, enabling students to grasp the principles of harmony, rhythm, and musical expression, enhancing their overall musicianship.</p>
                <p>In addition to individual practice, the course may include ensemble playing opportunities, providing students with the chance to collaborate with other musicians and develop their ensemble skills.
                By the end of the course, students should have gained a solid foundation in violin playing, a good understanding of music theory, and the ability to perform various pieces confidently. Whether pursuing a professional music career or playing the violin for personal enjoyment, this course aims to equip students with the necessary skills to continue advancing their musical journey.</p>
            </div>
        </div>
    )
}