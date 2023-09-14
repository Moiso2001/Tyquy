/* React */
import {Link} from 'react-scroll';

/* CSS */
import styles from "./Card.module.css"

/* Icons and images */
import rune1 from "../../../assets/tribu decoration/rune1.png"
import rune2 from "../../../assets/tribu decoration/rune2.png"
import rune3 from "../../../assets/tribu decoration/rune3.png"

import runeCircle from "../../../assets/tribu decoration/pngwing.com (1) (1).png"

/* Utils and controllers */
import { getRandomNumber } from '../../../utils/controllers'


type CardProps = {
    title: string
    text: string
    img: string
    id: number
}

type IconsCardProps = {
    number: number
}

export function IconsCard({number}: IconsCardProps) {
    return(
        <>
            {number === 1
             && <>
                    <img className={styles.rune1} src={rune1}/>
                    <img className={styles.rune2} src={rune2}/>
                </>
            }

            {number === 2
             && <>
                    <img className={styles.rune1} src={rune3}/>
                    <img className={styles.rune2} src={rune1}/>
                </>
            }

            {number === 3
             && <>
                    <img className={styles.runeCircle1} src={runeCircle}/>
                </>
            }

            {number === 4
             && <>
                    <img className={styles.runeCircle2} src={runeCircle}/>
                </>
            }
        </>
    )
}


export default function Card({title,text,img}: CardProps) {
  return (
    <div className={styles.div_global}>
        <img src={img} className={styles.global__image}/>

        <div className={styles.div_info}>
            {/* Icons */}
            <IconsCard number={getRandomNumber(1,4)}/>

            <div className={styles.info__div_text}>
                <span>{title}</span>
                <p>{text}</p>
            </div>
            <Link to={title} spy={true} smooth={true} offset={-55} duration={800}>                
                <div className={styles.info__div_button}>
                    <button>Ver precios</button>
                </div>
            </Link>
        </div>
    </div>
  )
}
