import { Card } from "antd";

import trainImg from '../../public/images/train.jpeg'
import FormRecord from './FormRecord/FormRecord';

import styles from './FormRecordCard.module.scss';
import AnonsCard from "./AnonsCard/AnonsCard";

const FormRecordCard = () => {
    return (
        <div className={styles.footer}>
            <AnonsCard />
            <FormRecord />
        </div>
    )
}

export default FormRecordCard;