"use-client";
import styles from "../ZodiacCard/zodiacCard.module.css"

const ZodiacCard = ({zodiacId, zodiacBlurb, zodiacDates, zodiacLove, zodiacMoney}) => {
    return (
        <div className={styles.containter}>
            <h1 className={styles.zodiacTitle}>{zodiacId}</h1>
            <p className={styles.zodiacdates}>{zodiacDates}</p>
            <div className={styles.blurbCont}>
                <p>{zodiacBlurb}</p>
            </div>
            <div className={styles.extraInfoContainer}>
                <div>
                    <h2>Your Love Predictions 💗</h2>
                    <p>{zodiacLove}</p>
                </div>
                <div>
                    <h2>Yourfinancial Predictions 💸</h2>
                    <p>{zodiacMoney}</p>
                </div>
            </div>
        </div>
    )
}

export default ZodiacCard;