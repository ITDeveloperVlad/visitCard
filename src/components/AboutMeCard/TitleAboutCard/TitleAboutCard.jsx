import styles from './TitleAboutCard.module.scss';

const TitleAboutCard = () => {
    return (
        <span className={styles.titleBlock}>
            <p>
                ОБО
            </p>
            <p className={styles.orangeText}>
                МНЕ
            </p>
        </span>
    )
}

export default TitleAboutCard;