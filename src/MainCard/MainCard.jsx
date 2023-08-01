import { Card } from "antd";
import mainImage from "../public/images/mainImage.png";
import { AiFillSignal, AiFillStar, AiFillTrophy } from "react-icons/ai";

import styles from './MainCard.module.scss';

const MainCard = () => {
    return (
        <Card className={styles.cardContainer}
        cover={
            <div className={styles.imgContainer}>
                <img className={styles.img} src={mainImage} alt='фото тренера'/>
            </div>
          }>
            <div className={styles.titleContainer}>
                <span className={styles.titleBlock}>
                    <p>
                        ФИТНЕС
                    </p>
                    <p className={styles.orangeText}>
                        ТРЕНЕР
                    </p>
                </span>
                <span className={styles.motivInfo}> 
                    <p>
                        РАБОТАЙТЕ БОЛЕЕ ЭФФЕКТИВНО, ЧЕМ КОГДА ЛИБО!
                    </p>
                </span>
                <div className={styles.widgetContainer}>
                    <span className={styles.staticCard}>
                        <AiFillSignal className={styles.icon} size={60}/>
                        <p>
                            180+
                        </p>
                        <p className={styles.infoStatic}> 
                            клиентов
                        </p>
                    </span>

                    <span className={styles.staticCard}>
                        <AiFillStar className={styles.icon} size={60}/>
                        <p>
                            {`> 10`}
                        </p>
                        <p className={styles.infoStatic}>
                            наград
                        </p>
                    </span>

                    <span className={styles.staticCard}>
                        <AiFillTrophy className={styles.icon} size={60}/>
                        <p>
                            20
                        </p>
                        <p className={styles.infoStatic}> 
                            тренеровок
                        </p>
                    </span>
                </div>
            </div>
        </Card>
    )
}

export default MainCard;