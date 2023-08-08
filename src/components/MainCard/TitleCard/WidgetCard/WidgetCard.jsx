import Widget from './Widget/Widget';

import styles from './WidgetCard.module.scss';

const WidgetCard = ({widgets}) => {
    return (
        <div className={styles.widgetContainer}>
            {widgets.map(({id, ...rest}) => <Widget key={id} {...rest}/>)}
        </div>
    )
}

export default WidgetCard;