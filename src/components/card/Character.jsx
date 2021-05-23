//styles
import './Character.css'

const Character = ({name, img, specie, status, lastLocation, firstSeen}) => {
    return (
        <article className = "character">
            <img 
                src = {img}
                alt = {name} 
                className = "character__img"
            />

            <div className = "character__data">
                <div className = "character__info">
                    <h2 className = "character__name">
                        {name}
                    </h2>

                    <p className = 'character__status'>
                        <span className = {`character__alive ${status}`}></span>
                        {status} - {specie}
                    </p>
                </div>

                <div className ="character__info">
                    <h3 className = "character__subtitle">
                        Last known location:
                    </h3>

                    <p className = "character__date">
                        {lastLocation}
                    </p>
                </div>

                <div className = "character__info">
                    <h3 className = "character__subtitle">
                        First seen in:
                    </h3>

                    <p className = "character__date">
                        {firstSeen}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Character