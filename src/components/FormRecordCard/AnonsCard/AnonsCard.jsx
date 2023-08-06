import { ANONS_CARD_ITEMS } from './constants/constants';

import styles from '../AnonsCard/AnonsCard.module.scss';

const AnonsCard = () => {
    return (
        <div className={styles.container}>
            <p className={styles.titleMain}>
                Зачем мне идти на консультацию?
            </p>
            <ul className={styles.list}> 
                {ANONS_CARD_ITEMS.map(({ id, title, icon }) => (
                    <li key={id}>{icon}<p>{title}</p></li>
                ))}
            </ul>
        </div>
    )
}

export default AnonsCard;