import styles from "./Cats.module.css"
import defaultJson  from "../../data/images.json"
import { useState } from "react";
import { Images } from "../../components/Images";
import { Image } from "../../components/Image";
import { Controls } from "../Controls";

export function Cats() {
    const [images, setImages] = useState(defaultJson)
    const [active, setActive] = useState(images[0].id)

    function prev() {
        const activeImg = images.find(i => active === i.id)
        const activeIndex = images.indexOf(activeImg)
        if(activeIndex <= 0) {
            setActive(images[images.length-1].id)
        } else {
            setActive(images[activeIndex-1].id)
        }
    }
    function next() {
        const activeImg = images.find(i => active === i.id)
        const activeIndex = images.indexOf(activeImg)
        if(activeIndex >= images.length-1) {
            setActive(images[0].id)
        } else {
            setActive(images[activeIndex+1].id)
        }
    }

    function rand1() {
        setActive(images[Math.floor(Math.random() * images.length)].id)
    }

    function rand2() {
        const arr = [...images]
        setImages(arr.sort(() => Math.random() - .5))
    }

    return <>
    <div className={styles.cats}>
        <Image width="600px" image={images.find(i => active === i.id)} />
        <Controls prev={prev} next={next} rand1={rand1} rand2={rand2}/>
        <Images active={active} images={images} setImage={setActive} />
    </div>
    </>;
}
