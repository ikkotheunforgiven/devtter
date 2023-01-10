import styles from 'styles/Home.module.css'

export default function HomePage() {
    return (
        <>
            <div className={styles.homeDiv}>
                <header className={styles.topBar}>
                    <h2 className={styles.subtitle}>Inicio</h2>
                </header>
                <section className={styles.content}></section>
                <nav className={styles.botBar}></nav>
            </div>
        </>
    )
}