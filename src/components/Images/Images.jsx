import styles from "./Images.module.css"
import { Image } from "../Image/Image"

export function Images({ images, setImage, active }) {
    return <>
    <div className={styles.images}>
    {images.map(i => {
        return <div key={i.id} style={{ border: active === i.id  && "2px solid red" }}>
            <Image setImage={setImage} width="400px" image={i}/>
        </div>
    })}
    </div>
    </>
}