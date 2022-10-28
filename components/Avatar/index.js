import styles from '../../styles/Avatar.module.css'

export default function Avatar({ alt, src, text }) {
    return (
      <span className={styles.container}>
        <img className={styles.avatar} alt={alt} src={src} title={alt} />
        {text && <strong>{text}</strong>}
      </span>
    )
  }