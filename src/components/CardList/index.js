import styles from "./CardList.module.css"
import Card from "../Card"

function CardList({poderes, handleAdicionarPoder, botaoAdicionar, handleRemoverPoder, botaoRemover}){
    function adicionarPoder(poder){
         handleAdicionarPoder(poder)
    }

    function removerPoder(poder){
         handleRemoverPoder(poder)
    }



    return(
        <div className={styles.cardList}>
        {
            poderes.map((poder, key)=>(
              <Card poder={poder} key={key} adicionarPoder = {adicionarPoder} botaoAdicionar = {botaoAdicionar} removerPoder = {removerPoder} botaoRemover = {botaoRemover}/>)
           )
        }   
        </div>
    )
}
export default CardList