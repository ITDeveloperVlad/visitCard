import { Card } from "antd";
import mainImg from "../../public/images/mainImg.png";
import FormRecordCard from "../FormRecordCard/FormRecordCard";
import TitleCard from './TitleCard/TitleCard';

import styles from './MainCard.module.scss';

const MainCard = () => {
    return (
        <Card className={styles.cardContainer} >
            <div className={styles.imgContainer}>
                <img className={styles.img} src={mainImg} alt='фото тренера'/>
            </div>
            <TitleCard />
            <FormRecordCard />
        </Card>
    )
}

export default MainCard;