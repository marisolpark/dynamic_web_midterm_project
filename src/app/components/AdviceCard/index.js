"use-client"
 import styles from "../AdviceCard/AdviceCard.module.css"

 const adviceCard = ({todayadvice}) => (
    <div className={styles.adviceContainer}>
        <h2>Your advice of the day is ...🤔</h2>
        <p>{todayadvice}</p>
    </div>
 );

 export default adviceCard