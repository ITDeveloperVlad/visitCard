import styles from './TitleCard.module.scss';
import WidgetCard from "./WidgetCard/WidgetCard";

const TitleCard = () => {
    return (
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
            <WidgetCard />
        </div>
    )
}

export default TitleCard;