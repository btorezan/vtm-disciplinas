import styles from "./CardList.module.css"
import Card from "../Card"

function CardList({powers}){
    return(
        <div className={styles.cardList}>
        {powers.map((power, key)=>(
            <Card power={power} key={key}/>)
        )}
        </div>
    )
}
export default CardList