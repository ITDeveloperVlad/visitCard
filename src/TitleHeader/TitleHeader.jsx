import './TitleHeader.css'

const TitleHeader = () => {
    return (
        <header className="headerContainer">
            <div className="name">
                <p>
                    Екатерина
                </p>
                <p className='name-color'>
                    Егорова
                </p>
            </div>
            <div className="caption">
                <p>Онлайн фитнес тренер</p>
            </div>
            <div className="info">
                <p>
                    8 951 134 81 50
                </p>
            </div>
        </header>
    )
}

export default TitleHeader;