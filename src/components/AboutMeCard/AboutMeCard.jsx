import styles from './AboutMeCard.module.scss';
import ContentCard from './ContentCard/ContentCard';
import ImageMe from './ImageMe/ImageMe';
import TitleAboutCard from './TitleAboutCard/TitleAboutCard';
import WidgetCard from '../MainCard/TitleCard/WidgetCard/WidgetCard';

import { WIDGETS_ITEMS } from './constants/constants';

const AboutMeCard = () => {
    return (
        <div className={styles.container}>
            <TitleAboutCard />
            <ImageMe />
            <ContentCard />
            <div className={styles.widgetContainer}>
                <WidgetCard widgets={WIDGETS_ITEMS}/>
            </div>
        </div>
    )
}

export default AboutMeCard;