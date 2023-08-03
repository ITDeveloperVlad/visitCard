import { Card } from "antd";

import trainImg from '../../public/images/train.jpeg'
import FormRecord from './FormRecord/FormRecord';

import styles from './FormRecordCard.module.scss';

const FormRecordCard = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <img className={styles.imgTrain} src={trainImg} alt='Тренировка' />
            </div>
            <FormRecord />
        </div>
    )
}

export default FormRecordCard;