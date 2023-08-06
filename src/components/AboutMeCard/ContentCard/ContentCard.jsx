import styles from './ContentCard.module.scss';

const ContentCard = () => {
    return (
        <div className={styles.container}>
            <p>
                Привет! Меня зовут <b>Егорова Екатерина</b>. Я квалифицированный <b>онлайн</b> фитнес тренер. 
                Вместе мы сможем построить тело <b>мечты</b>!
            </p>
        </div>
    )
}

export default ContentCard;