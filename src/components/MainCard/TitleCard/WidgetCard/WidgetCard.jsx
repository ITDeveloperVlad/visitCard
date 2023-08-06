import { AiFillSignal, AiFillStar, AiFillTrophy } from "react-icons/ai";

import styles from './WidgetCard.module.scss';

const WidgetCard = () => {
    return (
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
    )
}

export default WidgetCard;