import styles from './style.module.css'

const Card = ({
    key,
    name,
    image,
    gender,
    origin,
    episode,
}) => {
        return(
            <div className={styles.card}>
                <div key={key}>
                    <h6 className={styles.titleElement}> {name} </h6>
                    <img src={image} alt={name} width="240px" height="auto" />
                    <p>{gender}</p>
                    <p>{origin?.name}</p>
                    <p>Episódios {episode.length} </p>
                </div>
            </div>
        )
}
export default Card;