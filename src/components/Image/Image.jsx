import styles from "./Image.module.css"
export function Image({ image, width = 300, setImage }) {
    return <img src={image.url} alt={image.title} className={styles.image} style={{ width }} onClick={() => setImage(image.id)} />
}