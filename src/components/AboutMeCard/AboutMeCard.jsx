import styles from './AboutMeCard.module.scss';
import ContentCard from './ContentCard/ContentCard';
import ImageMe from './ImageMe/ImageMe';
import TitleAboutCard from './TitleAboutCard/TitleAboutCard';

const AboutMeCard = () => {
    return (
        <div className={styles.container}>
            <TitleAboutCard />
            <ImageMe />
            <ContentCard />
        </div>
    )
}

export default AboutMeCard;