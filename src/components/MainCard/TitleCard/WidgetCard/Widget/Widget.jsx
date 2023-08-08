import styles from './Widget.module.scss';

const Widget = ({titleCount, titleContent, icon}) => {
    return (
        <span className={styles.staticCard}>
            <span className={styles.icon}>
                {icon}
            </span>
            <p>
                {titleCount}
            </p>
            <p className={styles.infoStatic}> 
                {titleContent}
            </p>
        </span>
    )
}

export default Widget;