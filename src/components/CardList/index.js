import styles from "./CardList.module.css"
import Card from "../Card"

function CardList({powers, adicionar, setMeusPoderes}){


    function adicionarPoder(power){
        setMeusPoderes = power;
    }


    return(
        <div className={styles.cardList}>
        {powers.map((power, key)=>(
            <Card power={power} key={key} adicionar={adicionar}/>)
        )}
        </div>
    )
}
export default CardList