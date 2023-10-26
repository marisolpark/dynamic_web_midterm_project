"use-client"
 import styles from "../AdviceCard/adviceCard.module.css"

 const adviceCard = ({todayadvice}) => (
    <div>
        <p>Your advice of the day is ...: {todayadvice}</p>
    </div>
 );

 export default adviceCard