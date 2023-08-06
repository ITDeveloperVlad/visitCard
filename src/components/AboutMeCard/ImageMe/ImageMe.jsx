import styles from './ImageMe.module.scss';
import img from '../../../public/images/aboutMe.jpg';

const ImageMe = () => {
    return (
        <div className={styles.imgContainer}>
            <img src={img} alt="мое фото"/>
        </div>
    )
}

export default ImageMe;